import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    // Check if request has body
    const contentType = request.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json({ error: 'Invalid content type' }, { status: 400 })
    }

    // Safely parse JSON with fallback
    let page = 'unknown'
    let user_agent = 'unknown'
    
    try {
      const body = await request.json()
      page = body.page || 'unknown'
      user_agent = body.user_agent || 'unknown'
    } catch (parseError) {
      console.warn('Failed to parse JSON, using defaults:', parseError)
    }
    
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
