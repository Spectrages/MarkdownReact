import { useParams } from "react-router-dom";
import { useEffect, useMemo, useState } from 'react'
import { Box, Chip, Paper, Typography } from "@mui/material";
import styles from './fullPerson.module.scss'
import { getOneCharacter } from "../../api/characterApi";

interface IPers {
    id: number,
    image: string,
    name: string,
    species: string,
    status: string,
    type: string,
    gender: string,
}

const FullPerson = () => {
    const { id } = useParams();
    const numId = Number(id);

    const [data, setData] = useState({} as IPers);

    useEffect(() => {
        getOneCharacter(numId)
            .then(response => setData(response))
            .catch(error => alert(error))
    }, [])

    return (
        <Paper elevation={3} sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '300px',
            padding: '8px',
            margin: '8px',
            border: '1px solid black'
        }}>
           <Typography>Name: {data.name}</Typography>
           <Typography>Gender: {data.gender}</Typography>
           <Typography>Status: {data.status}</Typography>
           <Typography>Species: {data.species}</Typography>
           <img src={data.image} alt='person avatar'/>
        </Paper>
    )
}

export default FullPerson;