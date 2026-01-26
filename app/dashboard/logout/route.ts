import { NextResponse } from 'next/server'

export async function GET() {
  const cookie = `dashboard_auth=; Path=/; HttpOnly; SameSite=Lax; Max-Age=0`;
  return NextResponse.redirect(new URL('/dashboard/signin', 'http://localhost'), { headers: { 'Set-Cookie': cookie } });
}
