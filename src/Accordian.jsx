import React, { useState } from 'react'
import { questions } from './api'
import MyAccordian from './MyAccordian';
const Accordian = () => {
    const [data] = useState(questions);
  return (
    <>
    <section className="main-div">
        <h1>React Interview Questions </h1>
        {
            data.map((curElem) => {
                return <MyAccordian key={curElem.id} {...curElem} />
            })        
        }
    </section>
      
    </>
  )
}

export default Accordian
