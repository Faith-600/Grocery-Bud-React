import React, { useState } from "react"
const List = ({items,id})=>{
  const [isChecked,setIsChecked] = useState(false)
  
  const checkHandler =(position)=>{
   
  const checkedItem = items.map((el,id)=>{
    if(position===id){
  return !el
    }else{
  return el
    }
  } )
       setIsChecked(checkedItem)
  }
//   return (<div>
//     {items.map((item)=>{
//    const {id,title} = item
//     return <article key={id} className="secondcontainer">
    
//     <p className={isChecked? 'para' : ''} key={items.id}>
//       <input type="checkbox" id={id}  checked={isChecked[id]}  onChange={()=>checkHandler(id)} >
//     </input>
//     {title}</p>
//     <button className="secondbtn">Delete</button>
// </article>
//     })}
//  </div>
  // )
}


export default List;
{/* <p style={{textDecoration:  isChecked[id]? 'line-through': null}} */}