import React from 'react'
import './HomeCarouselItem.css'
import CardImgOne from '../../../images/CarouselOneImg.png'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";



const HomeCarouselOne = () => {


    return (
        <div className='HomeCarouselItemWrap'>

            <div className='HomeCarouselCardHead'>
                Healthier Finance Control
            </div>

            <div className='HomeCarouselCardCont'>

                <div>
                    <img className='HomeCarouselCardImg' src={CardImgOne} alt="" />
                </div>

                <div className='HomeCarouselCardDescCont'>
                    <div className='HomeCarouselCardDescText'>
                        Cubix ERP provides a unique set of features to track your business <br />
                        and manages its finances with accuracy and efficiency. With Cubix <br />
                        ERP you will be confident that your business finances are in safe <br />
                        positions
                    </div>

                    <div className='HomeCarouselCardReadMoreButtonCont'>
                        <div className='HomeCarouselReadMoreButton'>
                            Read More
                        </div>
                    </div>

                    {/* <div className='HomeCarouselCardNavButtonWrap'>

                        <div className='HomeCarouselNavButtonCont'>

                            <BsFillArrowLeftCircleFill
                                style={{ fontSize: '32px' }}
                            />
                            <BsFillArrowRightCircleFill
                                style={{ fontSize: '32px' }}
                            />
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default HomeCarouselOne