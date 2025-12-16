import React, { useRef } from 'react';

const Carousel = () => {
  const cardContainerRef = useRef(null);
 const cards = [
  {
    title: 'Skills',
    items: [
      'Front-end development (React, Tailwind)',
      'Back-end development (Laravel)',
      'Marketing and design',
      'Leadership and project planning',
      'Drawing and 3D modeling'
    ]
  },
  {
    title: 'Experience',
    items: [
      'AIESEC member (2023–present): HR & Marketing',
      'Team Leader of Marketing Sub-division',
      'Conference Committee President (2023)',
      'Various design freelance projects'
    ]
  },
  {
    title: 'Tools',
    items: ['Python', 'C++', 'Javascript', 'React', 'Tailwind', 'Laravel', 'Canva', 'Figma', 'Clip Studio Paint', 'Blender']
  },
  {
    title: 'Languages',
    items: ['Indonesian (native)', 'English (fluent)', 'Japanese (N5)']
  },
  {
    title: 'Fun Fact',
    description: 'I enjoy watching video essays while crocheting during my free time :)'
  }
];    

  const scrollLeft = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: -320, 
        behavior: 'smooth'
      });
    }
  };

  const scrollRight = () => {
    if (cardContainerRef.current) {
      cardContainerRef.current.scrollBy({
        left: 320, 
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className='mt-12 flex'>
      <button className="absolute left-32 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg border border-gray-300 rounded-full w-16 h-16 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-200 z-10"
        onClick={scrollLeft}>
        ‹
      </button>

      <div className="w-full p-4 relative">

        <div className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth snap-x snap-mandatory pb-4"
          ref={cardContainerRef}>
          {cards.map((card, index) => {
            const bgClass = index % 2 === 0 ? 'bg-[var(--seagrass)]' : 'bg-lime-100'
            const textColorClass = index % 2 === 0 ? 'text-white' : 'text-black'
            
            return (
              <div
                className={`carousel-card flex-shrink-0 w-64 h-76 flex flex-col justify-between ${bgClass} shadow-lg rounded-lg snap-center transition-all duration-200 select-none mt--4`}
                key={index}
              >
                <div className={`${textColorClass} text-left p-6 flex flex-col gap-4 flex-1`}>
                  <h2 className="text-3xl font-semibold">{card.title}</h2>
                    {card.items ? (
                      <ul className="text-sm list-disc list-inside">
                        {card.items.map((item, i) => <li key={i}>{item}</li>)}
                      </ul>
                        ) : (
                        <p className="text-sm">{card.description}</p>
                        )}
                </div>
              </div>
            )})}
        </div>

      </div>

      <button className="absolute right-32 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg border border-gray-300 rounded-full w-16 h-16 flex items-center justify-center text-gray-700 hover:text-gray-900 transition-all duration-200 z-10"
        onClick={scrollRight}
      >
        ›
      </button>
    </div>
  );
};

export default Carousel;
