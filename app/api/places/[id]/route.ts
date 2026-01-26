import { NextResponse } from "next/server";
import data from "../data.json";

export const dynamic = 'force-dynamic';

export async function GET(_request: Request, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const place = (data as any[]).find((p: any) => p.id === id) || null;
  if (!place) return NextResponse.json({ message: 'Not found' }, { status: 404 });
  return NextResponse.json(place);
}
