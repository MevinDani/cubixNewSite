import React from 'react'
import './Home.css'
import HomeMain from '../components/HomePage/HomeMain/HomeMain'
import HomeCompDesc from '../components/HomePage/HomeCompDesc/HomeCompDesc'
import HomeProducts from '../components/HomePage/HomeProducts/HomeProducts'
import HomeServices from '../components/HomePage/HomeServices/HomeServices'
import HomeCarousel from '../components/HomePage/HomeCarousel/HomeCarousel'

const HomePage = () => {
    return (
        <div className='HomePageWrap'>

            {/* HomeMain */}
            <HomeMain />

            {/* HomeCompDesc */}
            <HomeCompDesc />

            {/* HomeProducts */}
            <HomeProducts />

            {/* HomeCarousel */}
            <HomeCarousel />

            {/* HomeServices */}
            <HomeServices />

        </div>
    )
}

export default HomePage