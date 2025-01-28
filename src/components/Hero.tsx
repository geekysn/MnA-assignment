import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Hero = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top top",
        end: "bottom center",
        scrub: true,
      }
    });

    tl.to(contentRef.current, {
      y: 100,
      opacity: 0,
      ease: "none"
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen bg-[#FCFAF4] relative overflow-hidden">
      <div className="sticky top-0">
        <div className="hero-inner pointer-events-none">
          <div className="px-4 md:px-6 lg:px-8">
            <div 
              ref={contentRef}
              className="hero-content text-center max-w-4xl mx-auto pt-32"
            >
              <svg className="editors-choice-badge w-32 mx-auto mb-8" viewBox="0 0 120 37">
                {/* SVG content from original */}
              </svg>
              
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-12">
                Gift<br/>More<br/>Smiles
              </h1>

              <div className="flex justify-center ">
                <a 
                  href="https://web.givingli.com/website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button nav pointer-events-auto"
                >
                  <span className="button-label w-30 bg-orange-300 p-4 rounded-full">Send a Givingli</span>
                  <div className="button-bg-wrapper">
                    <div className="button-bg transform scale-0 hover:scale-100 transition-transform" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Phone mockup and stickers components will be added here */}
      </div>
    </section>
  );
};