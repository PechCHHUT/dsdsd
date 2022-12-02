import React from 'react'
import './Home.css'
import Typed from 'react-typed';

export const Home = () => {
  return (
    <div className='home'>
        <div>
            <h3>WELCOME</h3>
            <Typed
                className='text-animation'
                strings={[
                  "I'm CHHUT Pech.",
                  "I'm a Web Deleveloper.",
                  "I'm a Mobile Deleveloper.",
                  "I'm a Designer.",
                  "I'm a Freelancer.",
                ]}
                typeSpeed={200}
                backSpeed={50}
                loop
            />
            <p>based in Phnom Penh, Cambodia.</p>
            <button type="button" className='button'>Hire Me</button>
        </div>
    </div>
  )
}
