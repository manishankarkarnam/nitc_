import React from 'react'
import './Footer.css'

function Footer(){
    return <div className="footer">
        <hr />
        <div className='footerInfo'>
            <div className="leftside">
                <h3>© 2024 Educity. All rights reserved.</h3>
            </div>
            <div className="rightside">
                <h3>Terms of Service</h3>
                <h3>Privacy Policy</h3>
            </div>
        </div>
    </div>
}

export default Footer