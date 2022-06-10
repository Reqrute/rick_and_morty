import React, {useState} from 'react'
import Registration from '../Registration/Registration';

export default function Autorization () {

    const [isOpen, setIsOpen] =  useState(false);

  return (
    <React.Fragment>
    <button onClick={()=> setIsOpen({isOpen : true})}>Open Autorization</button>

    {isOpen && (<div>
        <div>
            <h3>Login</h3>

            <p>
                or <Registration/>
            </p>

        </div>
    </div>)}
</React.Fragment>
  )
}


