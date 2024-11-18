import React from 'react'
import './HomeCompDesc.css'
import CityDemo from '../../../images/cityDemo.png'

import { BsArrowRightCircle } from "react-icons/bs";

const HomeCompDesc = () => {
    return (
        <div className='HomeCompDescWrap'>

            <div className='HomeCompImgCont'>
                <img className='HomeCompImg' src={CityDemo} alt="" />
            </div>

            <div className='HomeCompDescCont'>
                <p className='HomeCompDesc'>
                    <span className='CbxBoldText'>CUBIX IT SOLUTIONS LLC</span> consists of highly experienced manpower resources with the purpose <br />
                    of offering software solutions and services to various industries. Through them Cubix makes its <br />
                    mark as a provider in the area of the global innovative software solutions
                </p>
                <p className='HomeCompDesc'>
                    We at CUBIX, pushes the limit to enable progressive businesses to transform and gain <br />
                    competitive advantage, through the expert delivery of innovative software producst and tailor-made software
                </p>

                <div className='HomeCompDescReadMoreCont'>

                    <div className='HomeCompDescButtonCont'>
                        Read More
                        <BsArrowRightCircle style={{ fontWeight: 'bold', fontSize: '20px' }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeCompDesc