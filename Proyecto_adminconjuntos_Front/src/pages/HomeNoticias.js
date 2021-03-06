import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import AccountBalanceTwoToneIcon from "@mui/icons-material/AccountBalanceTwoTone";
import AddCardTwoToneIcon from "@mui/icons-material/AddCardTwoTone";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { makeStyles, Snackbar } from "@material-ui/core";
import Add from "./Add";
import MuiAlert from "@material-ui/lab/Alert";
import { useState } from "react";
import { Add as AddIcon } from "@material-ui/icons";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";
import { useNavigate } from "react-router-dom";
//
import {
  Fab,
  Container,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Tooltip,
  Radio,
  RadioGroup,
  TextField,
} from "@material-ui/core";
//
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CreditScoreTwoToneIcon from "@mui/icons-material/CreditScoreTwoTone";

// Home

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100vw",
      height: "100vh",
    },
  },
  form: {
    padding: theme.spacing(2),
  },
  item: {
    marginBottom: theme.spacing(3),
  },
}));

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create("margin", {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function HomeNoticias() {
  const classes = useStyles();
  const [open2, setOpen2] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    console.log("creado");
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleLogout = () => {
    window.localStorage.removeItem("jwtToken");
    navigate("/");
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const bull = (
    <Box
      component="span"
      sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      ???
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography textAlign="center" variant="h6" noWrap component="div">
            Noticias
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {["Noticias", "Contaduria", "Propietarios"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <AddCardTwoToneIcon />
                ) : (
                  <AccountBalanceTwoToneIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          <Button onClick={handleLogout}>Cerrar sesion</Button>
        </List>
        {/* inicio modal agregar Noticias */}
        <Tooltip title="Add" aria-label="add" onClick={() => setOpen2(true)}>
          <Fab color="primary" className={classes.fab}>
            <AddIcon />
          </Fab>
        </Tooltip>
        <Modal open={open2}>
          <Container className={classes.container}>
            <form className={classes.form} autoComplete="off">
              <div className={classes.item}>
                <h5 style={{ textAlign: "center" }}>AGREGAR NOTICIA</h5>
                <TextField
                  id="standard-basic"
                  label="Title"
                  size="small"
                  style={{ width: "100%" }}
                />
              </div>
              <div className={classes.item}>
                <TextField
                  id="outlined-multiline-static"
                  multiline
                  rows={4}
                  variant="outlined"
                  label="Description"
                  size="small"
                  style={{ width: "100%" }}
                />
              </div>

              <div className={classes.item}>
                <Button
                  style={{ align: "center" }}
                  variant="outlined"
                  color="primary"
                  style={{ marginRight: 20 }}
                  onClick={() => setOpenAlert(true)}
                >
                  Publicar
                </Button>
                <Button
                  style={{ alignItems: "center" }}
                  variant="outlined"
                  color="secondary"
                  onClick={() => setOpen2(false)}
                >
                  Cancelar
                </Button>
                <Snackbar
                  open={openAlert}
                  autoHideDuration={4000}
                  onClose={handleClose}
                  anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                >
                  <Alert onClose={handleClose} severity="success">
                    This is a success message!
                  </Alert>
                </Snackbar>
              </div>
            </form>
          </Container>
        </Modal>
        {/* cartas */}
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Card sx={{ minWidth: 275 }}>
          <ListItemIcon>
            <div>
              <Button onClick={() => setOpen2(true)}>
                <CreditScoreTwoToneIcon />
              </Button>
              <Button onClick={() => setOpen2(true)}>
                <DeleteForeverTwoToneIcon />
              </Button>
            </div>
          </ListItemIcon>

          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              07/12/2021 2:15 pm
            </Typography>
            <Typography variant="h5" component="div">
              Friendly Pets
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              participa en el show de mascotas
            </Typography>
            <Typography variant="body2">
              Reglas del Juego: 1. Tu mascota debe estar correctamente
              deparasitada y vacunada Si vas a un lugar p??blico donde admiten
              mascotas, deber??s asegurarte de que la tuya est?? sin pulgas, ni
              garrapatas y, adem??s, tiene al d??a todas sus vacunas. No solo
              evitar??s peg??rselas a otros animales, sino que tu mascota tampoco
              se contagiar?? en caso de que alg??n animal presente no cumpla las
              normas. 2. Lleva su cartilla Esta es una de las cosas de las que
              siempre nos olvidamos. Es normal que cuando sacas de paseo a tu
              perro no te metas su cartilla en el bolsillo, sin embargo, en
              algunos sitios como los hoteles pet-friendly, te la pedir??n para
              comprobar que tiene todas sus revisiones al d??a.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Main>
      {/* segunda accion */}
      <Main open={open}>
        <DrawerHeader />
        <Card sx={{ minWidth: 275 }}>
          <ListItemIcon>
            <div>
              <Button onClick={() => setOpen2(true)}>
                <CreditScoreTwoToneIcon />
              </Button>
              <Button onClick={() => setOpen2(true)}>
                <DeleteForeverTwoToneIcon />
              </Button>
            </div>
          </ListItemIcon>

          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              07/12/2021 2:15 pm
            </Typography>
            <Typography variant="h5" component="div">
              Friendly Pets
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              participa en el show de mascotas
            </Typography>
            <Typography variant="body2">
              Reglas del Juego: 1. Tu mascota debe estar correctamente
              deparasitada y vacunada Si vas a un lugar p??blico donde admiten
              mascotas, deber??s asegurarte de que la tuya est?? sin pulgas, ni
              garrapatas y, adem??s, tiene al d??a todas sus vacunas. No solo
              evitar??s peg??rselas a otros animales, sino que tu mascota tampoco
              se contagiar?? en caso de que alg??n animal presente no cumpla las
              normas. 2. Lleva su cartilla Esta es una de las cosas de las que
              siempre nos olvidamos. Es normal que cuando sacas de paseo a tu
              perro no te metas su cartilla en el bolsillo, sin embargo, en
              algunos sitios como los hoteles pet-friendly, te la pedir??n para
              comprobar que tiene todas sus revisiones al d??a.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions></CardActions>
        </Card>
      </Main>
    </Box>
  );
}
