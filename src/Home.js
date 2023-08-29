import React,{ useEffect, useReducer,useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
// import {Cart} from './Cart'


const intialValue= {
    positiveRespons:[],
    negativeRespons:[],
    isLoding:true,
  }

  const reducer=(state,action)=>{

    switch(action.type){
      case "positive":
      return {
        positiveRespons:action.payload
      }
      case "negative":
        return{negativeRespons:[]}
        default:
          return state
    }
  }


const Home = () => {
 
  const[states,dispatch]=useReducer(reducer,intialValue)
  const navigate=useNavigate()
  let [search,setSearch]=useState([])
  const [filter,setFilter]=useState([])
  const[str,setStr]=useState([])

  const location=useLocation()


  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((response)=>response.json())
    .then((response)=>{
    try{
      const data = response.map((item) => {
        return ({
          ...item,
          count: 0
        })
      })
      dispatch({type:"positive",
      payload:data
    })
    }
    catch{
      dispatch({type:"negative",
      payload:response
    })
    }
    })
    },[])


    function InputSearch(e){
        setSearch(e.target.value)
    }
    useEffect(()=>{
        const filtersData=states.positiveRespons.filter((value)=>value.title.toLowerCase().includes(search))
        setFilter(filtersData)
    },[search])


    function cartStorage(val){
      if(!str.some(item=>item.id===val.id)){
        setStr([...str,val])
      }
      else{
        alert('This product is already in your cart.')
      }
    }

  return (
    <>
    <div className='main_div'>
        <div className='head_div'>
         <h1>E-Commerce</h1>
        </div>
        <div className='input_box'>
            <input type="text" className='inputs' onChange={InputSearch}></input>
        </div>
        <div className='sign_in'>
        <span> <h1>{location.state.pas}</h1>Welcome to Our site</span>
        </div>
        <div className='Cart'>
            <h1 onClick={()=>navigate("/Cart",{state:{pass:str, another:setStr()}})}>Cart</h1>
        </div>
    </div>
    <div className='outerDiv'>
       {
     filter.map((value)=>{
        return(
            <>
            <div className='collections'>
            <img src={value.image} alt="dress collection" width="150px" height="150px"></img>
                <h3>{value.title}</h3>
                <h2>{value.category}</h2>
                <p>{value.price}</p>
                <p className='rate'>{value.rating.rate}</p>
                <p className='para'>{value.description}</p>
                <button className='button' onClick={()=>cartStorage(value)}>Add to cart</button>
            </div>
            </>
        )
    
    })

      } 
    </div>
    </>
  )
}


export default Home