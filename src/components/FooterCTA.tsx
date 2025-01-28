import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const FooterCTA = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const images = imageRef.current?.querySelectorAll('.footer-cta-img');
    if (!images) return;

    let currentIndex = 0;
    
    const showNextImage = () => {
      gsap.to(images[currentIndex], { opacity: 0, duration: 0.5 });
      currentIndex = (currentIndex + 1) % images.length;
      gsap.to(images[currentIndex], { opacity: 1, duration: 0.5 });
    };

    const interval = setInterval(showNextImage, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="section footer-cta bg-bg">
      <div className="page-padding">
        <div className="container">
          <div className="footer-cta-wrapper relative">
            <div ref={imageRef} className="footer-stop-motion-bg">
              <img
                src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65258fc8fbb47fb7bb15c484_stop-motion-img-01.webp"
                loading="eager"
                alt=""
                className="footer-cta-img absolute inset-0 w-full h-full object-cover"
              />
              <img
                src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65258fc9af9773d82c8e938b_stop-motion-img-02.webp"
                loading="eager"
                alt=""
                className="footer-cta-img absolute inset-0 w-full h-full object-cover opacity-0"
              />
              <img
                src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65258fc8974ce249b664e95e_stop-motion-img-03.webp"
                loading="eager"
                alt=""
                className="footer-cta-img absolute inset-0 w-full h-full object-cover opacity-0"
              />
              <img
                src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65258fc9b946af99ef6b4442_stop-motion-img-04.webp"
                loading="eager"
                alt=""
                className="footer-cta-img absolute inset-0 w-full h-full object-cover opacity-0"
              />
            </div>
            
            <div className="footer-cta-content relative z-10 text-center py-24">
              <h2 className="text-5xl font-bold mb-8 text-white">Ready to start giving?</h2>
              <div className="button-group">
                <a
                  href="https://web.givingli.com/website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-black rounded-full hover:bg-gray-100 transition-colors"
                >
                  <span className="text-lg font-semibold">Get Givingli</span>
                </a>
              </div>
            </div>

            <div className="footer-qrcode-wrapper absolute bottom-8 right-8">
              <div className="qrcode-wrapper bg-white p-4 rounded-lg shadow-lg">
                <img
                  src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525c0d3821c8b5f64300648_givingli-qrcode.png"
                  loading="eager"
                  alt="Download on the App Store"
                  className="w-32 h-32"
                />
                <div className="mt-2 text-center text-sm">Download on the App Store</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};