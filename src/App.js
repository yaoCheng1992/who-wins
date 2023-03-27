
import { useState } from 'react';
import Board from './Board';


function App() {
  let [history, setHistory] = useState([Array(9).fill(null)]) 
  let [move, setMove] = useState(0)
  let isX = move % 2 == 0 ? "X" : "O"
  let squares = history[move]
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
  function control(grid) {
    if (judgeWinner() || squares[grid]) return
    let currentSuqares = squares.slice(0)
    currentSuqares[grid] = isX
    setMove(move + 1)
    setHistory([...history.slice(0,move+1), currentSuqares])
    
  }
  function jumpTo(index) {
    setMove(index)  
  }
  let Lis = history.map((item, index) => {
    return <button className="list-group-item bg-info text-white cursor-pointer" key={index} onClick={()=>jumpTo(index)}>{index === 0 ? 'let is start' : `move #${index}`}</button>
  })
  return (
    <div className="container-fluid text-center  bg-primary vh-100"> 
      <Board squares={squares} isX={isX} onControl={control} onJudge={judgeWinner}>
      </Board>
      <div  className="position-fixed end-0 top-50  translate-middle-y list-group  list-group-flush" >
        {Lis}
      </div>
    </div>
  )     
}

export default App;
