import { headers } from "next/headers";
import { redirect } from "next/navigation";

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
  const h = await headers();
  let cookieHeader = '';
  if (typeof (h as any).get === 'function') {
    cookieHeader = (h as any).get('cookie') || '';
  } else {
    cookieHeader = '';
  }
  const m = cookieHeader.match(/dashboard_auth=([^;]+)/);
  const auth = m?.[1] ?? null;
  const pw = process.env.NEXT_DASHBOARD_PASSWORD;
  if (!pw || auth !== pw) {
    redirect('/dashboard/signin');
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-slate-800">Admin Dashboard</h1>
            <p className="text-sm text-slate-500">Gestisci i contenuti del sito in modo rapido e sicuro.</p>
          </div>
          <div className="flex items-center gap-3">
            <a className="px-3 py-2 border rounded text-sm text-slate-700 hover:bg-slate-100" href="/">Open site</a>
            <a className="px-3 py-2 bg-red-600 text-white rounded text-sm" href="/dashboard/logout">Logout</a>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <article className="bg-white rounded-lg shadow p-5">
            <h2 className="text-lg font-semibold">Nav Data</h2>
            <p className="text-sm text-slate-500 mt-2">Modifica i link di navigazione e l&apos;ordine.</p>
            <div className="mt-4">
              <a className="inline-block px-4 py-2 bg-indigo-600 text-white rounded" href="/dashboard/manage/nav_data">Manage</a>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow p-5">
            <h2 className="text-lg font-semibold">About</h2>
            <p className="text-sm text-slate-500 mt-2">Modifica le sezioni &quot;About&quot; e le regole della casa.</p>
            <div className="mt-4">
              <a className="inline-block px-4 py-2 bg-indigo-600 text-white rounded" href="/dashboard/manage/about">Manage</a>
            </div>
          </article>

          <article className="bg-white rounded-lg shadow p-5">
            <h2 className="text-lg font-semibold">Places</h2>
            <p className="text-sm text-slate-500 mt-2">Aggiungi, modifica o rimuovi luoghi e relative informazioni.</p>
            <div className="mt-4">
              <a className="inline-block px-4 py-2 bg-indigo-600 text-white rounded" href="/dashboard/manage/places">Manage</a>
            </div>
          </article>
        </section>

        <section className="mt-8 bg-white rounded-lg shadow p-5">
          <h3 className="text-sm font-medium text-slate-600">Raw endpoints</h3>
          <div className="mt-3 flex flex-wrap gap-3">
            <a className="px-3 py-2 border rounded text-sm text-slate-700 hover:bg-slate-50" href="/api/nav_data">/api/nav_data</a>
            <a className="px-3 py-2 border rounded text-sm text-slate-700 hover:bg-slate-50" href="/api/about">/api/about</a>
            <a className="px-3 py-2 border rounded text-sm text-slate-700 hover:bg-slate-50" href="/api/places">/api/places</a>
          </div>
        </section>
      </div>
    </div>
  );
}
