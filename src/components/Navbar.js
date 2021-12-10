import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function DenseAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div">
                        Trivia Quiz App
                    </Typography>
                    <Typography ml={112} variant="h6" color="inherit" component="div">
                        Home
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

