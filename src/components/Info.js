import React, { useState } from 'react'
import { BiEnvelope } from 'react-icons/bi'
import { AiFillLinkedin } from 'react-icons/ai'

export default function Info() {
  return (
    <>
      <div className='info-section'>
        <img
          src='https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?size=626&ext=jpg&ga=GA1.2.1292351815.1642550400'
          alt=''
        />
        <h1 className='name'>Doina Rusu</h1>
        <p className='function'>Front End Developer</p>
        <p className='email'>
          <small>doina@gmail.com</small>
        </p>
      </div>
      <div className='btn-container'>
        <button
          className='email-btn'
          onClick={() => (window.location = 'mailto:doinalld@gmail.com')}
        >
          <BiEnvelope />
          Send Email
        </button>
        <button
          className='link-btn'
          onClick={() => window.open('https://www.linkedin.com/', '_blank')}
        >
          {' '}
          <AiFillLinkedin /> LinkedIn
        </button>
      </div>
    </>
  )
}
