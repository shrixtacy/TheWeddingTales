import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const fileId = searchParams.get('id')
    const isThumbnail = searchParams.get('thumbnail') === 'true'

    if (!fileId) {
      return NextResponse.json({ error: 'File ID is required' }, { status: 400 })
    }

    // Try multiple Google Drive URL formats
    const urls = [
      `https://drive.google.com/uc?export=view&id=${fileId}`,
      `https://drive.google.com/uc?export=download&id=${fileId}`,
      `https://drive.google.com/thumbnail?id=${fileId}${isThumbnail ? '&sz=w400' : '&sz=w1000'}`,
      `https://drive.google.com/thumbnail?id=${fileId}`,
    ]

    // Try each URL until one works
    for (const url of urls) {
      try {
        console.log(`Trying Google Drive URL: ${url}`)
        
        const response = await fetch(url, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
            'Referer': 'https://drive.google.com/',
          },
        })

        if (response.ok) {
          const imageBuffer = await response.arrayBuffer()
          const contentType = response.headers.get('content-type') || 'image/jpeg'
          
          console.log(`✅ Successfully fetched image from: ${url}`)
          
          return new NextResponse(imageBuffer, {
            status: 200,
            headers: {
              'Content-Type': contentType,
              'Cache-Control': 'public, max-age=3600', // Cache for 1 hour
            },
          })
        }
      } catch (error) {
        console.log(`❌ Failed to fetch from ${url}:`, error)
        continue
      }
    }

    // If all URLs fail, return a placeholder image
    console.log('❌ All Google Drive URLs failed, returning placeholder')
    
    const placeholderSvg = `
      <svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f0f0f0"/>
        <text x="50%" y="50%" font-family="Arial" font-size="18" fill="#999" text-anchor="middle" dy=".3em">
          Image not available
        </text>
      </svg>
    `
    
    return new NextResponse(placeholderSvg, {
      status: 200,
      headers: {
        'Content-Type': 'image/svg+xml',
        'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
      },
    })

  } catch (error) {
    console.error('Error in Google Drive proxy:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
