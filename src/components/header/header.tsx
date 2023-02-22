import Dropdown from "./dropdown/dropdown";
import HomeIcon from '@mui/icons-material/Home';
import LoginIcon from '@mui/icons-material/Login';
import { useNavigate } from "react-router-dom";
import { Box, AppBar, Toolbar, useMediaQuery, useTheme } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));
  const matchesMD = useMediaQuery(theme.breakpoints.up('md'));

  const dynamicStylesMain = {
    ...matchesSM && {
      display: 'flex',
      flexDirection: 'column',
      padding: '10px',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    ...matchesMD && {
      display: 'flex',
      flexDirection: 'row',
      padding: '10px',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  }
  return (
    <Box
      component={'header'}
      sx={{ flexGrow: 1 }}
    >
      <AppBar position="static">
        <Toolbar sx={{
          ...dynamicStylesMain
        }}>
          <LoginIcon onClick={() => navigate(`/auth`)} />
          <HomeIcon onClick={() => navigate(`/`)} />
          <Dropdown num={1} />
          <Dropdown num={2} />
          <Dropdown num={3} />
          <Dropdown num={4} />
        </Toolbar>
      </AppBar>
    </Box >
  )
}

export default Header;