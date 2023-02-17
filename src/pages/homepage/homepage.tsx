import { Box, Container } from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { getAllCharacters } from "../../api/characterApi";
import Cards from "../../components/cards/cards";
import classes from './homepage.module.scss'
import  CustomChart from "../../components/chart/chart";

const Homepage = () => {
    const [pers, setPers] = useState([] as object);

    useEffect(() => {
        getAllCharacters().then(response => setPers(response));
    }, []);

    return (
        <Box sx={{
            flexGrow: '1',
            minHeight: '100vh',
            marginTop: '8px',
            marginBottom: '8px',
        }}>
            <CustomChart/>
            <Container sx={{
                display: 'flex',
                gap: '15px',
                flexWrap: 'wrap',
                justifyContent: 'center'
            }}>

                <article className={classes.card}>
                    <div className={classes.squareAnim} />
                </article>

                <article id='article1' className={classes.card}>
                    <div id="square1" className={classes.square} />
                </article>

                <article className={classes.card}>
                    <div className={classes.square} />
                </article>

                <Cards pers={pers} />
            </Container>
        </Box>
    )
}

export default Homepage;

