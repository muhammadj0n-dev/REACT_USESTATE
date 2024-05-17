import React from 'react'
import { useState } from 'react'
export default function index() {
  const [qadam,setQadam] = useState(0)
  function handleQadam(){
    setQadam(qadam + 1)
  };
  const [yur,setYur] = useState(0);
  const handleYur =()=>{
    setYur(yur +qadam)
  }
  return (
    <>
    <div className="container flex flex-col gap-[25px] ">
      <div className="yur flex flex-col items-center gap-[30px]">
      <h1 className='mt-[150px] text-center font-medium font-serif text-[22px] border-[2px] border-[black] w-[100px]  '>{yur} metr</h1>
      <button onClick={handleYur} className='p-[4px] text-center bg-[silver] rounded-[2px] hover:bg-[green] hover:text-[white] border'>YURISH</button>
      </div>
        <div className="qad flex flex-col items-center gap-[15px]">
          <h1 className='mt-[50px] text-center font-medium gap-[15px] font-serif text-[22px]  w-[250px] flex flex-col'>Qadam kattaligi: <span className='border-[2px] border-[black]'>{qadam} metr</span> </h1>
          <button onClick={handleQadam} className='p-[4px] text-center bg-[silver] rounded-[2px] hover:bg-[green] hover:text-[white] border'>Qadamni kengaytirish</button>
        </div>
    </div>
   
    </>
  )
}
