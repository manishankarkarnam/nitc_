import React from 'react'
import './Title.css'

function Title(props){
    return <div className='titleBlock'>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
    </div>
}

export default Title