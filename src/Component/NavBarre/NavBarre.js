import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import { fade, makeStyles } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import { Form, Navbar, Nav, FormControl } from "react-bootstrap";
import {Link} from "react-router-dom"; 



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function SearchAppBar({handleSearch, setRate}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: "grey" }}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Movie-App
          <Link to ={'/'}>
          <span style={{color: "white",fontSize:"60%", marginLeft :"2%" }} >Home</span>
          </Link>

          </Typography>
          
          <Box
            className="ratingSearch"
            component="fieldset"
            mb={3}
            borderColor="transparent"
          >
            <Typography component="legend"> </Typography>
            <Rating
              name="simple-controlled"
              onChange={(event, ratingValSearch) => {setRate(ratingValSearch)}}
            />
          </Box>

          <div className={classes.search} style={{ marginRight: "6%" }}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <Form inline style={{marginLeft: "24%"}}>
          <FormControl 
            type="text"
            placeholder="Search"
            className="mr-sm-2"
            onChange={(e) => handleSearch(e.target.value)}
          />
        </Form>
          </div>
        </Toolbar>
      </AppBar>
    </div>
    
  );
}

