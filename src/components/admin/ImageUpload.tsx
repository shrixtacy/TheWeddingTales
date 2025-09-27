'use client'

import { useState, useRef } from 'react'
import { supabase } from '@/lib/supabase'

interface UploadedImage {
  id: string
  url: string
  public_id: string
  title: string
  description: string
  category: string
}

export default function ImageUpload() {
  const [files, setFiles] = useState<FileList | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('wedding')
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(e.target.files)
    }
  }

  const uploadToCloudinary = async (file: File): Promise<string> => {
    const formData = new FormData()
    formData.append('file', file)
    formData.append('upload_preset', 'wedding_tales') // You'll need to create this preset in Cloudinary
    formData.append('folder', 'wedding-gallery')

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/dijmdpqnt/image/upload`,
      {
        method: 'POST',
        body: formData,
      }
    )

    if (!response.ok) {
      throw new Error('Upload failed')
    }

    const data = await response.json()
    return data.secure_url
  }

  const handleUpload = async () => {
    if (!files || files.length === 0) {
      alert('Please select files to upload')
      return
    }

    setUploading(true)
    setUploadProgress(0)

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        
        // Upload to Cloudinary
        const cloudinaryUrl = await uploadToCloudinary(file)
        
        // Save to Supabase
        const { data, error } = await supabase
          .from('gallery_images')
          .insert([
            {
              title: title || file.name,
              description: description,
              category: category,
              cloudinary_url: cloudinaryUrl,
              public_id: cloudinaryUrl.split('/').pop()?.split('.')[0] || '',
              uploaded_at: new Date().toISOString(),
            },
          ])

        if (error) {
          console.error('Error saving to database:', error)
          throw error
        }

        setUploadProgress(((i + 1) / files.length) * 100)
      }

      alert('Images uploaded successfully!')
      setFiles(null)
      setTitle('')
      setDescription('')
      setCategory('wedding')
      if (fileInputRef.current) {
        fileInputRef.current.value = ''
      }
    } catch (error) {
      console.error('Upload error:', error)
      alert('Upload failed. Please try again.')
    } finally {
      setUploading(false)
      setUploadProgress(0)
    }
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Upload Images</h2>
        <p className="text-gray-600">Upload images to your gallery. Images will be automatically optimized and stored in Cloudinary.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="files" className="block text-sm font-medium text-gray-700 mb-2">
            Select Images
          </label>
          <input
            ref={fileInputRef}
            type="file"
            id="files"
            multiple
            accept="image/*"
            onChange={handleFileSelect}
            className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
          />
          {files && (
            <p className="mt-2 text-sm text-gray-600">
              {files.length} file(s) selected
            </p>
          )}
        </div>

        <div>
          <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="wedding">Wedding</option>
            <option value="engagement">Engagement</option>
            <option value="portrait">Portrait</option>
            <option value="event">Event</option>
            <option value="family">Family</option>
            <option value="baby">Baby</option>
            <option value="couples">Couples</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
          Title (optional)
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter image title"
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
          Description (optional)
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter image description"
          rows={3}
          className="block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      </div>

      {uploading && (
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
            </div>
            <div className="ml-3">
              <p className="text-sm text-blue-800">Uploading images...</p>
              <div className="mt-2 bg-blue-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${uploadProgress}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex justify-end">
        <button
          onClick={handleUpload}
          disabled={uploading || !files}
          className="bg-indigo-600 hover:bg-indigo-700 disabled:bg-gray-400 text-white px-6 py-2 rounded-md font-medium"
        >
          {uploading ? 'Uploading...' : 'Upload Images'}
        </button>
      </div>
    </div>
  )
}
