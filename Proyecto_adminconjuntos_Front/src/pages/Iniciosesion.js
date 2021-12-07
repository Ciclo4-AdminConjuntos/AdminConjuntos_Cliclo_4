

// //import { useState } from "react";
// import logoConjunto from "../img/logo_transparent.png";
// import "../App.css";
// import Bar from '../components/Navbar/Bar';
// import Login from '../components/Login/Login';

// axios.defaults.withCredentials = true;

import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types'
import { useState } from "react";
import axios from "axios";
import { browserHistory } from 'react-router-dom';

// import fondoLogin from '../img/'


const useStyles = makeStyles((theme) => ({
  // icono usuario  (paper)
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  // margen y color del icono(avatar)
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,

  },
  small: {
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),

  },
  submit: {
    margin: theme.spacing(5, 0, 2),
  },
}));


const Iniciosesion = () => {
  
  const [cedula, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [successful, setSuccessfull] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorPassword("");
    setErrorEmail("");
    setSuccessfull("");
    console.log(cedula);
    console.log(password);
    axios
        .post(`http://localhost:2000/api/login`,{ cedula, password })
        .then(res => {
          localStorage.setItem ('jwtToken',res.data.token)
          console.log(res.data)
          this.props.browserHistory.push("/noticias")
          .catch(err =>{
            console.error(err)
            this.errors.push(err)
            console.log(this.errors)
          })
        })
  };




  const classes = useStyles()
  
  //copyRight
  function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" to="/developers">
          Administracion de Condominios
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }   
 
  
    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          
          <Typography component="h1" variant="h4">
            Ingresar
          </Typography>
          <form className={classes.form}  onSubmit={handleSubmit} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value="username"
              id="username"
              label="Ingrese Cedula"
              name="username"
              autoComplete="username"
              autoFocus
              value={cedula}
            onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              value="password"
              name="password"
              label="Contraseña"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
            onChange={(e) => setPassword(e.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Recordar sesión"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
             
            >
              Ingresar
            </Button>
            <Grid container>
              <Grid item xs>
                <Link to="/" variant="body2">
                  Olvido la contraseña?
                </Link>
              </Grid>
              <Grid item>
                <Link to="/register" variant="body2">
                  {"¿Aún no tienes cuenta? Regístrate"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    );
  
  
  }
  
export default Iniciosesion;