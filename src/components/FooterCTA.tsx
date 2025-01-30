import React, { useEffect, useRef } from 'react';

export const FooterCTA = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const images = imageRef.current!.querySelectorAll('.footer-cta-img');
    if (!images) return;

    let currentIndex = 0;
    
    const showNextImage = () => {
      const current = images[currentIndex];
      const next = images[(currentIndex + 1) % images.length];
      
      current.classList.add('opacity-0', 'translate-x-4');
      next.classList.remove('opacity-0', 'translate-x-4');
      
      currentIndex = (currentIndex + 1) % images.length;
    };

    const interval = setInterval(showNextImage, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[80vh] lg:min-h-[90vh] bg-[#FCFAF4] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 h-full relative">
          {/* Main content area */}
          <div className="lg:col-span-5 relative min-h-[60vh] lg:min-h-[80vh] mt-8 lg:mt-12">
            {/* Image container */}
            <div 
              ref={imageRef} 
              className="absolute inset-0 w-full h-full"
            >
              {[
                "65258fc8fbb47fb7bb15c484",
                "65258fc9af9773d82c8e938b",
                "65258fc8974ce249b664e95e",
                "65258fc9b946af99ef6b4442"
              ].map((id, index) => (
                <div
                  key={id}
                  className={`footer-cta-img absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === 0 ? '' : 'opacity-0 translate-x-4'
                  }`}
                >
                  <img
                    src={`https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/${id}_stop-motion-img-0${index + 1}.webp`}
                    loading={index === 0 ? "eager" : "lazy"}
                    alt=""
                    className="w-full h-full object-cover rounded-3xl shadow-2xl"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/90 rounded-3xl" />
                </div>
              ))}
            </div>

            {/* Content overlay */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 py-16 lg:py-24 z-10">
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 text-white tracking-tight">
                Ready to start
                <span className="block mt-2">giving?</span>
              </h2>
              <div className="space-y-4 sm:space-y-0 sm:space-x-4">
                <a
                  href="https://web.givingli.com/website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-slate-900 rounded-full transition-all duration-300 hover:bg-gray-100 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50 shadow-lg"
                >
                  <span className="text-lg font-semibold">Get Givingli</span>
                </a>
              </div>
            </div>
          </div>

          {/* QR Code section */}
          <div className="lg:col-span-1 flex items-end justify-center lg:justify-end pb-8 lg:pb-12">
            <div className="transform transition-all duration-300 hover:scale-105">
              <div className="bg-white p-6 rounded-2xl shadow-xl">
                <img
                  src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525c0d3821c8b5f64300648_givingli-qrcode.png"
                  loading="eager"
                  alt="Download on the App Store"
                  className="w-32 h-32"
                />
                <div className="mt-3 text-center text-sm font-medium text-slate-700">
                  Download on the
                  <span className="block">App Store</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
