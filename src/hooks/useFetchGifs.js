import { useState, useEffect } from "react"

export const useFetchGifs = () => {
  const [state, setState] = useState({
    data: [],
    loading: true
  });

  useEffect(() => {
    setTimeout(() => {
      setState({
        data: [1, 2, 3, 4, 5, 6, 7, 8, 9],
        loading: false
      })
    }, 3000);
  }, [])


  return state;
}