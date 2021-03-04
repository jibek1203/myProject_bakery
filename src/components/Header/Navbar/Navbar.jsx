import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SortIcon from '@material-ui/icons/Sort';
import { Link, useHistory } from 'react-router-dom';
import { API_LOG } from '../../../helpers/helpers';
import axios from 'axios'
import {  Nav,  Modal,  ModalBody, Form } from 'react-bootstrap';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    maxWidth: "1200px",
    width: "100%"
  },
  navbar: {
    backgroundColor: '#ecece2',
    // opacity: '0.1',
    color: 'white',
  },
  nav: {
    maxWidth: '1200px',
    width: '100%',
    backgroundColor: 'transparent',
    color: 'black',
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuButton: {
    marginRight: theme.spacing(6),
  },
  title: {
    flexGrow: 3,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  //

  let history = useHistory();

  let [users, setUsers] = useState([]);
  let [user, setUser] = useState({});
  let [curr, setCurr] = useState(JSON.parse(localStorage.getItem('currentUser')) ? JSON.parse(localStorage.getItem('currentUser')) : 'asd');

  useEffect(() => {
    axios.get(API_LOG).then(res => {
      setUsers(res.data);
    })
  }, []);


  function handleInps(e) {
    let obj = {
      ...user,
      [e.target.name]: e.target.value
    };
    setUser(obj);
  }

  function login() {
    let check = false;
    let currentUser = {};
    users.forEach((p) => {
      if (p.account === user.account && p.password === user.password) {
        check = true;
        currentUser = p;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
      }
    });
    if (check) {
      history.push('/')
    } else {
      alert('No such user');
    }
  }

  const [show, setShow] = useState(false);
  const handleCloseShow = () => setShow(false);
  const handleShow = () => setShow(true);
  //

  return (

    <div className={classes.root}>
      <AppBar className={classes.navbar} position="fixed">
        {/* <div className={classes.navbar}> */}
          <Toolbar className={classes.nav}>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <SortIcon />
            </IconButton>
            <Link to="/home" style={{ textDecoration: "none", color: 'black' }}>

              <Typography variant="h8" className={classes.title}>
                Home
          </Typography>
            </Link>
            <Link to="/list" style={{ textDecoration: "none", color: 'black' }}>
              <Typography variant="h8" className={classes.title}>
                Menu
          </Typography>
            </Link>
            <Link to="/cartbag" style={{ textDecoration: "none", color: 'black' }}>
              <ShoppingBasketIcon/>
            </Link>
            {auth && (
              <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={handleClose}
                >
                 
                  {
                    curr.account ? (

                      <Nav.Link style={{ color: "black !important" }} onClick={() => localStorage.clear()}><Link style={{ color: "black !important" }} onClick={() => window.location.reload()}>LOGOUT: {curr.account.toUpperCase()}</Link></Nav.Link>
                    ) : (
                        <Nav.Link style={{ color: "black !important" }} ><Link style={{ color: "black !important", marginLeft: "10px" }} onClick={handleShow}>  
                          <MenuItem onClick={handleClose}>Admin</MenuItem>
                        </Link></Nav.Link>
                      )
                  }
                  <Modal style={{ backgroundColor: "black!important", opacity: "1", marginTop: '75px' }} show={show} onHide={handleCloseShow}>
           
                    <ModalBody>
                      <Form style={{color: 'red'}}>
                        <Form.Group controlId='fromBasicEmail'>
                          <Form.Label>Write your email, please</Form.Label>
                          <Form.Control onChange={handleInps} type='text' name={'account'} placeholder='Enter email' />
                          <Form.Text className='text-muted'>All accepted informations are confidential</Form.Text>
                        </Form.Group>
                        <Form.Group controlId='fromBasicPassword'>
                          <Form.Label>Write your password, please</Form.Label>
                          <Form.Control onChange={handleInps} name={'password'} type='password' placeholder='Enter password' />
                        </Form.Group>
                        <div style={{display: 'flex', justifyContent: 'center', color: '#65653a'}}>

                        <button onClick={login}>Login</button>
                        </div>
                      </Form>
                    </ModalBody>
                  </Modal>
                </Menu>
              </div>
            )}
          </Toolbar>
      </AppBar>
    </div>
  );
}