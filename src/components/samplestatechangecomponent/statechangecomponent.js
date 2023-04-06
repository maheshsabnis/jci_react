import React, { useState } from 'react'
import MouseMoveComponent from './mousemovecomponent';
 

export default function StateChangeComponent() {
  const [name, setName] = useState('');
  const [show, canShow] =  useState(false);

 console.log('Component Rendered');
  return (
    <div className='container'>
        <input className='form-control'
          value={name}
          onChange={(evt)=>setName(evt.target.value)}
        />
        <br/>
         <button onClick={()=>canShow(!show)}>Toggle</button>
        <hr/>
        {
            show && <MouseMoveComponent></MouseMoveComponent>
        } 
        {/* <MouseMoveComponent></MouseMoveComponent> */}

    </div>
  )
}
