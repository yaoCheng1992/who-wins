
import { useState } from 'react';
import Board from './Board';


function App() {
  let [history, setHistory] = useState([Array(9).fill(null)])
  let [move, setMove] = useState(0)
  let squares = history[move]
  function jumpTo(index) {
    setMove(index)
  }
  let List = history.map((item, index) => {
    return <button className="list-group-item bg-info text-white cursor-pointer" key={index} onClick={() => jumpTo(index)}>{index === 0 ? 'let is start' : `move #${index}`}</button>
  })
  function controlHandler(currentSuqares) { 
    let nextH = [...history.slice(0, move + 1), currentSuqares]
    setHistory(nextH)
    setMove(nextH.length-1) 
  }
  return (
    <div className="container-fluid text-center  bg-primary vh-100">
      <Board squares={squares} onClickControl={controlHandler} move={move}></Board>
      <div className="position-fixed end-0 top-50  translate-middle-y list-group  list-group-flush" >
        {List}
      </div>
    </div>
  )
}

export default App;
