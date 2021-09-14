import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';
export const GifGrid = ({ category }) => {

  const { data: images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Cargando...</p>}
      <div className="grid-card animate__animated animate__bounce">
        {images.map(item =>
          <GifGridItem key={item.id} images={item} />
        )}
      </div>
    </>
  )
}

