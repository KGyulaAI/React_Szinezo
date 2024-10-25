import React, { useState } from 'react'

const Rotate = () => {
    const [szog, szogBeallitas] = useState<number>(0)
  return (
    <div>
        <div style={{
            color: 'black',
            width: '100px',
            height: '100px',
            border: 'pink solid 20px',
            margin: '30px',
            rotate: `${szog}deg`}}>
        </div>
        <button onClick={() => szogBeallitas(szog - 20)} type='button'>Balra forgatás</button>
        <button onClick={() => szogBeallitas(szog + 20)} type='button'>Jobbra forgatás</button>
    </div>
  )
}

export default Rotate