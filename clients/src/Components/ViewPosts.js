import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
//import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

class ViewPosts extends Component {
    render () {
        return <>
            <Container component="main" maxWidth="xl">
                <Box>
                    <Typography component="h1" variant="h5">Home</Typography>
                </Box>
            </Container>
        </>
    }
}

export default ViewPosts;