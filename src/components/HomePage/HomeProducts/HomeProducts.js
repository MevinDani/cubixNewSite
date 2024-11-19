import React from 'react'
import './HomeProducts.css'
import XpertImg from '../../../images/XpertLogoN.png'
import bondImg from '../../../images/bondTimeLogo.png'
import pulseImg from '../../../images/PulseLogo.png'
import ctrixImg from '../../../images/CtrixLogo.png'
import cwheelsImg from '../../../images/CwheelsLogo.png'
import crealImg from '../../../images/CrealLogo.png'

const HomeProducts = () => {
    return (
        <div className='HomeProductsWrap'>

            <div>
                <img className='HomeProductImg' src={XpertImg} alt="" />
            </div>
            <div>
                <img className='HomeProductImg' src={bondImg} alt="" />
            </div>
            <div>
                <img className='HomeProductImg' src={pulseImg} alt="" />
            </div>
            <div>
                <img className='HomeProductImg' src={ctrixImg} alt="" />
            </div>
            <div>
                <img className='HomeProductImg' src={cwheelsImg} alt="" />
            </div>
            <div>
                <img className='HomeProductImg' src={crealImg} alt="" />
            </div>
        </div>
    )
}

export default HomeProducts