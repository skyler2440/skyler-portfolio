import React from 'react'
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

import '../sass/ContactForm.scss'
const ContactFrm = () => {
    return(
        <>
        <Form className = "ui form">
            <div className = "field">
                {/* {touched.username && errors.username &&(<p className = "error">{errors.username}</p>)} */}
                <Field type = "email" name = "email" placeholder = "Email" />
            </div>
            <div className = "field">
                {/* {touched.password && errors.password &&(<p className = "error">{errors.password}</p>)} */}
                <Field type = "text" name = "name" placeholder = "Name" />
            </div>
            <div className = "field">
                {/* {touched.password && errors.password &&(<p className = "error">{errors.password}</p>)} */}
                <Field component="textarea" type = "text" name = "message" placeholder = "Message" />
            </div>
            <button className = "ui button" type="submit">Submit Contact</button>
        </Form>

        </>
    )
}
const ContactForm = withFormik({
    mapPropsToValues({username, password}) {
        return{
            username: username || "",
            password: password || ""
        };
    },
    validationSchema: Yup.object().shape({
        username: Yup.string().required("Username is Required"),
        password: Yup.string().required("Password is Required")
    }),

    handleSubmit: (values, formikBag) => {
    formikBag.props.doSignIn(values).then(()=> {
        if (localStorage.getItem("token"))
        {
            formikBag.props.history.push("/blog")
            // window.location.reload()
        }
    })
      },
    
      displayName: 'BasicForm',
    
      })(ContactFrm);
export default ContactForm