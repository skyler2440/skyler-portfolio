import React, {useState} from 'react'
import {withFormik, Form, Field} from 'formik';
import * as Yup from 'yup';

import '../sass/ContactForm.scss'

// const ContactForm = () => {
//     const [values, setValues] = useState({});

//     const encode = (data) => {
//         return Object.keys(data)
//             .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//             .join("&");
//       }

//     const handleChange = e => {
//         e.persist();
//         setValues(values => ({...values, [e.target.name]: e.target.value}));
//     };

//     const handleSubmit = e => {
//         fetch("/", {
//           method: "POST",
//           headers: { "Content-Type": "application/x-www-form-urlencoded" },
//           body: encode({ "form-name": "contact", ...values })
//         })
//           .then(() => alert("Success!"))
//           .catch(error => alert(error));
  
//         e.preventDefault();
//       };
//       console.log(encode({ "form-name": "contact", ...values }))
//     return (
//         <div className="contactFormBox">
//             <form name='contact' method='post' className="contactForm ui form" onSubmit={handleSubmit}>
//             {/* <input type="hidden" name="form-name" value="contact" /> */}
//                 <div className="inputBox">
//                     <label htmlFor="name" className='hidden'>
//                     <input className='show' type="text" name='name' placeholder='Name' value={values.name} onChange={handleChange}/>
//                     </label>
//                 </div>
//                 <div className="inputBox">
//                     <label htmlFor="email" className='hidden'>
//                     <input type="text" name='email' placeholder='Email' value={values.email} onChange={handleChange}/>
//                     </label>
//                 </div>
//                 <div className="inputBox">
//                     <label htmlFor="message" className='hidden'>
//                     <textarea name='message' placeholder='Message' value={values.message} onChange={handleChange}/>
//                     </label>
//                 </div>
//                 <button type='submit'>Contact Me</button>
//             </form>
//         </div>
//     )
// }
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }
class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { name: "", email: "", message: "" };
    }

    /* Here’s the juicy bit for posting the form submission */

    handleSubmit = e => {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...this.state })
    })
    console.log("TCL: ContactForm -> ...this.state", this.state)
    .then(() => alert("Success!"))
    .catch(error => alert(error));
    

      e.preventDefault();
    };
    
    handleChange = e => this.setState({ [e.target.name]: e.target.value });
    
    render() {
        const { name, email, message } = this.state;
        return (
        <form onSubmit={this.handleSubmit}>
          <p>
            <input type="text" name="name" value={name} onChange={this.handleChange} />
          </p>
          <p>
             <input type="email" name="email" value={email} onChange={this.handleChange} />
          </p>
          <p>
            <textarea name="message" value={message} onChange={this.handleChange} />
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      );
    }
  }

export default ContactForm

// const ContactFrm = () => {
//     return(
//         <>
//         <Form className = "ui form" data-netlify='true'>
//             <div className = "field">
//                 {/* {touched.username && errors.username &&(<p className = "error">{errors.username}</p>)} */}
//                 <Field type = "email" name = "email" placeholder = "Email" />
//             </div>
//             <div className = "field">
//                 {/* {touched.password && errors.password &&(<p className = "error">{errors.password}</p>)} */}
//                 <Field type = "text" name = "name" placeholder = "Name" />
//             </div>
//             <div className = "field">
//                 {/* {touched.password && errors.password &&(<p className = "error">{errors.password}</p>)} */}
//                 <Field component="textarea" type = "text" name = "message" placeholder = "Message" />
//             </div>
//             <button className = "ui button" type="submit">Submit Contact</button>
//         </Form>

//         </>
//     )
// }
// const ContactForm = withFormik({
//     mapPropsToValues({username, password}) {
//         return{
//             username: username || "",
//             password: password || ""
//         };
//     },
//     validationSchema: Yup.object().shape({
//         username: Yup.string().required("Username is Required"),
//         password: Yup.string().required("Password is Required")
//     }),

//     handleSubmit: (values, formikBag) => {
//     formikBag.props.doSignIn(values).then(()=> {
//         if (localStorage.getItem("token"))
//         {
//             formikBag.props.history.push("/blog")
//             // window.location.reload()
//         }
//     })
//       },
    
//       displayName: 'BasicForm',
    
//       })(ContactFrm);
// export default ContactForm