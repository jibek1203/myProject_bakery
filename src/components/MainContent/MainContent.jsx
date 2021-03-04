import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';
import { IconButton } from '@material-ui/core';
import './MainContent.css';
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    root2: {
        marginTop: "-5px",
        minHeight: '100vh',
        backgroundImage: `url('https://www.zastavki.com/pictures/2560x1600/2018Food_A_cup_of_coffee_on_the_table_with_coffee_beans__star_anise__cinnamon_croissant_128253_19.jpg')`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    root3: {
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Nunito',
        color: '#ecece2',
        fontSize: '25rem',
        paddingTop: '100px'
      },
      goDown: {
        color: '#ecece2',
        fontSize: '50px',
        display: 'flex',
        justifyContent: 'center',
        margin: '200px 10px',
      },
      explore: {
        color: 'white',
        fontFamily: 'Nunito',
        fontSize: '20px',
      }
    }));

    export default function MainContent() {
        const classes = useStyles();
    return (
        <>
        <div className={classes.root2}>
          <div  className={classes.root3}>
          <Fade top cascade>
            <h1>Michelle</h1>

          </Fade>
          </div>
          <Scroll to="about" smooth={true} style={{display: 'flex', flexDirection: 'column'}}>
            <IconButton>
              <p className={classes.explore}>Explore more</p>
              <ExpandMoreIcon className={classes.goDown}/>
            </IconButton>
          </Scroll>
        
        </div>
        </>
    );
    }




