import React, { useState, useEffect } from 'react';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);
  const getGifData = async () => {
    const url = "https://api.giphy.com/v1/gifs/search?api_key=nwVhWwSfEfq3Q0DEKZ3vXRbFZFvzFWf2&q=dragon+ball+z&limit=10";
    const response = await fetch(url);
    const { data } = await response.json();
    const getData = data.map(item => {
      return {
        id: item.id,
        title: item.title,
        url: item.images?.downsized_medium.url
      }
    });
    setImages(getData)
  }

  useEffect(() => {
    getGifData();
  }, []);

  return (
    <div>
      <h3>{category}</h3>
      {images.map(item =>
        <GifGridItem key={item.id} images={item} />
      )}
    </div>
  )
}

