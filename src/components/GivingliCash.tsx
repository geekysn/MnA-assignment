import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

export const GivingliCash = () => {
  const [amount, setAmount] = useState(10);
  const [showBeacon, setShowBeacon] = useState(true);

  const handleAdd = () => {
    if (amount < 90) {
      setAmount(prev => prev + 10);
      setShowBeacon(false);
      confetti({
        spread: 70,
        origin: { y: 1.2 }
      });
    }
  };

  const handleSubtract = () => {
    if (amount > 10) {
      setAmount(prev => prev - 10);
    }
  };

  return (
    <section className="section givingli-cash bg-bg py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h2 className="text-5xl font-bold mb-12">Givingli Cash</h2>
          
          <div className="relative max-w-md mx-auto">
            <div className="givingli-cash-phone-wrapper relative">
              <img
                src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/6524472ece64b75ac0024818_phone_mockup.webp"
                alt="Phone mockup"
                className="w-full"
              />
              <div className="absolute -left-52 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 animate-bounce h-48">
                <img
                  src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253ce094aa04d73fdff6d4_wallet-card-nike.webp"
                  alt="Card 1"
                  className="shadow-lg rounded-md w-40"
                />
                <img
                  src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253ce001c0c827c6bac1fb_wallet-card-starbucks.webp"
                  alt="Card 2"
                  className="shadow-lg rounded-md animate-pulse w-40"
                />
              </div>

              <div className="absolute -right-52 top-1/2 transform -translate-y-1/2 flex flex-col gap-6 animate-bounce h-48">
                <img
                  src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65254282d3dc76c4aa996868_gifts-card-amazon.webp"
                  alt="Card 3"
                  className="shadow-lg rounded-md w-40"
                />
                <img
                  src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65254283c535bafbfa5b3720_gifts-card-sephora.webp"
                  alt="Card 4"
                  className="shadow-lg rounded-md animate-pulse w-40"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-xl font-semibold mb-4">Select Amount</div>
                
                <div className="flex items-center gap-4">
                  <button
                    onClick={handleSubtract}
                    className={`p-3 rounded-full bg-white shadow-lg ${amount === 10 ? 'opacity-50' : ''}`}
                    disabled={amount === 10}
                  >
                    -
                  </button>
                  
                  <div className="text-3xl font-bold">${amount}</div>
                  
                  <button
                    onClick={handleAdd}
                    className={`p-3 rounded-full bg-white shadow-lg ${amount === 90 ? 'opacity-50' : ''}`}
                    disabled={amount === 90}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          
          
          <p className="mt-12 text-xl max-w-2xl mx-auto">
            Givingli Cash gives your family and friends the ability to choose from any of our 300+ gifts. 
            No more gifting anxiety. No more unwanted gifts.
          </p>
        </div>
      </div>
    </section>
  );
};

