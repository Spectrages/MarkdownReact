import { Outlet } from "react-router-dom";
import Header from '../header/header'
import Footer from '../footer/footer'
import { Grid } from '@mui/material';
import Aside from '../aside/aside';
import MiniDrawer from '../navbar/navbar';
import classes from './layout.module.scss'

const Layout = () => {

    return (
        <Grid className={classes.main} component={'main'} sx={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <MiniDrawer/>
            <Grid container spacing={2} sx={{
                    marginLeft: '0px'
                }}>
                <Header />
                <Grid container spacing={1} >
                    <Grid item xs={10}>
                        <Outlet />
                    </Grid>
                    <Grid component={'aside'} item xs={2}>
                        <Aside />
                    </Grid>
                </Grid>
                <Footer />
            </Grid>

        </Grid>

    );
};
export { Layout };
