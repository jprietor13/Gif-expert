import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';

describe("Pruebas en GifGridItem", () => {
  const title = "title categorie";
  const url = "https://localhost:3000/title_categorie.jpg";
  const wrapper = shallow(<GifGridItem title={title} url={url} />);

  test("Debe mostrar el componente", () => {
    expect(wrapper).toMatchSnapshot();
  })

  test("Debe tener un parrafo con el titulo", () => {
    const parrafo = wrapper.find('p');
    expect(parrafo.text().trim()).toBe(title);
  });

  test("Debe tener el url y el titulo de la imagen igual al de los props", () => {
    const img = wrapper.find('img');
    //console.log(img.prop('src'))
    expect(img.prop('src')).toBe(url); //props sirve para ver los atributos del elemento html
    expect(img.prop('alt')).toBe(title);
  });

  test("Debe tener el div padre la clase animate__backInDown", () => {
    const div = wrapper.find('div');
    expect(div.prop('className')).toContain('animate__backInDown')
  });
})