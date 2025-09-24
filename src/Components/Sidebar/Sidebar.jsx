import React, { useState } from 'react'
import './Sidebar.css'
import home from '../../assets/home.png'
import game_icon from '../../assets/game_icon.png'
import automobiles from '../../assets/automobiles.png'
import sports from '../../assets/sports.png'
import entertainment from '../../assets/entertainment.png'
import tech from '../../assets/tech.png'
import music from '../../assets/music.png'
import blogs from '../../assets/blogs.png'
import news from '../../assets/news.png'
import jack from '../../assets/jack.png'
import Hacks_crafts from '../../assets/Hacks_crafts.jpg'
import LearnAI from '../../assets/LearnAI.jpg'
import { Link } from 'react-router-dom';

import game_icon_button from '../../assets/gameicon.jpg';


const Sidebar = ({ sidebar, category, setCategory }) => {
    const [showGames, setShowGames] = useState(false); // toggle for game list

    return (
  <div className={`sidebar ${sidebar ? "" : "small-sidebar"}`}>
    <div className="shortcut-links">
      {/* Main navigation links */}
      <div className={`side-link ${category === 0 ? "active" : ""}`} onClick={() => setCategory(0)}>
        <img src={home} alt="" />
        <p>Home</p>
      </div>
      <div className={`side-link ${category === 2 ? "active" : ""}`} onClick={() => setCategory(2)}>
        <img src={automobiles} alt="" />
        <p>Automobiles</p>
      </div>
      <div className={`side-link ${category === 17 ? "active" : ""}`} onClick={() => setCategory(17)}>
        <img src={sports} alt="" />
        <p>Sports</p>
      </div>
      <div className={`side-link ${category === 24 ? "active" : ""}`} onClick={() => setCategory(24)}>
        <img src={entertainment} alt="" />
        <p>Entertainment</p>
      </div>
      <div className={`side-link ${category === 28 ? "active" : ""}`} onClick={() => setCategory(28)}>
        <img src={tech} alt="" />
        <p>Technology</p>
      </div>
      <div className={`side-link ${category === 10 ? "active" : ""}`} onClick={() => setCategory(10)}>
        <img src={music} alt="" />
        <p>Music</p>
      </div>
      <div className={`side-link ${category === 22 ? "active" : ""}`} onClick={() => setCategory(22)}>
        <img src={blogs} alt="" />
        <p>Blogs</p>
      </div>
      <div className={`side-link ${category === 25 ? "active" : ""}`} onClick={() => setCategory(25)}>
        <img src={news} alt="" />
        <p>News</p>
      </div>
      <hr />
    </div>

    {/* Subscribed List */}
    <div className="subscribed-list">
      <h3>Subscribed</h3>
      <div className="side-link">
        <img src={Hacks_crafts} alt="" />
        <p>Hacks & Crafts</p>
      </div>
      <div className="side-link">
        <img src={LearnAI} alt="" />
        <p>Learn AI</p>
      </div>
    </div>

    {/* Games Section (separate, after subscribed) */}
    {/* Games Box - Are you bored section */}
{sidebar ? (
  <div className="bored-box" onClick={() => setShowGames(true)}>
    🕹️ <br />Are you bored? <br />
    <span className="click-here">Click here to play games</span>
  </div>
) : (
  <img
    src={game_icon_button}
    alt="Games"
    className="game-toggle-img"
    onClick={() => setShowGames(true)}
    
  />
  
)}




{/* Game Modal (Popup) */}
{showGames && (
  <div className="game-popup">
    <h3>🎮 Select a Game</h3>
    <div className="game-image-row">
  <Link to="/snake-game">
    <img
      src="https://img.gamepix.com/games/snake-game-online/cover/snake-game-online.png?w=400&ar=16:10"
      alt="Snake Game"
    />
  </Link>
  <Link to="/tic-tac-toe">
    <img
      src="https://img.poki-cdn.com/cdn-cgi/image/q=78,scq=50,width=314,height=314,fit=cover,f=auto/591a911d9b73482c052270a8fe4cfc95/tic-tac-toe.png"
      alt="Tic Tac Toe"
    />
  </Link>
  <Link to="/stone-paper">
    <img
      src="https://media.istockphoto.com/id/1269211670/vector/rock-paper-scissors-body-parts-icon-set.jpg?s=612x612&w=0&k=20&c=OSu0AGUV7Tq3-gotwwOywCRcv4OMrt7KqQMhI_tPZOw="
      alt="Stone Paper Scissors"
    />
  </Link>
</div>

    <button onClick={() => setShowGames(false)}>Close</button>
  </div>
)}

  </div>
);

}   

export default Sidebar
