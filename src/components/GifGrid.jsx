import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';
import { getGifData } from '../helpers/getGifData';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifData(category)
      .then(images => setImages(images))
  }, [category]);

  return (
    <>
      <h3>{category}</h3>
      <div className="grid-card">
        {images.map(item =>
          <GifGridItem key={item.id} images={item} />
        )}
      </div>
    </>
  )
}

