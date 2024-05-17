import React , {useState} from 'react'

export default function index() {
  const [arr,setArr] = useState([0,1,2,3,4])
  const addCount =()=>{
    let item = arr[arr.length -1]
    arr.push(item + 1);
    setArr([...arr])
  }

  const deleteCount=()=>{
    let item = arr[arr.length -1]
    arr.pop(item - 1);
    setArr([...arr])
  }

  const incCount =(index)=>{
   arr[index] = arr[index] + 1
   setArr([...arr])
  }
  const decCount =(index)=>{
    arr[index] = arr[index] - 1
    setArr([...arr])
   }
  return (
    <>
      <div className="container">
        <button onClick={addCount} className=' mt-[200px] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-[20px] dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>ADD COUNTER</button>
        <button onClick={deleteCount} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>DELETE COUNTER</button>
        {
          arr.map((item, index)=>(
            <div key={index} className='flex items-center justify-center text-center gap-[5px]'>
               <button onClick={()=>incCount(index)}  className='focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 '>+</button> 
               <p className='text-[20px] font-medium text-center'>{item}</p>  
               <button onClick={()=>decCount(index)} className='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'>-</button>
            </div>
           
          ))
        }
      </div>
    </>
  )
}
