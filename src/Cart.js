import React,{useState} from 'react'
import { useLocation } from 'react-router-dom'

export const Cart = () => {
    const location = useLocation()
    const allValue=location.state.pass.map(item=>({
        ...item
    }))
    const [state,setState]=useState(allValue)

    function handleincrement(id){
       const valuess=state.map((item)=>{
        if(item.id===id){
          return({
            ...item,
            count:item.count+1,
          })
        }
        else{
          return(item)
        }
       })
       setState(valuess)
    }

    function handledecrement(id){
      const values=state.map((item)=>{
       if(item.id===id){
         return({
           ...item,
           count:item.count-1
         })
       }
       else{
         return(item)
       }
      })
      setState(values)
   }

    function remove(val){
     const removz=state.filter((ele)=>ele.id !==val)
     setState(removz)
    }


    console.log(state)
  return (
    <>
    <div>
        <h1 className='views'>View Cart</h1>
    </div>
    <div className='main_dis'>
       {state.map((value)=>{
        return(
            <>
            <div className='divv'>
            <div className='rght-dis'>
            <img src={value.image} alt="dress collection" width="150px" height="150px"></img>
            <h4>{value.title}</h4>
            <h1>Rs:{value.price}</h1>
            <div className='side_dis'>
            </div>
            <div className='plus_minus'>
             <button className='add'onClick={()=>handleincrement(value.id)} >+</button>
             <p>{value.count}</p>
             <button className='minus'onClick={()=>handledecrement(value.id)} >-</button>
            </div>
            <button className='remove' onClick={()=>remove(value.id)}>Remove</button>
            </div>
            </div>
            </>
        )
       })}
    </div>
    </>
  )
}
