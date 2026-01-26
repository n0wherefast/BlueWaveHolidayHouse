"use client";
import { useEffect, useState } from "react";

function uid() { return String(Date.now()) }

export default function ManagePlaces() {
  const [items, setItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetch('/api/admin/places', { credentials: 'include' })
      .then(async res => {
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const json = await res.json();
        setItems(json);
      })
      .catch(err => setMessage('Could not load places: ' + err.message))
      .finally(() => setLoading(false));
  }, []);

  const addPlace = () => setItems(prev => ([...prev, { id: uid(), name: 'New Place', description: '', image: '', details: '', hashtags: [], author: { name: '' }, publishedDate: '' }]));
  const removePlace = (i:number) => setItems(prev => prev.filter((_,idx)=>idx!==i));
  const updateField = (i:number, key:string, value:any) => setItems(prev=>{
    const copy = JSON.parse(JSON.stringify(prev));
    copy[i][key] = value;
    return copy;
  });

  const handleSave = async () => {
    setMessage(null);
    try {
      const res = await fetch('/api/admin/places', {
        method: 'PUT',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(items)
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || 'Save failed');
      setMessage('Saved successfully');
    } catch (err:any) {
      setMessage('Error: '+(err?.message||String(err)));
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow p-6">
          <h1 className="text-2xl font-bold">Manage Places</h1>
          {loading && <div className="mt-4">Loading...</div>}
          {message && <div className="mt-4 text-red-600">{message}</div>}

          <div className="mt-4 space-y-4">
            {items.map((p, i) => (
              <div key={p.id || i} className="border p-3 rounded-lg bg-slate-50">
                <div className="flex gap-2 items-center">
                  <input className="border p-1 flex-1 rounded" value={p.name||''} onChange={e=>updateField(i,'name',e.target.value)} />
                  <button onClick={()=>removePlace(i)} className="bg-red-600 text-white px-2 py-1 rounded">Delete</button>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <input placeholder="image" className="border p-1 rounded" value={p.image||''} onChange={e=>updateField(i,'image',e.target.value)} />
                  <input placeholder="publishedDate" className="border p-1 rounded" value={p.publishedDate||''} onChange={e=>updateField(i,'publishedDate',e.target.value)} />
                </div>
                <div className="mt-2">
                  <textarea className="w-full border p-1 rounded" rows={3} placeholder="description" value={p.description||''} onChange={e=>updateField(i,'description',e.target.value)} />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-4">
            <button onClick={addPlace} className="mr-2 px-3 py-1 bg-indigo-600 text-white rounded">Add Place</button>
            <button onClick={handleSave} className="px-3 py-1 bg-green-600 text-white rounded">Save</button>
          </div>
        </div>
      </div>
    </main>
  );
}
