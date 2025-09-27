'use client'

import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

interface GalleryImage {
  id: string
  title: string
  description: string
  category: string
  cloudinary_url: string
  public_id: string
  uploaded_at: string
}

export default function GalleryManagement() {
  const [images, setImages] = useState<GalleryImage[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [editingImage, setEditingImage] = useState<GalleryImage | null>(null)

  useEffect(() => {
    fetchImages()
  }, [])

  const fetchImages = async () => {
    try {
      const { data, error } = await supabase
        .from('gallery_images')
        .select('*')
        .order('uploaded_at', { ascending: false })

      if (error) throw error
      setImages(data || [])
    } catch (error) {
      console.error('Error fetching images:', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteImage = async (id: string, publicId: string) => {
    if (!confirm('Are you sure you want to delete this image?')) return

    try {
      // Delete from Cloudinary
      const response = await fetch('/api/cloudinary/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ public_id: publicId }),
      })

      if (!response.ok) {
        console.error('Failed to delete from Cloudinary')
      }

      // Delete from Supabase
      const { error } = await supabase
        .from('gallery_images')
        .delete()
        .eq('id', id)

      if (error) throw error

      setImages(images.filter(img => img.id !== id))
      alert('Image deleted successfully!')
    } catch (error) {
      console.error('Error deleting image:', error)
      alert('Failed to delete image')
    }
  }

  const updateImage = async (id: string, updates: Partial<GalleryImage>) => {
    try {
      const { error } = await supabase
        .from('gallery_images')
        .update(updates)
        .eq('id', id)

      if (error) throw error

      setImages(images.map(img => 
        img.id === id ? { ...img, ...updates } : img
      ))
      setEditingImage(null)
      alert('Image updated successfully!')
    } catch (error) {
      console.error('Error updating image:', error)
      alert('Failed to update image')
    }
  }

  const filteredImages = selectedCategory === 'all' 
    ? images 
    : images.filter(img => img.category === selectedCategory)

  const categories = ['all', ...new Set(images.map(img => img.category))]

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Manage Gallery</h2>
        <p className="text-gray-600">View, edit, and delete images in your gallery.</p>
      </div>

      <div className="flex items-center space-x-4">
        <label htmlFor="category-filter" className="text-sm font-medium text-gray-700">
          Filter by category:
        </label>
        <select
          id="category-filter"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        >
          {categories.map(category => (
            <option key={category} value={category}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredImages.map((image) => (
          <div key={image.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={image.cloudinary_url}
              alt={image.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              {editingImage?.id === image.id ? (
                <div className="space-y-3">
                  <input
                    type="text"
                    value={editingImage.title}
                    onChange={(e) => setEditingImage({
                      ...editingImage,
                      title: e.target.value
                    })}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                    placeholder="Title"
                  />
                  <textarea
                    value={editingImage.description}
                    onChange={(e) => setEditingImage({
                      ...editingImage,
                      description: e.target.value
                    })}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                    placeholder="Description"
                    rows={2}
                  />
                  <select
                    value={editingImage.category}
                    onChange={(e) => setEditingImage({
                      ...editingImage,
                      category: e.target.value
                    })}
                    className="w-full px-2 py-1 border border-gray-300 rounded text-sm"
                  >
                    <option value="wedding">Wedding</option>
                    <option value="engagement">Engagement</option>
                    <option value="portrait">Portrait</option>
                    <option value="event">Event</option>
                  </select>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => updateImage(image.id, editingImage)}
                      className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingImage(null)}
                      className="bg-gray-600 text-white px-3 py-1 rounded text-sm hover:bg-gray-700"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <h3 className="font-semibold text-gray-900">{image.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{image.description}</p>
                  <div className="flex items-center justify-between mt-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800">
                      {image.category}
                    </span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => setEditingImage(image)}
                        className="text-indigo-600 hover:text-indigo-900 text-sm"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteImage(image.id, image.public_id)}
                        className="text-red-600 hover:text-red-900 text-sm"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredImages.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">No images found.</p>
        </div>
      )}
    </div>
  )
}
