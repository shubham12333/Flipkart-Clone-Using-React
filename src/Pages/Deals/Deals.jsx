import React from 'react'
import { Button, Statistic} from 'antd';
import './Deals.css'

export  const Deals = () => {
    const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
function onFinish() {
}
  return (
    <div className='deals-body'>
    <div className='deals-body2'>
    <h1 className='heading'>Deals of the Day</h1>
    <img className='timerImg' src='/images/timer.svg'/>
     <h3> <Countdown className='' value={deadline} onFinish={onFinish} /></h3>
  </div>
  <div>
    <Button className='viewAll-btn' type='primary'>VIEW ALL</Button>
  </div>
    </div>
  )
}
