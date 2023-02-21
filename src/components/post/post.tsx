import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import clsx from 'clsx';
import styles from './post.module.scss';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import MaleIcon from '@mui/icons-material/Male';
import FemaleIcon from '@mui/icons-material/Female';
import { Box, Paper, Typography } from '@mui/material';

interface IPers {
    id: number;
    name: string;
    image: string;
    species: string;
    gender: string;
    location:
    {
        name: string;
    };
    episode: string;
    status: string;
    type: string;
    isLoading: boolean;
}

const Post = (props: IPers) => {
    const navigate = useNavigate();
    return (
        <Box
        component={'article'}
         onClick={() => navigate(`/person/${props.id}`)}
            sx={{
                display: 'flex',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    maxWidth: "100%",
                    height: '100%',
                    border: '1px solid black',
                    borderRadius: '10px',
                    padding: '5px'
                },
            }}>
            <Paper elevation={3}
            sx={{
                display: 'flex',
                flexDirection: 'column'
            }}
            >
                <img 
                src={props.image} 
                alt='person avatar'
                style={{
                    display: 'flex',
                    width: 300,
                    height: 300,
                }}

                />
                <Box sx={{
                    display: 'flex',
                }}>
                    <Typography>Status: {props.status}</Typography>
                    {props.status === 'Alive' ?
                        <FiberManualRecordIcon sx={{ color: 'green' }} />
                        : props.status === 'Dead'
                            ? <FiberManualRecordIcon sx={{ color: 'red' }} />
                            : <FiberManualRecordIcon sx={{ color: 'grey' }} />}
                </Box>
                <Typography>Species: {props.species}</Typography>
                <Typography>Name: {props.name}</Typography>
                {props.type ? <Typography>Type: {props.type}</Typography> : <Typography>Type: none</Typography>}
                <Box sx={{
                    display: 'flex',
                }}>
                    <Typography>Gender: {props.gender}</Typography>
                    {props.gender === 'Male'
                        ? <MaleIcon sx={{ color: 'white' }} />
                        : props.gender === 'Female'
                            ? <FemaleIcon sx={{ color: 'white' }} />
                            : ''}
                </Box>
            </Paper>
        </Box>
    );
};

export default Post