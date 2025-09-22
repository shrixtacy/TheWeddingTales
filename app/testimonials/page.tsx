import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TestimonialsPage() {
  const testimonials = [
    {
      id: 1,
      text: "Absolutely amazing work! The way they captured our special moments was beyond our expectations. Every photo tells a story.",
      name: "Prasanna Choudhury",
      rating: 5
    },
    {
      id: 2,
      text: "Professional, creative, and so easy to work with. Our wedding photos are absolutely stunning and we couldn't be happier.",
      name: "Sonali Satpathy",
      rating: 5
    },
    {
      id: 3,
      text: "The team went above and beyond to make our day perfect. The attention to detail in every shot is incredible.",
      name: "Rajesh Kumar",
      rating: 5
    },
    {
      id: 4,
      text: "From engagement to wedding, they captured every emotion beautifully. Highly recommend their services!",
      name: "Priya Sharma",
      rating: 5
    },
    {
      id: 5,
      text: "Outstanding photography and videography services. They made our special day even more memorable.",
      name: "Amit Patel",
      rating: 5
    },
    {
      id: 6,
      text: "The creativity and passion they bring to their work is evident in every single photo. Simply amazing!",
      name: "Deepika Singh",
      rating: 5
    },
    {
      id: 7,
      text: "We are so grateful for the beautiful memories they created for us. The photos are absolutely perfect.",
      name: "Vikram Reddy",
      rating: 5
    },
    {
      id: 8,
      text: "Professional, punctual, and incredibly talented. Our wedding album is a work of art thanks to them.",
      name: "Anita Das",
      rating: 5
    },
    {
      id: 9,
      text: "The way they captured the emotions and moments of our wedding day was truly magical. Highly recommended!",
      name: "Suresh Kumar",
      rating: 5
    },
    {
      id: 10,
      text: "Exceptional service and incredible results. Every photo is a masterpiece that we will treasure forever.",
      name: "Meera Joshi",
      rating: 5
    },
    {
      id: 11,
      text: "They made our wedding day even more special with their amazing photography skills. Thank you so much!",
      name: "Ravi Verma",
      rating: 5
    },
    {
      id: 12,
      text: "The quality of work and attention to detail is outstanding. We couldn't have asked for better photographers.",
      name: "Sunita Agarwal",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-lg font-light mb-4 tracking-widest">HAPPY CLIENT'S</p>
          <h1 className="text-6xl md:text-8xl font-bold mb-6">Testimonials</h1>
          <p className="text-xl md:text-2xl font-light max-w-3xl">
            Don't Take Our Words! Hear What They Say About Us.
          </p>
        </div>
      </section>

      {/* Testimonials Grid Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id}
                className="bg-blue-50 p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-gray-400 rounded-full mr-3 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-semibold text-gray-900">{testimonial.name}</span>
                </div>
                
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

