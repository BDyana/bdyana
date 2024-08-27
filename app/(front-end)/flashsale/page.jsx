"use client"
import React, { useState } from 'react'

function page() {
    
    const [data , setData] = useState({
        id: "1",
        name: "test",
        price:1000,
        addedQty:12,
        qty: 8,
        countdownStart:5,
        specialOffer:0.5,
        countdownForSpecialOffer:true
    })
    const price=()=>{
        if (data?.countdownForSpecialOffer===true) {
            if(data.qty-data.countdownStart>0){
                return {st:"offer",availableQtyOffer: data?.qty>0?data.qty-data.countdownStart>0?data.qty-data.countdownStart:0:"Out of stock",qty:data.qty,price:data.price*data.specialOffer}
            }else{
                return {st:"not offer",availableQtyOffer:data?.qty>0?data.qty-data.countdownStart>0?data.qty-data.countdownStart:0:"Out of stock",qty:data.qty,price:data.price}

            }
        }else{
            
            return {st:"all products ",availableQtyOffer:data?.qty>0?data.qty-data.countdownStart>0?data.qty-data.countdownStart:0:"Out of stock",qty:data.qty,price:data.price*data.specialOffer}

        }
    }
  return (
    <div>
        {JSON.stringify(price())}<br/>
       <progress value={data?.countdownForSpecialOffer?(((data.qty-data.countdownStart)/(data.addedQty-data.countdownStart))*100).toFixed(2):100} max={100}></progress>
        
        {data?.countdownForSpecialOffer?(((data.qty-data.countdownStart)/(data.addedQty-data.countdownStart))*100)>0?(((data.qty-data.countdownStart)/(data.addedQty-data.countdownStart))*100).toFixed(2):0:100}%
     <br/>   <button onClick={()=>setData({...data,qty:data.qty-1})}>click</button>
    </div>
    
  )
}

export default page