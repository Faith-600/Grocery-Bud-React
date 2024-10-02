import{useState} from 'react'
import Alert from './grocery/Alert';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";



function App() {
  const [name, setName] = useState('')

  const [list, setList] = useState([])

  const [alert, setAlert] = useState({show:false,msg:'',type:''})

  const [isChecked, setIsChecked] = useState({})
  
  const checkHandler = (id) => {
    
    setIsChecked((prevState) =>{
      const newCheckedState = { ...prevState }; 
  if (newCheckedState[id]) {
         newCheckedState[id] = false;
      } else {
        newCheckedState[id] = true
      }
  
      return newCheckedState;
    });
  }; 

 

  const handleSubmit=(e)=>{
 e.preventDefault();
  if(!name){
    showAlert(true,
      'danger',
      <>
         <FontAwesomeIcon icon={faCircleExclamation}/> please provide value
      </>
    )
  }else if(list.find((item)=>item.title.toLowerCase() ===name.toLowerCase())){
    showAlert(true,
        'danger',
        <>
        <FontAwesomeIcon icon={faCircleExclamation}/> {name} is already in  the list 
        </>
      )     
     
  }
  else{
    showAlert(true,
      'success',
      <>
       <FontAwesomeIcon icon={faCircleCheck} /> {name} is added to the list 
      </>
    )
    const newItems = {id: new Date().getTime().toString(),title:name}
     setList([...list,newItems])
     setName('')
  }
}

const showAlert =(show=false,type='',msg='') => {
  setAlert({show,type,msg})
    }
    
  const removeItems = (id)=>{
   const itemsToRemove = list.find((item)=>item.id===id)
   setList(list.filter((n)=>n.id !== id))
    showAlert(true,
      'success',
      <>
      <FontAwesomeIcon icon={faCircleCheck}/> {itemsToRemove.title} is removed from the list 
      </>
    )
  }

  

  
  return (
    <>
    <h4>{alert.show && <Alert {...alert} removeAlert={showAlert}/>}</h4>
    <section className='maincontainer'>
      <form className='formdiv' onSubmit={handleSubmit} >
       <h3>Grocery Bud</h3>
      <div className='inputdiv'>
      <input type='text' className='input' placeholder='e.g Rice' value={name} onChange={(e)=>setName(e.target.value)}></input>
      <button type='submit' className='firstbtn'>Add Items</button>
      </div>
      </form>
      <div>
    {list.map((item)=>{
   const {id,title} = item
    return <article key={id} className="secondcontainer">
    
    <p className={isChecked[id]? 'linethrough' : null}>
      <input type="checkbox" id={id}  checked={isChecked[id] }  onChange={()=>checkHandler(id)} >
    </input>
    {title}</p>
    <button className="secondbtn" onClick={()=>removeItems(id)}>Delete</button>
</article>
    })}
 </div>
    </section>
    </>
  );
}

export default App;
