import React from 'react'
import Card from './Components/Card'
import './App.css'

const App = () => {
  return (
    <>
    <h1 className='text-center text-[2rem] text-red-700 font-bold mt-4'>OLX Card</h1>
    
    <div className='flex flex-wrap'>
    <Card img='https://i.pinimg.com/564x/92/48/4c/92484c3cd1409a7b9b2cd5e49434d3c2.jpg' title='Bike: Honda CD-70' description='description: Honda CD-70 Best bike for middle class' price='Price: 160000'/>
    <Card img='https://i.pinimg.com/564x/f1/d8/54/f1d85401afb5f98bf7ea3c8a15e16998.jpg' title='Bike: Honda CD-125' description='description: Honda CD-125 Best bike for pindi boys' price='Price: 260000'/>
    <Card img='https://i.pinimg.com/564x/f1/d8/54/f1d85401afb5f98bf7ea3c8a15e16998.jpg' title='Bike: STX 150' description='description: Honda STX 150 Best bike for middle class' price='Price: 360000'/>
    <Card img='https://i.pinimg.com/564x/20/e5/ac/20e5ac7d6ac34edf14442b12cf0dd627.jpg' title='Bike: Honda 150' description='description: Honda 150 Best bike for karachi bcz of Jumps' price='Price: 460000'/>
    <Card img='https://i.pinimg.com/564x/30/0e/c5/300ec50078f26a2544a1823010ceddc4.jpg' title='Bike: Royal Infeild' description='description: Royal Infeild Best bike for middle class' price='Price: 660000'/>
    </div>
    </>
  )
}

export default App