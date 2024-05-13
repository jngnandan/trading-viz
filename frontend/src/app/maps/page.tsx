import React from 'react'

import Header from '../header'

import TradingViewWidget from '../trading/index'
import TradingHeatmap from '../trading/trading-heatmap'

function Maps() {
  return (
    <div>
      <Header/>
      <div className=''>
      
      <div className='flex flex-col lg:flex-row lg:justify-between h-screen w-screen gap-6'>
        {/* <TradingViewWidget/> */}
        <TradingHeatmap/>
      </div>
      </div>
      </div>
  )
}

export default Maps