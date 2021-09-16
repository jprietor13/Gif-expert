import React from 'react';
import { shallow } from 'enzyme';
import { AddCategory } from '../../components/AddCategory';

describe("Pruebas a <AddCategory />", () => {

  const setCategorie = () => { };
  const wrapper = shallow(<AddCategory categories={setCategorie} />);
  test("Debe validar el correcto funcionamiento del componente", () => {
    expect(wrapper).toMatchSnapshot();
  })
})