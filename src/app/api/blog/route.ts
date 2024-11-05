import { NextRequest, NextResponse } from 'next/server';

import { blog } from '@/data/data'
export async function GET(req: NextRequest): Promise<NextResponse> {
  const authHeader = req.headers.get('authorization')?.split('Bearer ').at(1);
  if (authHeader !== 'TestToken') {
    return NextResponse.json(
      { message: ' خطا در احراز هویت ' },
      { status: 401 }
    );
  }
  try {
    return NextResponse.json(blog);
  } catch {
    return NextResponse.json(
      { message: 'خطا در بارگذاری پست‌ها' },
      { status: 500 }
    );
  }
}
