import React from 'react'
import Spinner from './Spinner'


const Users = (props) => {
   if(props.loading){
       return <Spinner/>
   } else{
       return (
           <div>{props.data}</div>
       )
   }
}



export default Users