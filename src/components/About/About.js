import React, { useState } from 'react'
import CountUp from 'react-countup';
import './about.css'

export const About = () => {
    let year = new Date().getFullYear();
    return (
        <div className='container'>
            <div className='about-body'>
                <div className='about-text-1'>
                    <p className='title-text'>I'm <span>CHHUT Pech</span>, a Web Developer</p>
                    <p className='normal-text'>I help you build brand for your business at an affordable price.
                        Thousands of clients have procured exceptional results while working with our
                        dedicated team. when an unknown printer took a galley of type and scrambled it
                        to make a type specimen book.
                    </p>
                    <p className='normal-text'>Delivering work within time and budget which meets client’s requirements is
                        our moto. Lorem Ipsum has been the industry's standard dummy text ever when
                        an unknown printer took a galley. Lorem Ipsum has been the industry's standard
                        dummy text ever when an unknown printer took a galley.
                    </p>
                </div>
                <div className='about-text-2'>
                    <p><span>Name:</span>CHHUT Pech</p>
                    <p><span>Age:</span>{year-2000}</p>
                    <p><span>Email:</span>chhutpich4@gmail.com</p>
                    <p><span>Phone:</span>(+855)96 414 2973</p>
                    <p><span>From:</span>Phnom Penh,Cambodia</p>
                    <button className='button'>
                        <a href="./" download="CHHUT_Pech_CV.pdf">Download CV</a>
                    </button>
                </div>
            </div>
            <div className='p-c-e-a'>
                <div className='p-c'>
                    <div>
                        <CountUp end={210} duration={ 5} />+
                        <br/>
                        <p>Years Experiance</p>
                    </div>
                    <div>
                        <CountUp end={280} duration={ 5} />+
                        <br/>
                        <p>Happy Clients</p>
                    </div>
                </div>
                <div className='e-a'>
                    <div>
                        <CountUp end={210} duration={ 5} />+
                        <br/>
                        <p>Projects Done</p>
                    </div>
                    <div>
                        <CountUp end={280} duration={ 5} />+
                        <br/>
                        <p>Get Awards</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
