"use client";
import { useState } from "react";

export default function SigninPage() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const res = await fetch('/api/dashboard/login', {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      });
      const json = await res.json();
      if (res.ok) {
        window.location.href = '/dashboard';
      } else {
        setError(json?.error || 'Authentication failed');
      }
    } catch (err) {
      setError('Network error');
    }
  };

  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold">Admin Login</h1>
      <form onSubmit={handleSubmit} className="mt-4 space-y-3">
        <div>
          <label className="block text-sm">Password</label>
          <input value={password} onChange={e=>setPassword(e.target.value)} type="password" className="border p-2 rounded w-full max-w-sm" />
        </div>
        {error && <div className="text-red-600">{error}</div>}
        <div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Login</button>
        </div>
      </form>
    </main>
  )
}
