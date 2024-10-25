import React, { ButtonHTMLAttributes, useState } from 'react'

const Gombok = () => {
    const [kijeloltGomb, setKijeloltGomb] = useState<number>(1)
    const setGomb=() => {
        
    }
  return (
    <div>
        <button onClick={() => setKijeloltGomb(kijeloltGomb-1)} type='button'>balra</button>
        <button type='button'>1</button>
        <button type='button'>2</button>
        <button type='button'>3</button>
        <button type='button'>4</button>
        <button type='button'>5</button>
        <button type='button'>6</button>
        <button onClick={() => setKijeloltGomb(kijeloltGomb+1)} type='button'>jobbra</button>
    </div>
  )
}

export default Gombok