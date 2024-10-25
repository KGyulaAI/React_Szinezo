import React, { useState } from 'react'

const Textbox = () => {
    const [karakterszam, karakterSzam] = useState<number>(0)
  return (
    <div>
        <input onChange={(e)=>karakterSzam(Number(e.target.value.length))} id='txtKarakterek' type="text" />
        <p>The text is {karakterszam} long.</p>
    </div>
  )
}

export default Textbox