import Image from 'next/image';
import React from 'react';
import "../app/styles/card.css"
interface proptype {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

const Card: React.FC<proptype> = ({ title, desc, img, tags }) => {
  return (
    <div className='card-div' data-aos="zoom-in-up">
      <div>
        <Image
          className='card-img'
          src={img}
          width={350}
          height={350}
          alt={title}
        />
      </div>
      <div className='card-containt'>
        <div className='card-title'>{title}</div>
        <div>{desc}</div>
        <div className='mt-4'>
          {/* Map through the tags array and render each tag */}
          {tags.map((tag, index) => (
            <span key={index} className='card-tags'>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;

