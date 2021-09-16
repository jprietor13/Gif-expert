import { getGifData } from '../../helpers/getGifData';

describe("Pruebas a la funcion getGifData", () => {

  test("Debe de traer 10 elementos", async () => {
    const gifs = await getGifData("Dragon ball Z");
    expect(gifs.length).toEqual(10);
  })

  test("Debe validar si no se le envia el parametro", async () => {
    const gifs = await getGifData("");
    expect(gifs.length).toEqual(0);
  })
})