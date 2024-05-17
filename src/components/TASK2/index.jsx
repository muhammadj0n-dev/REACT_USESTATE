import React, {useState} from 'react'


export default function index() {
  const [str, setStr] = useState("LOGIN");
  const [btn,setBtn] = useState("Login");
  const btnWel = () => {
    if (str === "LOGIN") {
      setStr("WELCOME");
      setBtn("Logout")
    }else if(str === "WELCOME"){
      setStr("LOGIN");
      setBtn("Login")
    }
  };
  return (
    <>
    <div className="container">
      <h1 className='mt-[250px] text-[32px] tex-[center] font-medium font-serif'>{str}</h1>
      <button onClick={btnWel} className='p-[4px] text-center bg-[silver] rounded-[2px] hover:bg-[green] hover:text-[white] border'>{btn}</button>
    </div>
    </>
  )
}
