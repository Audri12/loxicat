import React, { useEffect, useState } from 'react'

const AllMembersDraft = () => {
    const [cards,setCards]=useState([]);

    useEffect(()=>{
      fetch('TeamCard.json')
      .then(res=>res.json())
      .then(data=>{
        setCards(data);
        console.log(data);
      })
    },[])
  return (
    <div>

<div className="grid  gap-8 row-gap-5 mb-8  pb-36 sm:grid-cols-2 lg:grid-cols-4 sm:mx-auto lg:px-72">
      {
        cards.map((card)=>(
          <div>
            <div key={card.id}>
              <div className='relative w-full max-w-sm mx-auto items-center '>
                <img src={card.image} className='object-cover w-full h-full rounded shadow-lg hover:scale-125'></img>
                {/* <button className='p-6 px-16 m-9 -mt-24 text-center justify-center items-center bg-red-200 hover:text-white hover:bg-[#FF7906] transition transform hover:translate-y-6'>
                    <h1>{card.name}</h1>
                    <p className='text-[#FF7906] '>{card.designation}</p>
                </button> */}


                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
        <span className="text-white text-lg font-semibold">
          <h1 className='text-xl	'>{card.name}</h1>
          <p className='pb-4 text-sm'>{card.description}</p>
          <div>
          <ul class="flex items-center justify-center text-center mt-6 space-x-3 ">
                <li>
                    <a
                        href="#"
                        title=""
                        class="flex items-center justify-center text-gray-800 transition-all duration-200 bg-gray-500 border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                    >
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path
                                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                            ></path>
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        title=""
                        class="flex items-center justify-center text-gray-800 transition-all duration-200 bg-gray-500 border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                    >
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                        </svg>
                    </a>
                </li>

                <li>
                    <a
                        href="#"
                        title=""
                        class="flex items-center justify-center text-gray-800 transition-all duration-200 bg-gray-500 border border-gray-300 rounded-full w-7 h-7 focus:bg-orange-600 hover:text-white focus:text-white hover:bg-orange-600 hover:border-orange-600 focus:border-orange-600"
                    >
                        <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                            <circle cx="16.806" cy="7.207" r="1.078"></circle>
                            <path
                                d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                            ></path>
                        </svg>
                    </a>
                   
                </li>

              
            </ul>
          </div>
        </span>
      </div>
              </div>

              <button className='group  p-6 px-16 m-9 -mt-24 text-center justify-center items-center bg-red-200 hover:text-white hover:bg-[#FF7906] transition transform hover:translate-y-6'>
                    <h1 className='text-black group-hover:text-white '>{card.name}</h1>
                    <p className='text-[#FF7906] group-hover:text-white  '>{card.designation}</p>
                    
                </button>


               <div>
               <img src={card.image} className='object-cover w-full h-full rounded shadow-lg hover:scale-125'></img>
               <button className='group  p-6 px-16 m-9 -mt-24 text-center justify-center items-center bg-red-200 hover:text-white hover:bg-[#FF7906] transition transform hover:translate-y-6'>
                    <h1 className='text-black group-hover:text-white '>{card.name}</h1>
                    <p className='text-[#FF7906] group-hover:text-white  '>{card.designation}</p>
                    
                </button>

               </div>

                {/* <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
  <div class="flex items-center space-x-3">
    <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"><!-- ... --></svg>
    <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
  </div>
  <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
</a> */}
              

            </div>
          </div>
        ))
      }
   
      
      
      </div>


    </div>
  )
}

export default AllMembersDraft