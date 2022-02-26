import React, { useState } from 'react'
import { useRef, useContext } from 'react'
import './Contact.css'
import image from '../../img/coding.png'
import emailjs from "emailjs-com";
import { ThemeContext } from "../../context";

export default function Contact() {
    const formRef = useRef()
    const [done, setDone] = useState(false)
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault()
        emailjs
        .sendForm('service_688l357', 'template_ivarsko', formRef.current, 'user_WhRehiNxt0YIvxEMwyoEO')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    }

  return (
    <div className='c'>
        <div className='c-bg'></div>
        <div className='c-wrapper'>
            <div className='c-left'>
                <h1 className='c-title'>Lets discuss the project</h1>
                <div className='c-info'>
                    <div className='c-info-item'>
                        <img className='c-icon' src={image} alt=''></img>
                        Email
                    </div>
                    <div className='c-info-item'>
                        <img className='c-icon' src={image} alt=''></img>
                        Address
                    </div>
                    <div className='c-info-item'>
                        <img className='c-icon' src={image} alt=''></img>
                        Phone Number
                    </div>
                </div>
            </div>
            <div className='c-right'>
                <p className='c-desc'>
                    <b>What's your story?</b>
                    Here is the story
                </p>
                <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                    <button>Submit</button>
                    {done && "Thank you!"}
                </form>
            </div>
        </div>
    </div>
  )
}
