import React, { useState } from 'react'

const Bgcolor = () => {
    const [color,setColor] = useState("white")

    const handlesubmit =(buttoncolor)=>{
        setColor(buttoncolor)
    }

    
  return (
    <>
       <div style={{height:'100vh'}} className="card d-flex align-items-center justify-content-center w-100">
        <div className={`border border-dark rounded p-5 bg-${color}`}>
            <div>
                <h1 className='text-light'>Background color</h1>
            </div>
            <div>
                <button onClick={()=>handlesubmit("success")} className='btn p-2 m-2 bg-success text-light'>Green</button>
                <button onClick={()=>handlesubmit("info")} className='btn p-2 m-2 bg-info text-light'>Sky Blue</button>
                <button onClick={()=>handlesubmit("warning")} className='btn p-2 m-2 bg-warning text-light'>Yellow</button>
                <button onClick={()=>handlesubmit("danger")} className='btn p-2 m-2 bg-danger text-light'>Red</button>
                <button onClick={()=>handlesubmit("dark")} className='btn p-2 m-2 bg-dark text-light'>Black</button>
            </div>
        </div>
        </div> 
    </>
  )
}

export default Bgcolor