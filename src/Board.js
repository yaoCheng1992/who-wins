import React, { useState, useEffect } from 'react'
import Square from './Square'

export default function Board({ isX, squares, onControl,onJudge}) { 
    let tip = onJudge()?<h1 className="pt-4 font-serif">{isX} wins</h1>:<h1 className="pt-4  ">it is {isX}'s turn</h1>
    return (
        <>  
             {tip}
            <div className="row w-50 mx-auto mt-5  bg-secondary">
                {squares.map((item, index) => (<Square key={index}   value={item} onControl={() => onControl(index)}></Square>))
                }
            </div>
        </>
    )
}
