import React from 'react'
import './HomeProducts.css'
import XpertImg from '../../../images/xprtDemo.png'
import bondImg from '../../../images/bondDemo.png'
import pulseImg from '../../../images/pulseDemo.png'
import ctrixImg from '../../../images/ctrixDemo.png'
import cwheelsImg from '../../../images/cwheelsDemo.png'
import crealImg from '../../../images/crealDemo.png'

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