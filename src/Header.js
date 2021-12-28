import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';


const Header = () => {
    return(
        <div className="header">
            <AppBar position="static">
                <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
                    Local Photo App
                </Typography>
            </AppBar>
        </div>
    )
}

export default Header;