import { Box } from "@mui/material";
import MenuPopupState from "./accordion/accordion";
import CustomInputAutocomplete from "./customInput/customInput";
import { useState, useEffect } from "react";
import { getAllCharacters } from "../../api/characterApi";

const Aside = () => {

    const [pers, setPers] = useState([] as any);

    useEffect(() => {
        getAllCharacters()
            .then(response => setPers(response))
            .catch(error => alert(error))
    }, []);

    return (
        <Box
            sx={{
                flexGrow: 1,
                minHeight: '100vh',
                marginTop: '8px',
                gap: '8px',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <MenuPopupState />
            <MenuPopupState />
            <MenuPopupState />
            <CustomInputAutocomplete persons={pers} />
        </Box>
    )
}

export default Aside;