import React from 'react'
import disney from '../Images/disney.png'
import pixar from '../Images/pixar.png'
import marvel from '../Images/marvel.png'  
import starwars from '../Images/starwar.png'
import national from '../Images/nationalG.png'

import starwarVideo from '../Videos/star-wars.mp4'
import marvelVideo from '../Videos/marvel.mp4'
import disneyVideo from '../Videos/disney.mp4'
import pixarVideo from '../Videos/pixar.mp4'
import nationalVideo from '../Videos/national-geographic.mp4'

function ProductionHouse() {
    const productionhouselist = [
        { id: 1, image: disney, video: disneyVideo },
        { id: 2, image: pixar, video: pixarVideo },
        { id: 3, image: marvel, video: marvelVideo },
        { id: 4, image: starwars, video: starwarVideo },
        { id: 5, image: national, video: nationalVideo }
    ];

    return (
        <div className="flex gap-2 md:gap-5 p-2 px-5 md:px-16">
            {productionhouselist.map((item) => (
                <div key={item.id} className='border-[2px] border-gray-600
                rounded-lg hover:scale-110 transition-all duration-300
                ease-in-out cursor-pointer relative shadow-xl shadow-gray-800'>
                    <video src={item.video} autoPlay loop playsInline muted
                        className='absolute top-0 rounded-md z-0 opacity-0
                        hover:opacity-50' />
                    <img src={item.image} className="w-full z-[1] opacity-100" />
                </div>
            ))}
        </div>
    );
}

export default ProductionHouse;