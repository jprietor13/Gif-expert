import React from 'react';

export const GifGridItem = ({ images }) => {
  return (
    <div>
      <img src={images.url} alt={images.title} />
      <span>{images.title}</span>
    </div>
  )
}

