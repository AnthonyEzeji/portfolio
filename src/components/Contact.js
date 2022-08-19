import React from 'react'
import '../css/Contact.css'
import {Button, Input, TextareaAutosize} from '@mui/material'
import {HashLink} from 'react-router-hash-link'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
function Contact() {
  return (
    <div className = 'contact'>
      <p>Shoot me a message!  All messages sent to my E-mail!</p>
    <div className="contact-form">
    <div className="form-field">
        <h5>Name {'('+'Optional'+')'}</h5>
      <Input  style={{borderBottomRightRadius:20,width:'300px', backgroundColor:'black', color:'white', padding:5}} disableUnderline={true}> </Input>
      </div>
      <div className="form-field">
        <h5>E-mail</h5>
      <Input style={{ borderBottomRightRadius:20,width:'300px', backgroundColor:'black', color:'white', padding:5}} disableUnderline={true}> </Input>
      </div>
      
      <div className="form-field">
        <h5>Message</h5>
        <div><h5 className="">To:</h5><p className="">aezeji00@gmail.com</p></div>
      <TextareaAutosize style={{fontSize:'14px',minHeight:200,maxHeight:200,maxWidth:'298px', minWidth:'298px', backgroundColor:'black', color:'white', padding:5, borderBottomRightRadius:20}}> </TextareaAutosize>
      </div>
    

    </div>
<div style={{display:'flex',flexDirection:'column',alignItems:'center',margin:30}}>
Contact
<ArrowDropDownIcon></ArrowDropDownIcon>
</div>

    </div>
  )
}

export default Contact