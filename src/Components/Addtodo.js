import { useState,useEffect } from "react";
import Showtodo from "./Showtodo";
const Addtodo = () => {
    const [alltodo, setalltodo] = useState([])
  const [editedIndex, seteditedIndex] = useState(0)
  const [todo, settodo] = useState('')
  const [error, seterror] = useState(false)

  useEffect(() => {
    if(localStorage.todo){
       let localTodo=JSON.parse(localStorage.todo)
       setalltodo(localTodo)
    }
   }, [])
  const addTodo=()=>{
  if(!todo){
    seterror(true)
    }
    else{
    let eachtodo={todo}
    setalltodo(()=>{
      let locTodo=[...alltodo,eachtodo]
      localStorage.todo=JSON.stringify(locTodo)
      return locTodo
    })
    settodo('')
    seterror(false)
  }
  }
  const deleteItem=(index)=>{
    let filteredTodo=alltodo.filter((item,i)=>index!=i)
    setalltodo(()=>{
      localStorage.todo=JSON.stringify(filteredTodo)
      return filteredTodo
    })

  }
const editItem=(index)=>{
  seteditedIndex(index)
}
const updateItem=()=>{
let alleditedTodo=[...alltodo]
alleditedTodo[editedIndex]={todo}
settodo('')
setalltodo(alleditedTodo)
}
    
    return ( 
        <> 
         <center>
            <div>
                <div className="container">
                    <h1 className="text-primary">
                    To-do List
                    </h1>
                   <div className="col-6 mx-auto shadow p-5 bg-dark">
                 <input type="text" className="form-control my-2 input-sm" value={todo} placeholder='Todo' onChange={(e)=> settodo(e.target.value)} />
                 <button className="btn btn-primary w-100 mt-3" onClick={()=>addTodo(todo,settodo,error,seterror)} >Add</button><br/>
                 {error?<div className="alert-danger my-1">Input some details in the space provided</div>:''}
                 </div>      
                </div>
            </div>
           
            </center>
            <br /><br /><br />
            <Showtodo editItem={editItem} editedIndex={editedIndex} todo={todo} alltodo={alltodo} updateItem={updateItem} deleteItem={deleteItem} settodo={settodo} />




            
        </>
     );
}
 
export default Addtodo;
