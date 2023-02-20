import { Box, useMediaQuery, useTheme } from "@mui/material";
import MenuPopupState from "./accordion/accordion";
import CustomInputAutocomplete from "./customInput/customInput";
import { useState, useEffect } from "react";
import { getAllCharacters } from "../../api/characterApi";

const Aside = () => {

    const [pers, setPers] = useState([] as any);
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

    const dynamicStylesMain = {
        ...matchesSM && {
            flexGrow: 1,
            minHeight: '0',
            marginTop: '8px',
            gap: '8px',
            display: 'flex',
            flexDirection: 'column',
        },
        ...matchesMD && {
            flexGrow: 1,
            minHeight: '100vh',
            marginTop: '8px',
            gap: '8px',
            display: 'flex',
            flexDirection: 'column',
        },
    }

    useEffect(() => {
        getAllCharacters()
            .then(response => setPers(response))
            .catch(error => alert(error))
    }, []);

    return (
        <Box
            sx={{ ...dynamicStylesMain }}
        >
            <MenuPopupState />
            <MenuPopupState />
            <MenuPopupState />
            <CustomInputAutocomplete persons={pers} />
        </Box>
    )
}

export default Aside;