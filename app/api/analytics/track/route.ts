import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

export async function POST(request: NextRequest) {
  try {
    // Check if Supabase is configured
    if (!supabase) {
      console.log('Supabase not configured, skipping analytics tracking')
      return NextResponse.json({ 
        success: true, 
        message: 'Analytics tracking skipped - Supabase not configured' 
      })
    }

    const body = await request.json()
    const { page, user_agent } = body

    // Get client IP address
    const ip = request.headers.get('x-forwarded-for') || 
              request.headers.get('x-real-ip') || 
              'unknown'

    // Insert visit into Supabase
    const { error } = await supabase
      .from('website_visits')
      .insert([
        {
          page,
          timestamp: new Date().toISOString(),
          user_agent: user_agent || 'unknown',
          ip_address: ip,
        },
      ])

    if (error) {
      console.error('Error inserting visit:', error)
      return NextResponse.json({ error: 'Failed to track visit' }, { status: 500 })
    }

    return NextResponse.json({ 
      success: true, 
      message: 'Visit tracked successfully' 
    })
  } catch (error) {
    console.error('Error in track route:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
