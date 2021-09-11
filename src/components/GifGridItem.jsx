import React from 'react';

export const GifGridItem = ({ images }) => {
  return (
    <div className="card">
      <img src={images.url} alt={images.title} />
      <p>{images.title}</p>
    </div>
  )
}

