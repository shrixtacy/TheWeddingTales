import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME || 'dijmdpqnt',
  api_key: process.env.CLOUDINARY_API_KEY || '818655334438853',
  api_secret: process.env.CLOUDINARY_API_SECRET || 'aujR_RRbN3FKJvUg8_NAlxrp-jM',
})

export default cloudinary
