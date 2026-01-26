import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const password = body?.password;
    const expected = process.env.NEXT_DASHBOARD_PASSWORD;
    if (!expected) {
      return NextResponse.json({ error: 'Dashboard password not configured' }, { status: 500 });
    }
    if (password !== expected) {
      return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
    }

    const cookie = `dashboard_auth=${expected}; Path=/; HttpOnly; SameSite=Lax; Max-Age=${60*60}`;
    return NextResponse.json({ success: true }, { status: 200, headers: { 'Set-Cookie': cookie } });
  } catch (err) {
    return NextResponse.json({ error: 'Malformed request' }, { status: 400 });
  }
}
