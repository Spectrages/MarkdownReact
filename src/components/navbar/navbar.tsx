import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect, useState } from 'react';
import { Button, Typography } from '@mui/material';

export default function MiniDrawer() {
    const [open, setOpen] = useState(false);
    const [visibility, setVisibility] = useState('hidden');
    const [width, setWidth] = useState('8%');

    const handleClick = () => {
        open ? setOpen(false) : setOpen(true);
    }

    useEffect(() => {
        open ?
            setWidth('20%') :
            setWidth('8%');
    }, [open])

    useEffect(() => {
        open ?
            setVisibility('visible') :
            setVisibility('hidden');
    }, [open])

    return (
        <Box
            component={'nav'}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100%',
                minWidth: width,
                marginRight: '8px',
                bgcolor: '#36374b',
            }}>
            <IconButton
                onClick={handleClick}
                sx={{
                    display: 'flex',
                }}>
                <MenuIcon />
            </IconButton>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                visibility: visibility,
            }}>
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
