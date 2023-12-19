import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {CssBaseline, Stack} from "@mui/material";
import FunctionSetInterval from "./FunctionSetInterval";
import {Link} from "react-router-dom";


export default function ButtonAppBar() {
    return (
        <Box sx={{flexGrow: 1,}}>
            <AppBar position="static">
                <CssBaseline />
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
                        <Link to={"/"} style={{color: "#FFF"}}> Home</Link>
                    </Typography>
                    <div>
                        <Stack direction="row" spacing={4}>
                            <Typography> <Link to={"/about"} style={{color: "#FFF"}}> About</Link></Typography>
                            <Typography> <Link to={"/contact"} style={{color: "#FFF"}}> Contact Us </Link></Typography>
                            <Typography> <Link to={"/projects"} style={{color: "#FFF"}}> Projects </Link></Typography>
                            <Typography> <Link to={"/location"} style={{color: "#FFF"}}> Location</Link></Typography>
                            {/*<Typography><FunctionSetInterval /></Typography>*/}
                            <FunctionSetInterval />
                        </Stack>
                    </div>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
