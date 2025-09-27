import { NextRequest, NextResponse } from 'next/server'
import cloudinary from '@/lib/cloudinary'

export async function POST(request: NextRequest) {
  try {
    const { public_id } = await request.json()

    if (!public_id) {
      return NextResponse.json({ error: 'Public ID is required' }, { status: 400 })
    }

    const result = await cloudinary.uploader.destroy(public_id)
    
    return NextResponse.json({ result })
  } catch (error) {
    console.error('Error deleting from Cloudinary:', error)
    return NextResponse.json({ error: 'Failed to delete image' }, { status: 500 })
  }
}
