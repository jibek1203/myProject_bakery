import React, { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { IconButton, makeStyles, TextField, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import MenuCard from './MenuCard'
import { menuContext } from "../../../context/MenuContext";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


const MenuList = () => {
    const history = useHistory()

    const useStyles = makeStyles((theme) => ({
        container: {
            width: '100%',
            maxWidth: "1080px",
            margin: '0 auto'
        }
    }))

    const { menu, getMenu, delMenu, editMenu } = useContext(menuContext);
    const [page, setPage] = useState(1);
    const [ searchValue, setSearchValue ] = useState('')
    const [ filter, setFilter ] = useState('')

    let [adminView, setAdminView] = useState(false)
    

    const search = new URLSearchParams(history.location.search);
    
    useEffect(() => {
        setPage(+search.get("page") || 1)
      }, [history.location.search])
      
    useEffect(() => {
        let test = JSON.parse(localStorage.getItem('currentUser'));
        if (test && test.Admin) {
            setAdminView(true);
        }
    }, [])

    const classes = useStyles()

    useEffect(() => {
        getMenu('')
    }, [])

    useEffect(() => {   //он следит за состояниями за page searchValue, после рендеринга срабатывает
        if(filter) {
            getMenu(`?_limit=4&_page=${page}&q=${searchValue}&type=${filter}`) //url
        }else {
            getMenu(`?_limit=4&_page=${page}&q=${searchValue}`) //url
            // console.log('THIS IS SEARCH VALUE', searchValue)
        }
    }, [page, searchValue, filter])  //зависимость useEffect

    return (
        <div>
            <TextField
                fullWidth={true}
                variant={'outlined'}
                style={{ maxWidth: '50%',  margin: '25px auto', display: 'block', backgroundColor: '#ebebba'}}
                placeholder ="Search product"
                value={searchValue} //атрибут value
                onChange={(e) => {   //принимает событие
                    e.preventDefault();  //
                    setSearchValue(e.target.value)   //значение этого события
                }}
                />

            <Grid container maxWidth="lg" spacing={2} className={classes.container} >

                {
                    adminView ? (

                        menu.map(item => (
                            <Grid item xs={12} sm={6} lg={6} key={item.id}>

                                <MenuCard data={item}>
                                    <IconButton
                                        onClick={() => delMenu(item.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                    <Link to={`/edit/${item.id}`}>
                                        <IconButton
                                            onClick={() => editMenu(item.id)}
                                        >
                                            <EditIcon />
                                        </IconButton>
                                    </Link>

                                    <Link to={`/view`}>
                                    </Link>

                                </MenuCard>
                            </Grid>
                        ))
                    ) : ((
                        menu.map(item => (
                            <Grid item xs={12} sm={6} lg={6} key={item.id}>

                                <MenuCard data={item}>
                                    
                                </MenuCard>
                            </Grid>
                    ))
                    ))
                }
            </Grid >
        </div >
    )
}

export default MenuList;