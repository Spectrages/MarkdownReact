import { AxiosResponse } from "axios";
import axios from 'axios';
import { createAsyncThunk } from "@reduxjs/toolkit";
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

export const fetchCharacters = createAsyncThunk('character/fetchCharacter', async (number: number) => {
    try {
        const response = await axios.get(`https://rickandmortyapi.com/api/character?page=${number}`);
        return response.data;
    } catch (error) {
        return console.error(error);
    }
});
