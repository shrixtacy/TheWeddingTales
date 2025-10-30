'use client'

import { useState } from 'react'

export default function GoogleDriveHelper() {
  const [inputUrl, setInputUrl] = useState('')
  const [convertedUrl, setConvertedUrl] = useState('')
  const [imageName, setImageName] = useState('')
  const [imageTitle, setImageTitle] = useState('')
  const [imageDescription, setImageDescription] = useState('')
  const [imageCategory, setImageCategory] = useState('Wedding')

  const convertUrl = () => {
    // Extract file ID from Google Drive sharing URL
    const match = inputUrl.match(/\/file\/d\/([a-zA-Z0-9_-]+)\//)
    if (match) {
      const fileId = match[1]
      const directUrl = `https://drive.google.com/uc?export=view&id=${fileId}`
      setConvertedUrl(directUrl)
    } else {
      alert('Invalid Google Drive URL. Please make sure it\'s a sharing link from Google Drive.')
    }
  }

  const generateCode = () => {
    if (!convertedUrl || !imageName) {
      alert('Please convert a URL and enter an image name first.')
      return
    }

    const code = `{
  id: '${imageName.toLowerCase().replace(/\s+/g, '_')}',
  name: '${imageName}',
  url: '${convertedUrl}',
  thumbnailUrl: '${convertedUrl}',
  title: '${imageTitle || imageName}',
  description: '${imageDescription}',
  category: '${imageCategory}'
},`

    navigator.clipboard.writeText(code).then(() => {
      alert('Code copied to clipboard! Paste it into the googleDriveImages array in src/lib/googleDriveSimple.ts')
    }).catch(() => {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea')
      textArea.value = code
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      alert('Code copied to clipboard! Paste it into the googleDriveImages array in src/lib/googleDriveSimple.ts')
    })
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Google Drive Image Helper</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Google Drive Sharing URL
          </label>
          <input
            type="url"
            value={inputUrl}
            onChange={(e) => setInputUrl(e.target.value)}
            placeholder="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={convertUrl}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Convert to Direct URL
          </button>
        </div>

        {convertedUrl && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Direct Image URL
            </label>
            <input
              type="text"
              value={convertedUrl}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50"
            />
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Image Name
            </label>
            <input
              type="text"
              value={imageName}
              onChange={(e) => setImageName(e.target.value)}
              placeholder="e.g., Wedding Ceremony"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Category
            </label>
            <select
              value={imageCategory}
              onChange={(e) => setImageCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Wedding">Wedding</option>
              <option value="Portrait">Portrait</option>
              <option value="Engagement">Engagement</option>
              <option value="Event">Event</option>
              <option value="Family">Family</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title (optional)
          </label>
          <input
            type="text"
            value={imageTitle}
            onChange={(e) => setImageTitle(e.target.value)}
            placeholder="e.g., Beautiful Wedding Moment"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description (optional)
          </label>
          <textarea
            value={imageDescription}
            onChange={(e) => setImageDescription(e.target.value)}
            placeholder="e.g., Captured during the ceremony"
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          onClick={generateCode}
          disabled={!convertedUrl || !imageName}
          className="w-full px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 disabled:bg-gray-400"
        >
          Generate Code & Copy to Clipboard
        </button>
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-md">
        <h3 className="font-medium text-blue-900 mb-2">Instructions:</h3>
        <ol className="text-sm text-blue-800 space-y-1">
          <li>1. Get a sharing link from your Google Drive image</li>
          <li>2. Paste it in the first field and click "Convert"</li>
          <li>3. Fill in the image details</li>
          <li>4. Click "Generate Code" to get the code</li>
          <li>5. Paste the code into <code className="bg-blue-200 px-1 rounded">src/lib/googleDriveSimple.ts</code></li>
        </ol>
      </div>
    </div>
  )
}
