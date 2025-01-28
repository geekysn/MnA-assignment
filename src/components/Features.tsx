import React from 'react';

export const Features = () => {
  return (
    <section className="section features">
      <div className="page-padding">
        <div className="container">
          <div className="flex flex-col items-center">
            <h2 className="headline-large text-center mb-12">
              Explore endless possibilities.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Customization Card */}
              <div className="bento-card customization">
                <div className="p-8 bg-white rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">Customization</h3>
                  <p className="text-gray-600">
                    Use a pre-designed template or personalize with video, stickers, fonts, and more
                  </p>
                  <div className="mt-8 relative">
                    <img 
                      src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253861742a03817c8f639e_customization-card-01.webp"
                      alt="Customization example"
                      className="w-full rounded-lg transform -rotate-15 transition-transform hover:rotate-0"
                    />
                  </div>
                </div>
              </div>

              {/* Scheduling Card */}
              <div className="bento-card scheduling">
                <div className="p-8 bg-white rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">Scheduling</h3>
                  <p className="text-gray-600">
                    Schedule all your cards and gifts now and we'll send them later
                  </p>
                  <div className="mt-8 relative">
                    <img 
                      src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253a83bf8a1c690e94cfa8_scheduling-card.webp"
                      alt="Scheduling interface"
                      className="w-full rounded-lg transform rotate-9 transition-transform hover:rotate-0"
                    />
                  </div>
                </div>
              </div>

              {/* Wallet Card */}
              <div className="bento-card wallet">
                <div className="p-8 bg-white rounded-2xl shadow-lg">
                  <h3 className="text-2xl font-bold mb-4">Wallet</h3>
                  <p className="text-gray-600">
                    Access all your gifts and save up your Givingli Cash
                  </p>
                  <div className="mt-8 relative">
                    <img 
                      src="https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253ce030282e8a2f1e202a_wallet-givingli-cash.svg"
                      alt="Wallet interface"
                      className="w-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};