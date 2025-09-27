import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    const { page, user_agent } = await request.json()
    
    // Get client IP
    const forwarded = request.headers.get('x-forwarded-for')
    const ip = forwarded ? forwarded.split(',')[0] : request.ip || 'unknown'

    const { error } = await supabase
      .from('website_visits')
      .insert([
        {
          page,
          timestamp: new Date().toISOString(),
          user_agent: user_agent || request.headers.get('user-agent') || 'unknown',
          ip_address: ip,
        },
      ])

    if (error) {
      console.error('Error tracking visit:', error)
      return NextResponse.json({ error: 'Failed to track visit' }, { status: 500 })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error in track route:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
