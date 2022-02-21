import React from 'react'
import { useRef } from 'react'
import './Contact.css'
import image from '../../img/coding.png'

export default function Contact() {
    const formRef = useRef()
    const handleSubmit = (e) => {
        e.preventDefault()
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
                    <input type='text' placeholder='Name' name='user_name'></input>
                    <input type='text' placeholder='Subject' name='user_subject'></input>
                    <input type='text' placeholder='Email' name='user_email'></input>
                    <textarea rows="5" placeholder='Message' name='message'/>
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
