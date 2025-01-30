// import React, { useState, useEffect } from 'react';
// import confetti from 'canvas-confetti';

// export const GivingliCash = () => {
//   const [amount, setAmount] = useState(10);
//   const [showBeacon, setShowBeacon] = useState(true);

//   const handleAdd = () => {
//     if (amount < 90) {
//       setAmount(prev => prev + 10);
//       setShowBeacon(false);
//       confetti({
//         spread: 70,
//         origin: { y: 1.2 }
//       });
//     }
//   };

//   const handleSubtract = () => {
//     if (amount > 10) {
//       setAmount(prev => prev - 10);
//     }
//   };

//   return (
//     <section className="section givingli-cash bg-bg py-24">
//       <div className="container mx-auto px-4">
//         <div className="text-center">
//           <h2 className="text-5xl font-bold mb-12">Givingli Cash</h2>
          
//           <div className="relative max-w-md mx-auto">
//             <div className="givingli-cash-phone-wrapper relative">
//               <img
//                 src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6524472ece64b75ac0024818_phone_mockup.webp"
//                 alt="Phone mockup"
//                 className="w-full"
//               />
//               <div className="absolute -left-52 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 animate-bounce h-48">
//                 <img
//                   src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253ce094aa04d73fdff6d4_wallet-card-nike.webp"
//                   alt="Card 1"
//                   className="shadow-lg rounded-md w-40"
//                 />
//                 <img
//                   src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253ce001c0c827c6bac1fb_wallet-card-starbucks.webp"
//                   alt="Card 2"
//                   className="shadow-lg rounded-md animate-pulse w-40"
//                 />
//               </div>

//               <div className="absolute -right-52 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 animate-bounce h-48">
//                 <img
//                   src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65254282d3dc76c4aa996868_gifts-card-amazon.webp"
//                   alt="Card 3"
//                   className="shadow-lg rounded-md w-40"
//                 />
//                 <img
//                   src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65254283c535bafbfa5b3720_gifts-card-sephora.webp"
//                   alt="Card 4"
//                   className="shadow-lg rounded-md animate-pulse w-40"
//                 />
//               </div>
//               <div className="absolute inset-0 flex flex-col items-center justify-center">
//                 <div className="text-xl font-semibold mb-4">Select Amount</div>
                
//                 <div className="flex items-center gap-4">
//                   <button
//                     onClick={handleSubtract}
//                     className={`p-3 rounded-full bg-white shadow-lg ${amount === 10 ? 'opacity-50' : ''}`}
//                     disabled={amount === 10}
//                   >
//                     -
//                   </button>
                  
//                   <div className="text-3xl font-bold">${amount}</div>
                  
//                   <button
//                     onClick={handleAdd}
//                     className={`p-3 rounded-full bg-white shadow-lg ${amount === 90 ? 'opacity-50' : ''}`}
//                     disabled={amount === 90}
//                   >
//                     +
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>

          
          
//           <p className="mt-12 text-xl max-w-2xl mx-auto">
//             Givingli Cash gives your family and friends the ability to choose from any of our 300+ gifts. 
//             No more gifting anxiety. No more unwanted gifts.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

import React, { useState, useEffect, useRef, useMemo } from 'react';
import confetti from 'canvas-confetti';

