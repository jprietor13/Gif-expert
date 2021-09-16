import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe("Pruebas en GifGridItem", () => {
  const title = "title categorie";
  const url = "https://localhost:3000/title_categorie.jpg";

  test("Debe mostrar el componente", () => {
    const wrapper = shallow(<GifGridItem title={title} url={url} />);
    expect(wrapper).toMatchSnapshot();
  })
})