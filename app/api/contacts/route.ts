import { NextResponse } from 'next/server'
import fs from 'fs/promises'
import path from 'path'

export async function GET() {
  try {
    const file = path.join(process.cwd(), 'app', 'api', 'contacts', 'data.json')
    const content = await fs.readFile(file, 'utf8')
    const data = JSON.parse(content)
    return NextResponse.json({ success: true, data })
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Could not read contacts data' }, { status: 500 })
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    // Basic validation
    if (!body || typeof body !== 'object') {
      return NextResponse.json({ success: false, error: 'Invalid JSON body' }, { status: 400 })
    }

    // In a real app you would persist the data or send an email here.
    return NextResponse.json({ success: true, received: body }, { status: 201 })
  } catch (err) {
    return NextResponse.json({ success: false, error: 'Malformed JSON' }, { status: 400 })
  }
}
