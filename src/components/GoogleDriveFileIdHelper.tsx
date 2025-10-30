'use client'

import { useState } from 'react'

export default function GoogleDriveFileIdHelper() {
  const [sharingLink, setSharingLink] = useState('')
  const [fileId, setFileId] = useState('')
  const [embedUrl, setEmbedUrl] = useState('')

  const extractFileId = () => {
    // Extract file ID from Google Drive sharing link
    const match = sharingLink.match(/\/file\/d\/([a-zA-Z0-9_-]+)\//)
    if (match) {
      const id = match[1]
      setFileId(id)
      setEmbedUrl(`https://drive.google.com/file/d/${id}/preview`)
    } else {
      alert('Invalid Google Drive sharing link. Please make sure it looks like: https://drive.google.com/file/d/FILE_ID/view?usp=sharing')
    }
  }

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      alert('Copied to clipboard!')
    }).catch(() => {
      // Fallback for browsers that don't support clipboard API
      const textArea = document.createElement('textarea')
      textArea.value = text
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      alert('Copied to clipboard!')
    })
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">Google Drive File ID Helper</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Google Drive Sharing Link
          </label>
          <input
            type="url"
            value={sharingLink}
            onChange={(e) => setSharingLink(e.target.value)}
            placeholder="https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={extractFileId}
            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          >
            Extract File ID
          </button>
        </div>

        {fileId && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                File ID
              </label>
              <div className="flex">
                <input
                  type="text"
                  value={fileId}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50"
                />
                <button
                  onClick={() => copyToClipboard(fileId)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-r-md hover:bg-gray-700"
                >
                  Copy
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Embed URL
              </label>
              <div className="flex">
                <input
                  type="text"
                  value={embedUrl}
                  readOnly
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50"
                />
                <button
                  onClick={() => copyToClipboard(embedUrl)}
                  className="px-4 py-2 bg-gray-600 text-white rounded-r-md hover:bg-gray-700"
                >
                  Copy
                </button>
              </div>
            </div>

            <div className="p-4 bg-green-50 border border-green-200 rounded-md">
              <h3 className="font-medium text-green-900 mb-2">Code for your image:</h3>
              <pre className="text-sm text-green-800 bg-green-100 p-2 rounded overflow-x-auto">
{`{
  id: '${fileId}',
  name: 'Your Image Name',
  url: '${sharingLink}',
  embedUrl: '${embedUrl}',
  title: 'Your Image Title',
  description: 'Your image description',
  category: 'Wedding'
},`}
              </pre>
              <button
                onClick={() => copyToClipboard(`{
  id: '${fileId}',
  name: 'Your Image Name',
  url: '${sharingLink}',
  embedUrl: '${embedUrl}',
  title: 'Your Image Title',
  description: 'Your image description',
  category: 'Wedding'
},`)}
                className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
              >
                Copy Code
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 p-4 bg-blue-50 rounded-md">
        <h3 className="font-medium text-blue-900 mb-2">Instructions:</h3>
        <ol className="text-sm text-blue-800 space-y-1">
          <li>1. Go to your Google Drive folder</li>
          <li>2. Right-click on an image → Get link → Copy link</li>
          <li>3. Paste the link above and click "Extract File ID"</li>
          <li>4. Copy the generated code</li>
          <li>5. Send me the code or just the file IDs</li>
        </ol>
      </div>
    </div>
  )
}
