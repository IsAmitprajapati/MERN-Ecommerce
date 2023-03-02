import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom'
import CardVertical from '../components/CardVertical'

const ProductSearch = () => {
    const location = useLocation()
    console.log(location.state)
    const [data,setData] = useState([])

    const loadingDataSample = new Array(10).fill(null)

   useEffect(()=>{
      window.scrollTo({top : 0, behavior : "smooth"})
   },[]) 

   console.log(data)

   useEffect(()=>{

       const interval = setTimeout(
            async()=>{
                const res = await fetch(`http://localhost:8080/product/search?q=${location.state}`)
                const data = await res.json()
                console.log(data)
                setData(data)
            }
        ,1000)

    return ()=> clearTimeout(interval)

   },[])
  return (
    <div className='p-2 md:p-4 gap-2 md:gap-4 flex flex-wrap justify-center'>
    { 
        loadingDataSample.map((el,index)=>{
            return(
                <CardVertical key={"ProductSearch"+index}/>
            )
        })
    } 
    </div>
  )
}

export default ProductSearch