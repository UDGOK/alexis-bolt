import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'downloads', 'rebar-specification-guide.pdf');
  
  try {
    const fileBuffer = await fs.promises.readFile(filePath);
    
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Disposition': 'attachment; filename=rebar-specification-guide.pdf',
        'Content-Type': 'application/pdf',
      },
    });
  } catch (error) {
    console.error('Error reading PDF file:', error);
    return new NextResponse('Error reading PDF file', { status: 500 });
  }
}