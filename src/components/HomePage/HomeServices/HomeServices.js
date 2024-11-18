import React from 'react'
import './HomeServices.css'
import PcImg from '../../../images/pcImg.png'
import MobImg from '../../../images/mobImg.png'
import WebImg from '../../../images/webImg.png'
import Cctv from '../../../images/cctvImg.png'

const HomeServices = () => {
    return (
        <div className='HomeServicesWrap'>

            <div className='HomeServicesHeadWrap'>

                <div className='HomeServicesHeadCont'>
                    Our Services
                </div>

            </div>

            <div className='HomeServicesItemCont'>

                <div className='HomeServicesItem'>

                    <div className='HomeServiceImgCont'>
                        <img className='HomeServieIcon' src={PcImg} alt="" />
                    </div>

                    <div className='HomeServiceDescCont'>

                        <div className='HomeServiceItemHead'>
                            Software Solutions
                        </div>

                        <div className='HomeServiceDescText'>
                            We have provided our software solutions in wide spectrum of business domains like
                            Autoparst & automobile, Logistics, Field Service, Warehouse Management, Projetcs & Service, Construction,
                            Fire & Safety, Foodstuff, Trading & Distrbution
                        </div>
                    </div>

                </div>
                <div className='HomeServicesItem'>

                    <div className='HomeServiceImgCont'>
                        <img className='HomeServieIcon' src={MobImg} alt="" />
                    </div>

                    <div className='HomeServiceDescCont'>

                        <div className='HomeServiceItemHead'>
                            Mobile Apps
                        </div>

                        <div className='HomeServiceDescText'>
                            We have provided our software solutions in wide spectrum of business domains like
                            Autoparst & automobile, Logistics, Field Service, Warehouse Management, Projetcs & Service, Construction,
                            Fire & Safety, Foodstuff, Trading & Distrbution
                        </div>
                    </div>

                </div>
                <div className='HomeServicesItem'>

                    <div className='HomeServiceImgCont'>
                        <img className='HomeServieIcon' src={WebImg} alt="" />
                    </div>

                    <div className='HomeServiceDescCont'>

                        <div className='HomeServiceItemHead'>
                            Web Apps
                        </div>

                        <div className='HomeServiceDescText'>
                            We have provided our software solutions in wide spectrum of business domains like
                            Autoparst & automobile, Logistics, Field Service, Warehouse Management, Projetcs & Service, Construction,
                            Fire & Safety, Foodstuff, Trading & Distrbution
                        </div>
                    </div>

                </div>
                <div className='HomeServicesItem'>

                    <div className='HomeServiceImgCont'>
                        <img className='HomeServieIcon' src={Cctv} alt="" />
                    </div>

                    <div className='HomeServiceDescCont'>

                        <div className='HomeServiceItemHead'>
                            IT Solutions
                        </div>

                        <div className='HomeServiceDescText'>
                            We have provided our software solutions in wide spectrum of business domains like
                            Autoparst & automobile, Logistics, Field Service, Warehouse Management, Projetcs & Service, Construction,
                            Fire & Safety, Foodstuff, Trading & Distrbution
                        </div>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default HomeServices