import React from 'react'
import Square from './Square'

export default function Board({squares, onClickControl, move}) {
    let isX = move % 2 == 0 ? "X" : "O"
    let tip = judgeWinner() ? <span >{judgeWinner()} wins</span> : <span  >it is {isX}'s turn</span>
    function judgeWinner() {
        let array = [[squares[0], squares[3], squares[6]]
            , [squares[1], squares[4], squares[7]]
            , [squares[2], squares[5], squares[8]]
            , [squares[0], squares[1], squares[2]]
            , [squares[3], squares[4], squares[5]]
            , [squares[6], squares[7], squares[8]]
            , [squares[0], squares[4], squares[8]]
            , [squares[2], squares[4], squares[6]]]
        for (let item of array) {
            if (item.every(sub => sub && sub === item[0])) return item[0]
        }
        return ''
    }
    function handleControl(grid) {
        if (judgeWinner() || squares[grid]) return
        let currentSuqares = squares.slice()
        currentSuqares[grid] = isX
        onClickControl(currentSuqares)
    }
    return (
        <>
            <h1 className="pt-4 font-serif">{tip}</h1>
            <div className="row w-50 mx-auto mt-5  bg-secondary">
                <Square value={squares[0]} onControl={() => handleControl(0)}></Square>
                <Square value={squares[1]} onControl={() => handleControl(1)}></Square>
                <Square value={squares[2]} onControl={() => handleControl(2)}></Square>
                <Square value={squares[3]} onControl={() => handleControl(3)}></Square>
                <Square value={squares[4]} onControl={() => handleControl(4)}></Square>
                <Square value={squares[5]} onControl={() => handleControl(5)}></Square>
                <Square value={squares[6]} onControl={() => handleControl(6)}></Square>
                <Square value={squares[7]} onControl={() => handleControl(7)}></Square>
                <Square value={squares[8]} onControl={() => handleControl(8)}></Square>
            </div>
        </>
    )
}
