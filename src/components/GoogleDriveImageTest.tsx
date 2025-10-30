'use client'

import { useState, useEffect } from 'react'

export default function GoogleDriveImageTest() {
  const [testResults, setTestResults] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const testGoogleDriveImages = async () => {
    setLoading(true)
    try {
      const folderId = '1_kcpCcDAUXUAgFgiXlWGXk4GetVJEsFg'
      const apiKey = 'AIzaSyBesb0Wo8gID_8QIhox4zmv7xQar2YXKlw'
      const query = `'${folderId}' in parents and mimeType contains 'image/'`
      const url = `https://www.googleapis.com/drive/v3/files?q=${encodeURIComponent(query)}&fields=files(id,name,mimeType,size,createdTime,webViewLink,webContentLink)&key=${apiKey}`
      
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

  const testImageUrl = (fileId: string, fileName: string) => {
    const urls = [
      `https://drive.google.com/uc?export=view&id=${fileId}`,
      `https://drive.google.com/thumbnail?id=${fileId}&sz=w400`,
      `https://drive.google.com/thumbnail?id=${fileId}`,
    ]
    
    return (
      <div className="mb-6 p-4 border rounded">
        <h4 className="font-bold text-lg mb-2">{fileName}</h4>
        <p><strong>File ID:</strong> {fileId}</p>
        
        <div className="mt-4">
          <h5 className="font-medium mb-2">Testing Image URLs:</h5>
          {urls.map((url, index) => (
            <div key={index} className="mb-4 p-3 border rounded">
              <p className="font-medium">Test URL {index + 1}:</p>
              <p className="text-sm text-gray-600 break-all mb-2">{url}</p>
              <div className="flex items-center space-x-4">
                <img 
                  src={url} 
                  alt={`Test ${index + 1}`}
                  className="max-w-xs h-32 object-cover border"
                  onError={() => console.log(`URL ${index + 1} failed:`, url)}
                  onLoad={() => console.log(`URL ${index + 1} loaded:`, url)}
                />
                <div>
                  <p className="text-sm">Status: <span className="text-green-600">Testing...</span></p>
                  <p className="text-xs text-gray-500">Check console for results</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">Google Drive Image URL Test</h2>
      
      <button
        onClick={testGoogleDriveImages}
        disabled={loading}
        className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400 mb-6"
      >
        {loading ? 'Testing...' : 'Test Google Drive Images'}
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
                <div key={index}>
                  {testImageUrl(file.id, file.name)}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
