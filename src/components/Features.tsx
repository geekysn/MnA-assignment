import React from 'react';

export const Features = () => {
  const features = [
    {
      title: "Customization",
      description: "Use a pre-designed template or personalize with video, stickers, fonts, and more",
      overlayText: "Create personalized cards with our intuitive customization tools. Add your own photos, choose from hundreds of stickers, and make it uniquely yours.",
      rotation: "-rotate-0",
      img: "https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253861742a03817c8f639e_customization-card-01.webp"
    },
    {
      title: "Scheduling",
      description: "Schedule all your cards and gifts now and we'll send them later",
      overlayText: "Never miss an important date again. Set up your cards and gifts in advance and let our scheduling system handle the rest.",
      rotation: "rotate-0",
      img: "https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/652538617d7b8af462331173_customization-card-02.webp"
    },
    {
      title: "Wallet",
      description: "Access all your gifts and save up your Givingli Cash",
      overlayText: "Keep track of all your digital gifts and rewards in one place. Watch your Givingli Cash grow with every transaction.",
      rotation: "rotate-0",
      img: "https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253a83bf8a1c690e94cfa8_scheduling-card.webp"
    },
    {
      title: "Sharing",
      description: "Share your creations instantly with friends and family",
      overlayText: "Connect with loved ones seamlessly. Share your cards and gifts across any platform with just a click.",
      rotation: "-rotate-0",
      img: "https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253fb67d7b8af4623b9bef_inbox-ui.webp"
    },
    {
      title: "Templates",
      description: "Choose from hundreds of professionally designed templates",
      overlayText: "Browse our extensive collection of templates for every occasion. From birthdays to thank you notes, we've got you covered.",
      rotation: "rotate-0",
      img: "https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65254928fb080a7f70152b1b_reminders-ui.webp"
    },
    {
      title: "Analytics",
      description: "Track your sending patterns and special occasions",
      overlayText: "Get insights into your giving habits and never miss an important date with our smart analytics dashboard.",
      rotation: "-rotate-0",
      img: "https://cdn.prod.website-files.com/65240dac30f703b7a711b7c2/65253a825d829fa71580e41b_scheduling-ui.svg"
    }
  ];

  return (
    <section className="section features bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Explore endless possibilities.
            </h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
            {features.map((feature, index) => (
              <div key={index} className="group relative overflow-hidden">
                <div className="h-full">
                  <div className="p-8 bg-white rounded-2xl shadow-lg overflow-hidden h-full">
                    <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                    <div className="mt-8 relative">
                      <img 
                        src={feature.img}
                        alt={`${feature.title} interface`}
                        className={`w-full rounded-lg transform ${feature.rotation} transition-all duration-500 ease-in-out group-hover:blur-sm group-hover:scale-105`}
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
                  <div className="bg-black/70 p-6 rounded-xl text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-lg">
                      {feature.overlayText}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;