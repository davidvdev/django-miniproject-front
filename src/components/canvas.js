import React, { useEffect, useRef } from "react";

const Canvas = ({ map, size }) => {
    const rows = map.rows
    const columns = map.columns
    const layout = map.layout.split("",(rows*columns)).map(Number);

    const cw = size
    const ch = size

    // state/ref
    const canvasRef = useRef()

    useEffect(()=>{{
        const canvas = canvasRef.current
        const ctx = canvas.getContext("2d") 
        let x = 0
        let y = 0
        let currentRow = 0
        const oneCol = cw * (1 / columns)
        const oneRow = ch * (1 / rows)
    
        for (let i = 0; i < layout.length; i++) {
            if (currentRow >= columns){
                x = 0
                y += oneRow
                currentRow = 0
            } 
            if (layout[i] === 1){
                ctx.fillStyle = 'white'
                ctx.fillRect(x,y, oneRow, oneCol)
            }
            x += oneCol
            currentRow++
        }
    }},[map])

    return (
    <canvas 
        ref={canvasRef}
        height={ch}
        width={cw}
        style={{backgroundColor: "#d9ccb6", border: "3px solid #d9ccb6"}}
    />
    )
}

export default Canvas