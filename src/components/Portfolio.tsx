import React from 'react';
import InfiniteMenu from './InfiniteMenu';

const Portfolio: React.FC = () => {
  const portfolioItems = [
    {
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      link: '/gallery',
      title: 'Sarah & Michael',
      description: 'Garden Wedding in Napa Valley'
    },
    {
      image: 'https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      link: '/gallery',
      title: 'Emma & James',
      description: 'Beach Ceremony in Malibu'
    },
    {
      image: 'https://images.pexels.com/photos/1323550/pexels-photo-1323550.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      link: '/gallery',
      title: 'Jessica & David',
      description: 'Rustic Wedding in Sonoma'
    },
    {
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop&crop=center',
      link: '/gallery',
      title: 'Anna & Chris',
      description: 'Vineyard Wedding in Temecula'
    },
    {
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop&crop=center',
      link: '/gallery',
      title: 'Bridal Portrait',
      description: 'Editorial Session in Studio'
    },
    {
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=600&h=600&fit=crop&crop=center',
      link: '/gallery',
      title: 'Couple Session',
      description: 'Golden Hour in Big Sur'
    },
    {
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop&crop=center',
      link: '/gallery',
      title: 'Love Story Film',
      description: 'Engagement Video in San Francisco'
    },
    {
      image: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop&crop=center',
      link: '/gallery',
      title: 'Wedding Highlights',
      description: 'Same Day Edit in Los Angeles'
    },
    {
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&h=600&fit=crop&crop=center',
      link: '/gallery',
      title: 'Mountain Wedding',
      description: 'Alpine Ceremony in Colorado'
    },
    {
      image: 'https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?w=600&h=600&fit=crop&crop=center',
      link: '/gallery',
      title: 'City Hall Wedding',
      description: 'Urban Ceremony in New York'
    },
    {
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=600&h=600&fit=crop&crop=center',
      link: '/gallery',
      title: 'Desert Wedding',
      description: 'Sunset Ceremony in Arizona'
    },
    {
      image: 'https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop',
      link: '/gallery',
      title: 'Forest Wedding',
      description: 'Woodland Ceremony in Oregon'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-600/5 rounded-full -translate-x-36 -translate-y-36" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-600/10 rounded-full translate-x-48 translate-y-48" />
      
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-yellow-600">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-yellow-600 mx-auto mb-8" />
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A curated collection of love stories, captured moments, and cinematic memories 
            that showcase our passion for wedding photography and videography.
          </p>
        </div>

        {/* Card Stack Menu */}
        <div className="h-[500px] w-full bg-white rounded-2xl shadow-lg overflow-hidden">
          <InfiniteMenu items={portfolioItems} />
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-white rounded-2xl shadow-xl p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Create Your Story?
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss your vision and create something beautiful together.
            </p>
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
              Start Your Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;