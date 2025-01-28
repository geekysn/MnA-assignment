// import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';

// gsap.registerPlugin(ScrollTrigger);

// export const Gifts = () => {
//   const contentRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: contentRef.current,
//         start: "top center",
//         end: "bottom center",
//         scrub: true
//       }
//     });

//     tl.fromTo(contentRef.current, {
//       scale: 0.5,
//       opacity: 0
//     }, {
//       scale: 1,
//       opacity: 1,
//       duration: 1
//     });

//     return () => {
//       tl.kill();
//     };
//   }, []);

//   return (
//     <section className="section gifts py-16 bg-white">
//       <div className="sticky-wrapper">
//         <div className="gifts-inner container mx-auto px-4">
//           <div className="page-padding">
//             <div ref={contentRef} className="gifts-content">
//               <h2 className="text-5xl font-bold mb-8 text-center md:text-left">Gifting made simple</h2>
//               <p className="text-xl max-w-2xl text-gray-700 mx-auto md:mx-0">
//                 Send the perfect gift every time. Our gift store is packed with hundreds of top brands and fully curated for every occasion.
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="gifts-imgs-wrapper pointer-events-none relative">
//           {/* Floating Images */}
//           <div className="floating-img-el home-01 pointer-events-auto">
//             <div className="floating-img-parallax fast">
//               <div className="floating-img-inner">
//                 <img
//                   src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525511a96ec997706c72330_gifts-img-01.webp"
//                   loading="eager"
//                   alt=""
//                   className="floating-img"
//                 />
//               </div>
//               <div className="floating-img-shadow"></div>
//             </div>
//           </div>
          
//           {/* Additional floating images */}
//           <div className="floating-img-el home-02 small pointer-events-auto">
//             <div className="floating-img-parallax slow">
//               <div className="floating-img-inner small">
//                 <img
//                   src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525511cd1c9d1887a65845d_gifts-img-02.webp"
//                   loading="eager"
//                   alt=""
//                   className="floating-img"
//                 />
//               </div>
//               <div className="floating-img-shadow transition"></div>
//             </div>
//           </div>

//           <div className="floating-img-el home-03 small pointer-events-auto">
//             <div className="floating-img-parallax slow">
//               <div className="floating-img-inner small">
//                 <img
//                   src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525511bfaf4654a99a6aed7_gifts-img-03.webp"
//                   loading="eager"
//                   alt=""
//                   className="floating-img"
//                 />
//               </div>
//               <div className="floating-img-shadow transition"></div>
//             </div>
//           </div>

//           <div className="floating-img-el home-04 pointer-events-auto">
//             <div className="floating-img-parallax fast">
//               <div className="floating-img-inner">
//                 <img
//                   src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525511a9fcd8c08c01efd58_gifts-img-04.webp"
//                   loading="eager"
//                   alt=""
//                   className="floating-img"
//                 />
//               </div>
//               <div className="floating-img-shadow transition"></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

import { useState, useEffect } from 'react';

export const Gifts = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.gifts-section');
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="gifts-section relative min-h-[800px] w-full overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24">
      <div className="container relative mx-auto px-6">
        {/* Background blur effects */}
        <div className="absolute inset-0">
          <div className={`absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue-100/50 blur-3xl transition-all duration-1000 ${isVisible ? 'opacity-60' : 'opacity-0'}`}></div>
          <div className={`absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-purple-100/50 blur-3xl transition-all duration-1000 delay-300 ${isVisible ? 'opacity-60' : 'opacity-0'}`}></div>
        </div>

        {/* Images and content container */}
        <div className="relative mx-auto max-w-6xl">
          {/* Center content */}
          <div className={`relative z-10 mx-auto mb-32 max-w-2xl text-center transition-all duration-1000 ease-out delay-700
            ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
          `}>
            <h2 className="mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
              Gifting made simple
            </h2>
            <p className="text-lg text-gray-600 md:text-xl">
              Send the perfect gift every time. Our gift store is packed with hundreds of top brands 
              and fully curated for every occasion.
            </p>
          </div>

          {/* Images Container */}
          <div className="relative h-[500px] w-full">
            {/* Large image - Top */}
            <div className={`absolute left-1/2 top-0 w-72 -translate-x-1/2 transition-all duration-1000 ease-out
              ${isVisible ? '-translate-y-16 scale-100 opacity-100' : 'translate-y-32 scale-90 opacity-0'}
            `}>
              <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-2xl">
                <img
                  src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525511a9fcd8c08c01efd58_gifts-img-04.webp"
                  alt="Featured Gift"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Medium image - Left */}
            <div className={`absolute left-8 top-1/2 w-56 -translate-y-1/2 transition-all duration-1000 ease-out delay-200
              ${isVisible ? '-translate-x-8 scale-100 opacity-100' : 'translate-x-32 scale-75 opacity-0'}
            `}>
              <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-xl">
                <img
                  src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525511bfaf4654a99a6aed7_gifts-img-03.webp"                  alt="Gift Option"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Small image - Bottom Left */}
            <div className={`absolute bottom-0 left-1/4 w-48 transition-all duration-1000 ease-out delay-300
              ${isVisible ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : 'translate-x-16 translate-y-16 scale-75 opacity-0'}
            `}>
              <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-lg">
                <img
                  src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525511cd1c9d1887a65845d_gifts-img-02.webp"
                  alt="Gift Sample"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Medium image - Right */}
            <div className={`absolute right-8 top-1/2 w-56 -translate-y-1/2 transition-all duration-1000 ease-out delay-200
              ${isVisible ? 'translate-x-8 scale-100 opacity-100' : '-translate-x-32 scale-75 opacity-0'}
            `}>
              <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-xl">
                <img
                  src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525511a96ec997706c72330_gifts-img-01.webp"
                  alt="Gift Option"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>

            {/* Small image - Bottom Right */}
            <div className={`absolute bottom-0 right-1/4 w-48 transition-all duration-1000 ease-out delay-300
              ${isVisible ? 'translate-x-0 translate-y-0 scale-100 opacity-100' : '-translate-x-16 translate-y-16 scale-75 opacity-0'}
            `}>
              <div className="overflow-hidden rounded-2xl bg-white p-2 shadow-lg">
                <img
                  src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65258fc9af9773d82c8e938b_stop-motion-img-02.webp"
                  alt="Gift Sample"
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

