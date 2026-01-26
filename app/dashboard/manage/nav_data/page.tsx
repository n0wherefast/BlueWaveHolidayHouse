"use client";
import { useEffect, useState } from "react";

function isJsonValid(text: string) {
  try { JSON.parse(text); return true; } catch { return false; }
}

export default function ManageNavData() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/admin/nav_data', { credentials: 'include' })
      .then(async (res) => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const json = await res.json();
        setData(json);
      })
      .catch(err => setMessage('Could not load nav_data: ' + err.message))
      .finally(() => setLoading(false));
  }, []);

  const addGroup = () => setData(prev => ([...prev, []]));
  const removeGroup = (gi: number) => setData(prev => prev.filter((_,i) => i!==gi));
  const addLink = (gi: number) => setData(prev => {
    const copy = JSON.parse(JSON.stringify(prev));
    copy[gi].push({ id: Date.now(), name: 'New', path: '#', delay: 0, isMenuPage: false });
    return copy;
  });
  const removeLink = (gi: number, li: number) => setData(prev => {
    const copy = JSON.parse(JSON.stringify(prev));
    copy[gi].splice(li,1);
    return copy;
  });
  const updateLink = (gi: number, li: number, key: string, value: any) => setData(prev => {
    const copy = JSON.parse(JSON.stringify(prev));
    copy[gi][li][key] = value;
    return copy;
  });

  const handleSave = async () => {
    setMessage(null);
    try {
      const res = await fetch('/api/admin/nav_data', {
        method: 'PUT',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || 'Save failed');
      setMessage('Saved successfully');
    } catch (err: any) {
      setMessage('Error: ' + (err?.message || String(err)));
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold">Manage Nav Data (Visual)</h1>
          {loading && <div className="mt-4">Loading...</div>}
          {message && <div className="mt-4 text-red-600">{message}</div>}

          <div className="mt-4 space-y-6">
            {data.map((group, gi) => (
              <div key={gi} className="border p-4 rounded-lg bg-slate-50">
                <div className="flex justify-between">
                  <div className="text-lg font-semibold">Group {gi}</div>
                  <div>
                    <button onClick={() => addLink(gi)} className="mr-2 px-2 py-1 bg-blue-600 text-white rounded">Add link</button>
                    <button onClick={() => removeGroup(gi)} className="px-2 py-1 bg-red-600 text-white rounded">Remove group</button>
                  </div>
                </div>
                <div className="mt-3 space-y-3">
                  {Array.isArray(group) && group.map((link:any, li:number) => (
                    <div key={li} className="p-2 border rounded bg-white">
                      <div className="flex gap-2 items-center">
                        <input className="border p-1 rounded flex-1" value={link.name||''} onChange={e=>updateLink(gi,li,'name',e.target.value)} />
                        <input className="border p-1 rounded w-40" value={link.path||''} onChange={e=>updateLink(gi,li,'path',e.target.value)} />
                        <input type="number" className="border p-1 w-20 rounded" value={link.delay||0} onChange={e=>updateLink(gi,li,'delay',Number(e.target.value))} />
                        <label className="flex items-center gap-2"><input type="checkbox" checked={!!link.isMenuPage} onChange={e=>updateLink(gi,li,'isMenuPage',e.target.checked)} /> Menu</label>
                        <button onClick={()=>removeLink(gi,li)} className="ml-auto px-2 py-1 bg-red-600 text-white rounded">Delete</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <button onClick={addGroup} className="mr-2 px-3 py-1 bg-indigo-600 text-white rounded">Add Group</button>
            <button onClick={handleSave} className="px-3 py-1 bg-green-600 text-white rounded">Save</button>
          </div>
        </div>
      </div>
    </main>
  );
}
