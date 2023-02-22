import React from "react";
import Post from "../../components/post/post";
// @ts-ignore
import classes from './homepage.module.scss';
import { useEffect, useRef } from "react";
import { fetchCharacters } from "../../api/characterApi";
import { Grid, Typography } from "@mui/material";
import { RootState } from "../../redux/store";
import { CustomPagination } from "../../pagination/CustomPagination";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { moveFrame } from "../../scripts/animations/animationFrame";
import { moveInterval } from "../../scripts/animations/animationInterval";
import CustomChart from "../../components/chart/chart";

interface ILocation {
    name: any;
}

interface IPers {
    id: number;
    name: string;
    image: string;
    species: string;
    gender: string;
    location: ILocation;
    episode: string;
    status: string;
    type: string;
    isLoading: boolean;

}

const Homepage = () => {
    const dispatch = useAppDispatch();
    const data: any = useAppSelector((state: RootState) => state.characters);
    const isCharactersLoading = data.characters.status === 'loading';

    const squareRefFrame = useRef<HTMLDivElement>(null);
    const fieldRefFrame = useRef<HTMLElement>(null);

    const squareRefInterval = useRef<HTMLDivElement>(null);
    const fieldRefInterval = useRef<HTMLElement>(null);

    const handlePageChange = (value: number) => {
        dispatch(fetchCharacters(value))
    };

    useEffect(() => {
        moveFrame(
            squareRefFrame.current,
            fieldRefFrame.current,
            2
        )
    }, [squareRefFrame, fieldRefFrame]);

    useEffect(() => {
        moveInterval(
            squareRefInterval.current,
            fieldRefInterval.current,
            2
        )
    }, [squareRefInterval, fieldRefInterval])


    useEffect(() => {
        dispatch(fetchCharacters(0));
    }, []);

    return (
        <React.Fragment>
            <CustomChart/>
            <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="baseline"
            >
                <article className={classes.card}>
                    <div className={classes.squareAnim} />
                    <Typography>SCSS</Typography>
                </article>

                <article ref={fieldRefFrame} className={classes.card}>
                    <div ref={squareRefFrame} className={classes.square} />
                    <Typography>AnimationFrame</Typography>
                </article>

                <article ref={fieldRefInterval} className={classes.card}>
                    <div ref={squareRefInterval} className={classes.square} />
                    <Typography>TS</Typography>
                </article>

                {(isCharactersLoading ? [...Array(20)] : data?.characters?.items?.results).map((obj: IPers, index: number) => {
                    return isCharactersLoading
                        ? (<Post key={index} isLoading={true}
                            id={0}
                            name={" "}
                            image={" "}
                            species={" "}
                            gender={" "}
                            location={{ name: " " }}
                            episode={" "}
                            status={" "}
                            type={" "}
                        />)
                        : (<Post
                            key={index}
                            id={obj.id}
                            name={obj.name}
                            image={obj.image}
                            species={obj.species}
                            gender={obj.gender}
                            location={obj?.location?.name}
                            episode={obj?.episode}
                            status={obj.status}
                            type={obj.type}
                            isLoading={false}
                        />);
                })}
            </Grid>
            <CustomPagination data={data?.characters?.items?.info || ''} onChange={handlePageChange} />
        </React.Fragment>
    )
}

export default Homepage;