import React, { useState } from 'react'

const Counterapp = () => {

    const [curNum, setNum] = useState(0)

    const submitHandler = () => {
        setNum(curNum + 1)
    }

    const decriment = () => {

        if (curNum > 0) {
            setNum(curNum - 1)

        } else {
            setNum(0)
        }


    }


    return (
        <div className='container'>

            <div className="card">
                <div>
                    <h1>Counter App</h1>
                </div>
                <div>
                    <h2 className='count'>Counter : {curNum}</h2>
                    <button className='btn1' onClick={submitHandler} >Increment</button>
                    <button className='btn2' onClick={decriment}>Decrement</button>

                </div>
            </div>



        </div>
    )
}

export default Counterapp