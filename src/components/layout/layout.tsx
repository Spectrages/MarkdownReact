import { Outlet } from "react-router-dom";
import Header from '../header/header'
import Footer from '../footer/footer'
import { Grid } from '@mui/material';
import Aside from '../aside/aside';
import MiniDrawer from '../navbar/navbar';

const Layout = () => {

    return (
        <Grid component={'main'} sx={{
            display: 'flex',
            flexDirection: 'row',
        }}>
            <MiniDrawer />
            <Grid container spacing={2} sx={{
                    marginLeft: '0px'
                }}>
                <Header />
                <Grid container spacing={1} >
                    <Grid item xs={10}>
                        <Outlet />
                    </Grid>
                    <Grid item xs={2}>
                        <Aside />
                    </Grid>
                </Grid>
                <Footer />
            </Grid>

        </Grid>

    );
};
export { Layout };
