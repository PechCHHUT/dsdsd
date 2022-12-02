import React from 'react'
import './Resume.css'

export const Resume = () => {
  return (
    <div>
        <div className='Resume container'>
            <div className='education'>
                <p className='title-text'>My Education</p>
                <div>
                    <button className='year' >2020-Present</button>
                    <p className='title-Resume'>Computer Science</p>
                    <p className='where'>Royal University of Phnom Penh</p>
                    <p className='des normal-text'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
                <div>
                    <button className='year' >2017-2020</button>
                    <p className='title-Resume'>High School</p>
                    <p className='where'>Banoy High School</p>
                    <p className='des normal-text'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
                <div>
                    <button className='year' >2014-2017</button>
                    <p className='title-Resume'>Secondary School</p>
                    <p className='where'>HonSen Romlok Secondary School</p>
                    <p className='des normal-text'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
            </div>
            <div className='expereint'>
                <p className='title-text'>My Experience</p>
                <div>
                    <button className='year' >2022-Present</button>
                    <p className='title-Resume'>Web Developer</p>
                    <p className='where'>Zvalley</p>
                    <p className='des normal-text'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
                <div>
                    <button className='year' >2021-2022</button>
                    <p className='title-Resume'>Teacher Computer</p>
                    <p className='where'>Sovannaphumi School</p>
                    <p className='des normal-text'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
                <div>
                    <button className='year' >2020-2021</button>
                    <p className='title-Resume'>Order Service</p>
                    <p className='where'>Leisure by the lake Resorts</p>
                    <p className='des normal-text'>Lisque persius interesset his et, in quot quidam persequeris vim, ad mea essent possim iriure.</p>
                </div>
            </div>
        </div>
        <div className='container my-skill'>
            <p className='title-text'>My Skills</p>
            <div className='skill'>
                <div className='skill-graph'>
                    <div>
                        <div className='skill-detail'>
                            <p className='subjact'>Web Design</p>
                            <p> 80%</p>
                        </div>
                        <div className='main-graph'>
                            <div style={{width: "80%"}}  className='graph'></div>
                        </div>
                    </div>
                    <div>
                        <div className='skill-detail'>
                            <p className='subjact'>HTML/CSS</p>
                            <p> 95%</p>
                        </div>
                        <div className='main-graph'>
                            <div style={{width: "95%"}}  className='graph'></div>
                        </div>
                    </div>
                    <div>
                        <div className='skill-detail'>
                            <p className='subjact'>Nuxt JS</p>
                            <p> 90%</p>
                        </div>
                        <div className='main-graph'>
                            <div style={{width: "90%"}}  className='graph'></div>
                        </div>
                    </div>
                </div>
                <div className='skill-graph'>
                    <div>
                        <div className='skill-detail'>
                            <p className='subjact'>JavaScript</p>
                            <p> 90%</p>
                        </div>
                        <div className='main-graph'>
                            <div style={{width: "90%"}}  className='graph'></div>
                        </div>
                    </div>
                    <div>
                        <div className='skill-detail'>
                            <p className='subjact'>React JS</p>
                            <p> 70%</p>
                        </div>
                        <div className='main-graph'>
                            <div style={{width: "70%"}}  className='graph'></div>
                        </div>
                    </div>
                    <div>
                        <div className='skill-detail'>
                            <p className='subjact'>Vue JS</p>
                            <p> 75%</p>
                        </div>
                        <div className='main-graph'>
                            <div style={{width: "75%"}}  className='graph'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{display:"flex",justifyContent:"center"}}>
                <button className='button'>
                    <a href="https://drive.google.com/file/d/1v8uYP3eCtkN7PAr89ZMzdvr_oPie4etq/view?usp=sharing">Download CV</a>
                    <svg width="18" height="18" viewBox="0 0 24 17">
                        <path fill="currentColor" d="M6 20q-.825 0-1.412-.587Q4 18.825 4 18v-3h2v3h12v-3h2v3q0 .825-.587 1.413Q18.825 20 18 20Zm6-4l-5-5l1.4-1.45l2.6 2.6V4h2v8.15l2.6-2.6L17 11Z"/>
                    </svg>
                </button>
            </div>
        </div>
    </div>
  )
}