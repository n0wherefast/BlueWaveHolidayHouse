import { NextResponse } from "next/server";
import fs from 'fs/promises'
import path from 'path'
export const dynamic = 'force-dynamic'

async function readData() {
  const jsonFile = path.join(process.cwd(), 'app', 'api', 'nav_data', 'data.json');
  try {
    const content = await fs.readFile(jsonFile, 'utf8');
    return JSON.parse(content);
  } catch (err) {
    // fallback to data.ts export
    const { dataLink } = await import('./data');
    return dataLink;
  }
}

export async function GET() {
  const data = await readData();
  return NextResponse.json(data);
}
