import { Outlet } from "react-router-dom";
import Header from '../header/header'
import Footer from '../footer/footer'
import { Grid, useMediaQuery, useTheme } from '@mui/material';
import Aside from '../aside/aside';
import MiniDrawer from '../navbar/navbar';
import classes from './layout.module.scss'

const Layout = () => {
    
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

    const dynamicStylesMain = {
        ...matchesSM && {
            display: 'flex',
            flexDirection: 'column',
        },
        ...matchesMD && {
            display: 'flex',
            flexDirection: 'row',
        },
    }

    const dynamicStylesSubMain = {
        ...matchesSM && {
            display: 'flex',
            flexDirection: 'column-reverse',
        },
        ...matchesMD && {
            display: 'flex',
            flexDirection: 'row',
        },
    }

    const dynamicStylesAsideMain = {
        ...matchesSM && {
            display: 'flex',
            maxWidth: '100%',
            flexDirection: 'row',
        },
        ...matchesMD && {
            display: 'flex',
            flexDirection: 'row',
        },
    }

    return (
        <Grid className={classes.main} component={'main'} sx={{ ...dynamicStylesMain }}>
            <MiniDrawer />
            <Grid container spacing={2}
                sx={{
                    marginLeft: '0px'
                }}>
                <Header />

                <Grid sx={{ ...dynamicStylesSubMain }}>
                    <Grid item xs={10}>
                        <Outlet />
                    </Grid>
                    <Grid component={'aside'} item xs={2} sx={{ ...dynamicStylesAsideMain }}>
                        <Aside />
                    </Grid>
                </Grid>

                <Footer />
            </Grid>
        </Grid>
    );
};
export { Layout };

