import React, { useState } from 'react'

type Marker = {
    xPos: number,
    yPos: number
}

const Coordinates = () => {
    const [xPos, setXPos] = useState<number>(0)
    const [yPos, setYPos] = useState<number>(0)

    const [markers, setMarkers] = useState<Marker[]>([])

    const pinMarker = () => {
        setMarkers([...markers, {xPos: xPos, yPos: yPos}])
        setXPos(0)
        setYPos(0)
    }

  return (
    <div>
        <div className='map'
        style={{
            width: "200px",
            aspectRatio: 1,
            border: "1px solid black",
            position: "relative"
        }}>
            {markers.map(marker =>
            <div className='marker'
            style={{
                left: marker.xPos,
                bottom: marker.yPos
            }}></div>)}

            <div className='marker'
            style={{
                width: "10px",
                aspectRatio: 1,
                background: "black",
                position: "absolute",
                left: xPos,
                bottom: yPos
            }}></div>
        </div>
        <label htmlFor="xPos">X:</label>
        <input  value={xPos}
                onChange={(e)=>setXPos(Number(e.target.value))}
                type="number"
                id='xPos'
                min={0}
                max={188}/><br />
        <label htmlFor="yPos">Y:</label>
        <input  value={yPos}
                onChange={(e)=>setYPos(Number(e.target.value))}
                type="number" 
                id='yPos'
                min={0}
                max={188}/>
                <br />
        <button onClick={pinMarker}>Pin Marker</button>
    </div>
  )
}

export default Coordinates