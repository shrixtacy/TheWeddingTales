-- Create gallery_images table
CREATE TABLE IF NOT EXISTS gallery_images (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT,
  description TEXT,
  category TEXT NOT NULL DEFAULT 'wedding',
  cloudinary_url TEXT NOT NULL,
  public_id TEXT NOT NULL,
  uploaded_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create website_visits table for analytics
CREATE TABLE IF NOT EXISTS website_visits (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  page TEXT NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_agent TEXT,
  ip_address TEXT
);

-- Create gallery_views table for tracking gallery views
CREATE TABLE IF NOT EXISTS gallery_views (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  image_id UUID REFERENCES gallery_images(id) ON DELETE CASCADE,
  timestamp TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  user_agent TEXT,
  ip_address TEXT
);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_gallery_images_category ON gallery_images(category);
CREATE INDEX IF NOT EXISTS idx_gallery_images_uploaded_at ON gallery_images(uploaded_at);
CREATE INDEX IF NOT EXISTS idx_website_visits_page ON website_visits(page);
CREATE INDEX IF NOT EXISTS idx_website_visits_timestamp ON website_visits(timestamp);
CREATE INDEX IF NOT EXISTS idx_gallery_views_image_id ON gallery_views(image_id);
CREATE INDEX IF NOT EXISTS idx_gallery_views_timestamp ON gallery_views(timestamp);

-- Enable Row Level Security (RLS)
ALTER TABLE gallery_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE website_visits ENABLE ROW LEVEL SECURITY;
ALTER TABLE gallery_views ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access to gallery_images
CREATE POLICY "Allow public read access to gallery_images" ON gallery_images
  FOR SELECT USING (true);

-- Create policies for public insert access to website_visits and gallery_views
CREATE POLICY "Allow public insert access to website_visits" ON website_visits
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Allow public insert access to gallery_views" ON gallery_views
  FOR INSERT WITH CHECK (true);

-- Create policies for admin access (you'll need to set up authentication)
CREATE POLICY "Allow admin full access to gallery_images" ON gallery_images
  FOR ALL USING (true);

CREATE POLICY "Allow admin read access to website_visits" ON website_visits
  FOR SELECT USING (true);

CREATE POLICY "Allow admin read access to gallery_views" ON gallery_views
  FOR SELECT USING (true);
