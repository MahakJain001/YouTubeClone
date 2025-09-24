import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Video from './pages/Video/Video'
import TicTacToe from './Components/games/TicTacToe/TicTacToe';
import StonePaperScissor from './Components/games/StonePaperScissor/StonePaperScissor';
import SnakeGame from './Components/games/SnakeGame/SnakeGame'; 

const App = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div>
      <Navbar setSidebar={setSidebar} />
      
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar} />} />
        <Route path='/video/:categoryId/:videoId' element={<Video />} />
        <Route path="/snake-game" element={<SnakeGame />} />
        <Route path="/tic-tac-toe" element={<TicTacToe />} />
        <Route path="/stone-paper" element={<StonePaperScissor />} />
      </Routes>
    </div>
  )
}

export default App;
