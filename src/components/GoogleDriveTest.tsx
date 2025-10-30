'use client'

import { useState } from 'react'

export default function GoogleDriveTest() {
  const [testResults, setTestResults] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const testGoogleDriveAPI = async () => {
    setLoading(true)
    try {
      const folderId = '1_kcpCcDAUXUAgFgiXlWGXk4GetVJEsFg'
      const apiKey = 'AIzaSyBesb0Wo8gID_8QIhox4zmv7xQar2YXKlw'
      const query = `'${folderId}' in parents and mimeType contains 'image/'`
      const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&fields=files(id,name,mimeType,size,createdTime,webViewLink)&key=${apiKey}`
      
      console.log('Testing Google Drive API with URL:', url)
      
      const response = await fetch(url)
      const data = await response.json()
      
      console.log('API Response:', data)
      setTestResults(data)
      
    } catch (error) {
      console.error('Test failed:', error)
      setTestResults({ error: error.message })
    } finally {
      setLoading(false)
    }
  }

  const testImageUrls = (fileId: string) => {
    const urls = [
      `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`,
      `https://drive.google.com/uc?export=view&id=${fileId}`,
      `https://drive.google.com/thumbnail?id=${fileId}`,
    ]
    
    return urls.map((url, index) => (
      <div key={index} className="mb-4 p-4 border rounded">
        <p className="font-medium">Test URL {index + 1}:</p>
        <p className="text-sm text-gray-600 break-all">{url}</p>
        <img 
          src={url} 
          alt={`Test ${index + 1}`}
          className="mt-2 max-w-xs h-32 object-cover border"
          onError={() => console.log(`URL ${index + 1} failed:`, url)}
          onLoad={() => console.log(`URL ${index + 1} loaded:`, url)}
        />
      </div>
    ))
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Google Drive API Test</h2>
      
      <button
        onClick={testGoogleDriveAPI}
        disabled={loading}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
      >
        {loading ? 'Testing...' : 'Test Google Drive API'}
      </button>

      {testResults && (
        <div className="mt-8">
          <h3 className="text-xl font-bold mb-4">Test Results:</h3>
          
          {testResults.error ? (
            <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              <p><strong>Error:</strong> {testResults.error}</p>
            </div>
          ) : (
            <div>
              <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                <p><strong>Success!</strong> Found {testResults.files?.length || 0} files</p>
              </div>
              
              {testResults.files?.map((file: any, index: number) => (
                <div key={index} className="mb-6 p-4 border rounded">
                  <h4 className="font-bold text-lg">{file.name}</h4>
                  <p><strong>File ID:</strong> {file.id}</p>
                  <p><strong>MIME Type:</strong> {file.mimeType}</p>
                  <p><strong>Size:</strong> {file.size} bytes</p>
                  
                  <div className="mt-4">
                    <h5 className="font-medium mb-2">Testing Image URLs:</h5>
                    {testImageUrls(file.id)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}