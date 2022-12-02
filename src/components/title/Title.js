import React from 'react'
import './Title.css'


function Title(props){
    return (
        <div className='Title'>
            <p className='background-text'>{props.backTitle}</p>
            <div className='under-text'>
                <p className='text'>{props.underTitle}</p>
                <div className='line'></div> 
            </div>
        </div>
    )
}
export default Title
