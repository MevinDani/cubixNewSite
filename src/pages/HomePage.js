import React from 'react'
import './Home.css'
import HomeMain from '../components/HomePage/HomeMain/HomeMain'
import HomeCompDesc from '../components/HomePage/HomeCompDesc/HomeCompDesc'
import HomeProducts from '../components/HomePage/HomeProducts/HomeProducts'
import HomeServices from '../components/HomePage/HomeServices/HomeServices'

const HomePage = () => {
    return (
        <div className='HomePageWrap'>

            {/* HomeMain */}
            <HomeMain />

            {/* HomeCompDesc */}
            <HomeCompDesc />

            {/* HomeProducts */}
            <HomeProducts />

            {/* HomeServices */}
            <HomeServices />

        </div>
    )
}

export default HomePage