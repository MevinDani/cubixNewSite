import React from 'react'
import './HomeMain.css'
import Stand from '../../../images/stand2.svg'
import Platform from '../../../images/platform.svg'
import phone from '../../../images/phone.png'
import BlurImg from '../../../images/Financial Security.svg'
import Donut from '../../../images/Donut Chart 1.svg'
import BarGraph from '../../../images/Bar Graph 1.svg'
import Computer from '../../../images/computeer.png'



const HomeMain = () => {
    return (
        <div className='HomeMainWrap'>

            <div className='HomeMainCont'>

                <div className='HomeMainText'>
                    Achieve your business goals by <br />
                    our patented ERP technology
                </div>

                <div className='HomeMainScheduleCont'>

                    <div className='HomeMainScheduleSubText'>
                        Talk with our executives to find out the <br />
                        expertise we give
                    </div>

                    <div className='HomeMainScheduleButtonCont'>

                        <div className='HomeMainScheduleButton'>
                            Schedule a Demo
                        </div>
                    </div>

                </div>
            </div>

            <div className='HomeMainImgCont'>

                <div className='DonutImgCont'>
                    <img className='DonutImg' src={Donut} alt="" />
                </div>

                <div className='BlurImgCont'>
                    <img className='BlurImg' src={BlurImg} alt="" />
                </div>

                <div className='BarGraphCont'>
                    <img className='BarGraphImg' src={BarGraph} alt="" />
                </div>

                <div className='PhoneCont'>
                    <img className='PhoneImg' src={phone} alt="" />
                </div>

                <div className='LapCont'>
                    <img className='LapImg' src={Computer} alt="" />
                </div>

                <div className='StandCont'>
                    <img className='StandImg' src={Stand} alt="" />
                </div>

                <div className='PlatformCont'>
                    <img className='PlatformImg' src={Platform} alt="" />
                </div>

            </div>
        </div>
    )
}

export default HomeMain