import { useState, useEffect } from "react";
import { getGifData } from '../helpers/getGifData';

export const useFetchGifs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    getGifData(category)
      .then(images => {
        setTimeout(() => {
          setState({
            data: images,
            loading: false
          })
        }, 3000)
      })
  }, [category])

  return state;
}