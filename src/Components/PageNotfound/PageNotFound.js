import React from 'react';
import "./PageNotFound.scss";
import pnf from '../../Images/pnf.jpg'

function PageNotFound() {
    return (
        <div className='PageNotFound'>
            <img src={pnf} alt=''></img>
        </div>
    )
}

export default PageNotFound