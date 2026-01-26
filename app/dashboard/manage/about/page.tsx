"use client";
import { useEffect, useState } from "react";

function isJsonValid(text: string) {
  try { JSON.parse(text); return true; } catch { return false; }
}

export default function ManageAbout() {
  const [data, setData] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [visual, setVisual] = useState(false);
  const [parsed, setParsed] = useState<any>(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/admin/about', { credentials: 'include' })
      .then(async (res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const json = await res.json();
        const text = JSON.stringify(json, null, 2);
        setData(text);
        try { setParsed(json); } catch {}
      })
      .catch(err => setMessage('Could not load about: ' + err.message))
      .finally(() => setLoading(false));
  }, []);

  const handleSaveRaw = async (rawText: string) => {
    setMessage(null);
    if (!isJsonValid(rawText)) { setMessage('Invalid JSON'); return; }
    try {
      const parsedBody = JSON.parse(rawText);
      const res = await fetch('/api/admin/about', {
        method: 'PUT',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsedBody)
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || 'Save failed');
      setMessage('Saved successfully');
      setParsed(parsedBody);
      setData(JSON.stringify(parsedBody, null, 2));
    } catch (err: any) {
      setMessage('Error: ' + (err?.message || String(err)));
    }
  };

  const handleSave = async () => {
    if (visual && parsed) {
      // convert parsed back to JSON string
      await handleSaveRaw(JSON.stringify(parsed, null, 2));
    } else {
      await handleSaveRaw(data);
    }
  };

  // helper to update parsed structure in visual mode
  const updateParsed = (groupIndex: number, itemIndex: number, key: string, value: any) => {
    try {
      const copy = JSON.parse(JSON.stringify(parsed));
      if (!Array.isArray(copy)) return;
      if (!Array.isArray(copy[groupIndex])) return;
      const obj = copy[groupIndex][itemIndex];
      if (!obj) return;
      if (key === 'sectionTitle') obj.sectionTitle = value;
      if (key === 'items') obj.items = value.split('\n').map((s: string) => s.trim()).filter((s: string) => s.length>0);
      setParsed(copy);
      setData(JSON.stringify(copy, null, 2));
    } catch (e) {
      setMessage('Could not update parsed structure');
    }
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Manage About</h1>
      <div className="mt-4">
        <label className="mr-3">Mode:</label>
        <button onClick={() => setVisual(false)} className={`mr-2 px-3 py-1 rounded ${!visual? 'bg-blue-600 text-white':'border'}`}>Raw</button>
        <button onClick={() => setVisual(true)} className={`px-3 py-1 rounded ${visual? 'bg-blue-600 text-white':'border'}`}>Visual</button>
      </div>
      {loading && <div className="mt-4">Loading...</div>}
      {message && <div className="mt-4 text-red-600">{message}</div>}

      {!visual && (
        <>
          <textarea
            className="w-full h-72 mt-4 font-mono p-2 border"
            value={data}
            onChange={(e) => setData(e.target.value)}
          />
        </>
      )}

      {visual && parsed && Array.isArray(parsed) && (
        <div className="mt-4 space-y-6">
          {parsed.map((group: any[], gi: number) => (
            <div key={gi} className="border p-4">
              <div className="text-lg font-semibold">Group {gi}</div>
              {Array.isArray(group) && group.map((section: any, si: number) => (
                <div key={si} className="mt-3">
                  <label className="block text-sm font-medium">Section title</label>
                  <input className="border p-1 w-full" value={section.sectionTitle || ''} onChange={(e)=>updateParsed(gi, si, 'sectionTitle', e.target.value)} />
                  <label className="block text-sm font-medium mt-2">Items (one per line)</label>
                  <textarea className="w-full border p-1" rows={4} value={(section.items||[]).join('\n')} onChange={(e)=>updateParsed(gi, si, 'items', e.target.value)} />
                </div>
              ))}
            </div>
          ))}
        </div>
      )}

      <div className="mt-3">
        <button onClick={handleSave} className="bg-green-600 text-white px-4 py-2 rounded">Save</button>
      </div>
    </main>
  );
}
