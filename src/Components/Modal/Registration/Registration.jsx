import React, {useState} from 'react'
import Autorization from '../Autorization/Autorization';

export default function Registration () {

    const [isOpen, setIsOpen] =  useState(false);

  return (
    <React.Fragment>
    <button onClick={()=> setIsOpen({isOpen : true})}>Open Registration</button>

    {isOpen && (<div>
        <div>
            <h3>Registration</h3>

            <p>
                or <Autorization/>
            </p>

        </div>
    </div>)}
</React.Fragment>
  )
}