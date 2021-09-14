import React from 'react';

export const GifGridItem = ({ images }) => {
  return (
    <div className="card animate__backInDown">
      <img src={images.url} alt={images.title} />
      <p>{images.title}</p>
    </div>
  )
}

