import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { GifGridItem } from './GifGridItem';
//import { getGifData } from '../helpers/getGifData';

export const GifGrid = ({ category }) => {

  const { data, loading } = useFetchGifs();
  console.log(data);
  console.log(loading)
  // const [images, setImages] = useState([]);

  // useEffect(() => {
  //   getGifData(category)
  //     .then(images => setImages(images))
  // }, [category]);

  return (
    <>
      <h3>{category}</h3>
      {loading ? "Cargando" : "Termino la carga"}
      {/* <div className="grid-card">
        {images.map(item =>
          <GifGridItem key={item.id} images={item} />
        )}
      </div> */}
    </>
  )
}

