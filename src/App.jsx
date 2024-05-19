import React , {useState} from 'react'
import './App.css'

function App() {
const [arr ,setArr] = useState([]);
// useEffect(() => {
//   console.log(arr);
// }, [arr]);

const handleSubmit =(e)=>{
  e.preventDefault();
const name = (e.target[0].value)
const sur = (e.target[1].value)
const num = (e.target[2].value)
const add = (e.target[3].value)
const newArr = [...arr,{ name, sur, num ,add}];
setArr(newArr);
e.target.reset();





}

  return <>
  <div className="container">
    <div className="card flex justify-between">
  <div className="card_header">
  <table>
  <tr className='border '>
    <th className='border border-black p-[5px] '>N%</th>
    <th className='border border-black p-[5px] '>NAME</th>
    <th className='border border-black p-[5px] '>SURNAME</th>
    <th className='border border-black p-[5px] '>PHONE NUMBER</th>
    <th className='border border-black p-[5px] '>ADRESS</th>
  </tr>
  <tbody>
       {arr.map((item, index) => (
        <tr key={index}>
          <td className='border border-black p-[5px]'>{index + 1}</td>
          <td className='border border-black p-[5px]'>{item.name}</td>
          <td className='border border-black p-[5px]'>{item.sur}</td>
          <td className='border border-black p-[5px]'>{item.num}</td>
          <td className='border border-black p-[5px]'>{item.add}</td>
        </tr>
      ))}
  </tbody>
</table>
</div>
      <div className="card_body className='flex flex-col justify-center text-center border border-black gap-3 p-[20px] bg-[silver] ">
        <h1 className='text-[36px] font-bold'>LOGIN !</h1>
        <form id='form' onSubmit={handleSubmit} className='flex flex-col'>
        <input type="text" required id="" placeholder='NAME' className='border border-black outline-none'/>
        <input type="text" required id="" placeholder='SURNAME' className='border border-black outline-none'/>
        <input type="number" required id="" placeholder='PHONE NUMBER' className='border border-black outline-none'/>
        <input type="text" required id="" placeholder='ADRESS' className='border border-black outline-none'/>
        <button type='submit' className='bg-[#01112255] text-white text-[22px] mt-[25px]'>SUBMIT</button>
        </form>
        
      </div>
     
  </div>
  </div>
  </>
}

export default App
