import React, { useState } from 'react'
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';

const GifExpertApp = () => {
  const categories = ["Dragon Ball Z"];
  const [categorie, setCategorie] = useState(categories);

  // const handleAddCategorie = () => {
  //   const newCategorie = "Samurai X";
  //   setCategorie([...categories, newCategorie])
  // }
  return (
    <div>
      <h2>GifExpertApp</h2>
      <AddCategory categories={setCategorie} />
      <hr />
      {/* <button type="button" onClick={handleAddCategorie}>Agregar</button> */}
      <ol>
        {categorie.map(category =>
          <GifGrid category={category} key={category} />
        )}
      </ol>
    </div>
  )
}

export default GifExpertApp;
