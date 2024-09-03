import React from 'react'
// import './App.css'

const Card = (props) => {
  return (
    <>

    <div className='border w-[250px] ml-7 mt-5'>
      <figure>
        <img src={props.img} alt="" />
      </figure>

    

    <div className='text-black text-[22px] p-3'>
    <h1>{props.title}</h1>
    <p>{props.description}</p>
    <p>{props.price}</p>
    <button className='bt22'>Buy Now</button>
    </div>
    </div>
    </>
  )
}

export default Card