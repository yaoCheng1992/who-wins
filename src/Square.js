import React, { useEffect } from 'react'
export default function Square({ value, onControl }) {  
    return ( 
            <div className="border border-info col-4 px-5 text-center fs-2" style={{ height: "100px", lineHeight: "100px", cursor: "pointer" }} onClick={onControl}>{value}</div>

         
    )
}