export const GivingliCash = () => {
  const [amount, setAmount] = useState(10);
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef(null);

  // Define fixed positions for cards that won't overlap
  const cardPositions = useMemo(() => {
    const positions = [
      { // Top
        x: -50,
        y: -300,
        rotate: 0,
        scale: 1
      },
      { // Right
        x: 210,
        y: 0,
        rotate: 8,
        scale: 1
      },
      { // Bottom
        x: -50,
        y: 230,
        rotate: 0,
        scale: 1
      },
      { // Left
        x: -300,
        y: 0,
        rotate: -8,
        scale: 1
      }
    ];

    // Shuffle the positions array
    return positions.sort(() => Math.random() - 0.5);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
            setIsHovered(false);
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleAdd = () => {
    if (amount < 90) {
      setAmount(prev => prev + 10);
      confetti({
        spread: 70,
        origin: { y: 1.2 },
        colors: ['#4F46E5', '#7C3AED', '#2563EB']
      });
    }
  };

  const handleSubtract = () => {
    if (amount > 10) {
      setAmount(prev => prev - 10);
    }
  };

  const getCardStyle = (index: number) => {
    const baseStyle = {
      transform: isHovered 
        ? `translate(${cardPositions[index].x}px, ${cardPositions[index].y}px) 
           rotate(${cardPositions[index].rotate}deg) 
           scale(${cardPositions[index].scale})`
        : 'translate(-50%, -50%) scale(0.01)',
      opacity: isHovered ? 1 : 0,
      transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.6s ease-in-out',
      willChange: 'transform, opacity',
      zIndex: isHovered ? 20 : 0
    };

    return {
      ...baseStyle,
      transitionDelay: isHovered ? `${index * 0.1}s` : '0s',
    };
  };

  return (
    <section 
      ref={sectionRef}
      className="section givingli-cash relative bg-[#FCFAF4]  to-white overflow-hidden py-24"
      tabIndex={-1}
    >
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-5xl h-16 font-bold mb-12 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Givingli Cash
          </h2>
          
          <div 
            className="relative max-w-5xl mx-auto" // Increased width to accommodate cards
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
          >
            <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="relative min-h-[600px] flex items-center justify-center">
                {/* Phone Container */}
                <div className="relative z-10 w-[200px]"> {/* Fixed width for phone */}
                  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 transform scale-95 -z-10"/>
                  <img
                    src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6524472ece64b75ac0024818_phone_mockup.webp"
                    alt="Phone mockup"
                    className="relative w-full shadow-2xl rounded-3xl"
                  />
                </div>
                
                {/* Cards Container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {[...Array(4)].map((_, index) => (
                    <div 
                      key={index}
                      className="absolute left-1/2 top-1/2 w-40"
                      style={getCardStyle(index)}
                    >
                      <div className="relative transition-transform duration-300 hover:scale-105">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 blur-lg -z-10"/>
                        <img
                          src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6525891610faf129a1885e87_givingli-cash-card.webp"
                          alt={`Gift Card ${index + 1}`}
                          className="w-full h-24 object-cover rounded-xl shadow-lg"
                        />
                      </div>
                    </div>  
                  ))}
                </div>

                {/* Amount Selector Overlay */}
                <div className="absolute inset-0 z-30 flex flex-col items-center justify-center rounded-3xl">
                  <div className="text-xl font-semibold mb-4 text-gray-800">Select Amount</div>
                  
                  <div className="flex items-center gap-6">
                    <button
                      onClick={handleSubtract}
                      className={`p-4 rounded-full bg-white shadow-lg transition-all duration-300
                        ${amount === 10 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'hover:bg-gray-50 hover:shadow-xl active:scale-95'}`}
                      disabled={amount === 10}
                    >
                      <span className="text-xl font-bold text-gray-700">−</span>
                    </button>
                    
                    <div className="text-4xl font-bold text-gray-800">
                      ${amount}
                    </div>
                    
                    <button
                      onClick={handleAdd}
                      className={`p-4 rounded-full bg-white shadow-lg transition-all duration-300
                        ${amount === 90 
                          ? 'opacity-50 cursor-not-allowed' 
                          : 'hover:bg-gray-50 hover:shadow-xl active:scale-95'}`}
                      disabled={amount === 90}
                    >
                      <span className="text-xl font-bold text-gray-700">+</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="mt-12 text-xl max-w-2xl mx-auto text-gray-600 leading-relaxed">
            Givingli Cash gives your family and friends the ability to choose from any of our 300+ gifts. 
            No more gifting anxiety. No more unwanted gifts.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GivingliCash;