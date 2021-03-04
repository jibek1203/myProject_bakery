import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddIcon from '@material-ui/icons/Add';
import Fade from 'react-reveal/Fade';


const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '70%',
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
   
}));

export default function MenuCard({ data, children }) {
    const [cartItem, setCartItem] = useState(JSON.parse(localStorage.getItem('cart')))
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    function addToCart() {
        if (localStorage.getItem('cart')) {
          let arr = JSON.parse(localStorage.getItem('cart')) // []
          arr.push(data)
          localStorage.setItem('cart', JSON.stringify(arr)) // '[]'
        } else {
          let arr = [data]
          localStorage.setItem('cart', JSON.stringify(arr))
        }
      }

    const {
        title,
        price,
        image,
        description,
        id

    } = data

    console.log(image)

    return (
        <div>
            <>
                {data ? (
                    <Fade>
                    <Card  classtitle={classes.root}>
                        <CardHeader
                            avatar={
                                <Avatar style={{backgroundColor: '#42221e', width: '50px', height: '50px'}} aria-label="recipe" classtitle={classes.avatar}>
                                    M
                                </Avatar>
                            }
                            title={title}
                            subheader={price + "$"}
                        />

                        <CardMedia
                            className={classes.media}
                            image={image}
                        />
                        <CardContent>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {description}
                            </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton onClick={addToCart} aria-label="add">
                                <AddIcon />
                            </IconButton>
                        </CardActions>
                        <CardActions>
                            {children}
                        </CardActions>
                    </Card>
                    </Fade>
                ) : (null)}
            </>
        </div>
    );
}