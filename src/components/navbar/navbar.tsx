import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import { Button, Typography, useMediaQuery, useTheme } from '@mui/material';

export default function MiniDrawer() {
    const [open, setOpen] = useState(false);
    const [visibility, setVisibility] = useState('hidden');
    const [width, setWidth] = useState('8%');
    const [height, setHeight] = useState('100%');

    
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
    const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

    const dynamicStylesMain = {
        ...matchesSM && {
            display: 'flex',
            flexDirection: 'column',
            minHeight: width,
            minWidth: '100%',
            marginRight: '8px',
            bgcolor: 'white',
        },
        ...matchesMD && {
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100%',
            minWidth: width,
            marginRight: '8px',
            bgcolor: 'white',
        },
    }

    const dynamicStylesSubMain = {
        ...matchesSM && {
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            visibility: visibility,
            height: height,
        },
        ...matchesMD && {
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            visibility: visibility,
        },
    }

    const handleClick = () => {
        open ? setOpen(false) : setOpen(true);
    }

    useEffect(() => {
        open ?
            setWidth('20%') :
            setWidth('8%');

        open ?
            setHeight('100%') :
            setHeight('10px');
    }, [open])

    useEffect(() => {
        open ?
            setVisibility('visible') :
            setVisibility('hidden');
    }, [open])

    return (
        <Box
            component={'nav'}
            sx={{ ...dynamicStylesMain }}>
            <IconButton
                onClick={handleClick}
                sx={{
                    display: 'flex',
                }}>
                <MenuIcon />
            </IconButton>
            <Box sx={{ ...dynamicStylesSubMain }}>
                <Button color='primary' variant="contained">Menu 1</Button>
                <Button color='primary' variant="contained">Menu 2</Button>
                <Button color='primary' variant="contained">Menu 3</Button>
                <Button color='primary' variant="contained">Menu 4</Button>
                <Button color='primary' variant="contained">Menu 5</Button>
                <Button color='primary' variant="contained">Menu 6</Button>
            </Box>
        </Box>
    );
}
