import React, { useEffect, useState } from 'react';

const AllMembersDraft3 = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('TeamCard.json')
      .then((res) => res.json())
      .then((data) => {
        setCards(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <div className="grid gap-8 row-gap-5 mb-8 pb-36 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto lg:px-72">
        {cards.map((card) => (
          <div key={card.id} className="relative group"> {/* Group class at the card level */}
            <div className="relative w-full max-w-sm mx-auto overflow-hidden rounded shadow-lg">
              {/* Image */}
              <img
                src={card.image}
                className="object-cover w-full h-full "
                alt={card.name}
              />
              {/* Blackish Overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>
              {/* Overlay for Button */}
              <div className="absolute inset-0 z-10 flex items-end -mt-8 p-6">
                <button className="w-full py-3 -mt-8 bg-white  group-hover:bg-opacity-90 group-hover:bg-[#FF7906] transition duration-300 transform translate-y-0 group-hover:translate-y-6">
                  <h1 className='text-black group-hover:text-white'>{card.name}</h1>
                  <p className='text-[#FF7906] group-hover:text-white'>{card.designation}</p>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllMembersDraft3;
