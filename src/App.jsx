import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {TASK1 ,TASK3 ,TASK2} from "./components"
import './App.css'

function App() {

  return (
    <Router>
     <div>
      <nav>
        <ul className='flex justify-center gap-[25px] '>
        <li><Link to="/task1" className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-7 py-5 text-center  me-2 mb-2'>TASK-1</Link></li>
        <li><Link to="/task2" className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-7 py-5 text-center  me-2 mb-2'>TASK-2</Link></li>
        <li><Link to="/task3" className='text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-7 py-5 text-center  me-2 mb-2'>TASK-3</Link></li>
        </ul>
      </nav>


      <Routes>
          <Route path='/task1' element={<TASK1 />} />
          <Route path='/task2' element={<TASK2 />} />
          <Route path='/task3' element={<TASK3 />} />
        </Routes>
        </div>
    </Router>
  )
}

export default App
