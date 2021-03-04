import React, { useContext, useState } from 'react';
import {menuContext} from "../../../context/MenuContext";
import { Button, makeStyles, TextField, Typography } from '@material-ui/core';
import {Field,Form, Formik} from 'formik';
import * as Yup from 'yup'
import BasicLayout from './Form'


const useStyles = makeStyles({
    form: {
        width: '100%',
        maxWidth: 700,
        padding: 30,
        borderRadius: 15,
        margin: '0 auto',
        height: "90%",
        opacity: "0.8",
        backgroundColor: "white",
        filter:  "brightness(100%)",
    },
    input: {
        marginBottom: 20,
        color: "white !important",
    }
})


export default function AddMenu() {

    const [inpTitle,setInpTitle] = useState('');
    const [inpDesc,setInpDesc] = useState('');
    const [inpPrice,setInpPrice] = useState('');
    const [inpImg,setInpImg] = useState('');

    const {addMenu} = useContext(menuContext)


    function handleClick(){
        let newMenu ={
            title: inpTitle,
            description: inpDesc,
            price: inpPrice,
            image: inpImg
        }
        addMenu(newMenu)
        setInpTitle('')
        setInpDesc('')
        setInpPrice('')
        setInpImg('')
    }

    const classes = useStyles();

    const intialValues = {
        title: "",
        image: "",
        price: 0,
        description: ""
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required('Required field!').max(255, 'It must be shorter title!'),
        image: Yup.string().required('Required field!'),
        price: Yup.string().required('Required field!'),
        description: Yup.string().required('It is required to fill!'),
    })

    const onSubmit = (values, { resetForm }) => {
        AddMenu({
            ...values,
            images: [values.image]
        })
    }

    return (
        <div style={{
            background: "url(https://pbs.twimg.com/media/D_GGul_WwAEXsge.jpg:large)" , 
            backgroundSize: "cover !important",
            backgroundPosition: "center",
            width: "100%"
            }}>

        <BasicLayout>
            <Formik
                initialValues={intialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >

                {({

                  }) => (
                    <Form className={classes.form}>
                        <Typography variant="h6" style={{ textAlign: 'center', marginBottom: 15}}>
                            Add new product
                        </Typography>
                        
                        <Field
                            title="title"
                            fullWidth
                            label="Title"
                            variant="outlined"
                            className={classes.input}
                            value={inpTitle}
                            onChange = {(e)=>setInpTitle(e.target.value)}
                            as={TextField}
                        />
                        <Field
                            name="price"
                            fullWidth
                            label="Price"
                            variant="outlined"
                            className={classes.input}
                            value={inpPrice} onChange = {(e)=>setInpPrice(e.target.value)}
                            as={TextField}
                        />

                        <Field
                            name="description"
                            fullWidth
                            label="Description"
                            variant="outlined"
                            as={TextField}
                            className={classes.input}
                            value={inpDesc}
                            onChange = {(e)=>setInpDesc(e.target.value)}
                            multiline
                            rows={2}
                            color="inherit"
                        />

                        <Field
                            name="image"
                            fullWidth
                            label="Image"
                            className={classes.input}
                            value={inpImg} onChange = {(e)=>setInpImg(e.target.value)}
                            variant="outlined"
                            as={TextField}
                        />

                        <Button onClick ={handleClick} type="submit" color="primary" variant="contained">
                            Add to Menu
                        </Button>
                    </Form>
                )}
            </Formik>
        </BasicLayout>
        </div>


    )
}
                    