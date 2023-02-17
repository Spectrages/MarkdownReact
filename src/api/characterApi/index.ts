import { AxiosResponse } from "axios";
import $api from "../index";

export const getAllCharacters = async () => {
    let arr = [];
    const res: AxiosResponse = await $api.get(`https://rickandmortyapi.com/api/character`)
    for (let i = 1; i <= res.data.info.pages; i++) {
        let response: AxiosResponse = await $api.get(`https://rickandmortyapi.com/api/character/?page=${i}`)
        arr.push(response.data.results)
    }
    return arr.flat();
}

export const getOneCharacter = async (id: number) => {
    const { data } = await $api.get(`https://rickandmortyapi.com/api/character/${id}`);
    return data;
}

export const getCharactersPage = async (page: number) => {
    const { data } = await $api.get(`https://rickandmortyapi.com/api/character/?page=${page}`);
    return data;
}
