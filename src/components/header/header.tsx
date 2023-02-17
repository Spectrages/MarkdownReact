import { Box, AppBar, Toolbar } from "@mui/material";
import Dropdown from "./dropdown/dropdown";
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar sx={{
            display: 'flex',
            flexDirection: 'row',
            padding: '10px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <HomeIcon onClick={() => navigate(`/`)}/>
            <Dropdown/>
            <Dropdown/>
            <Dropdown/>
            <Dropdown/>
          </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Header;