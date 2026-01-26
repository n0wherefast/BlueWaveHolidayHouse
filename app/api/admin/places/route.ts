import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

function isAuthed(request: Request) {
  const cookie = request.headers.get('cookie') || '';
  const m = cookie.match(/dashboard_auth=([^;]+)/);
  const val = m?.[1] ?? null;
  return !!process.env.NEXT_DASHBOARD_PASSWORD && val === process.env.NEXT_DASHBOARD_PASSWORD;
}

export async function GET(request: Request) {
  if (!isAuthed(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  const file = path.join(process.cwd(), 'app', 'api', 'places', 'data.json');
  try {
    const content = await fs.readFile(file, 'utf8');
    return NextResponse.json(JSON.parse(content));
  } catch (err) {
    return NextResponse.json({ error: 'Not found' }, { status: 404 });
  }
}

export async function PUT(request: Request) {
  if (!isAuthed(request)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  try {
    const body = await request.json();
    const file = path.join(process.cwd(), 'app', 'api', 'places', 'data.json');
    await fs.writeFile(file, JSON.stringify(body, null, 2), 'utf8');
    return NextResponse.json({ success: true });
  } catch (err) {
    return NextResponse.json({ error: 'Could not write file' }, { status: 500 });
  }
}
