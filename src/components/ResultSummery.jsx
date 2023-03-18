import React, { useState } from 'react';
import './result.css';
import Memory from '../assets/images/icon-memory.svg';
import Reaction from '../assets/images/icon-reaction.svg';
import Verbal from '../assets/images/icon-verbal.svg';
import Visual from '../assets/images/icon-visual.svg';
function Result() {
  const [isClicked, setIsClicked] = useState(false);

  function buttonClicked() {
    console.log('Button clicked!');
    setIsClicked(true);
  }

  return (
    <div className="body">
      <div className='RM'>
        <div className="container1">
          <div className="description">
            <h2>Your Result</h2>
            <div className='circle'>
              <h1>76</h1>
              <h3>of 100</h3>
            </div>
            <h1>Great</h1>
            <p>You scored higher than 65% of the people who have taken these tests.</p>
          </div>
        </div>
        <div className="container2">
          <div className="summery">
            <h2>Summary</h2>
            <div className="categories">
              <div className="category reaction">
              <img className="icon" src={Reaction} />
                <h3>Reaction</h3>
                <h2>80 / 100</h2>
              </div>
              <div className="category memory">
              <img className="icon" src={Memory} />
                <h3>Memory</h3>
                <h2>92 / 100</h2>
              </div>
              <div className="category verbal">
              <img className="icon" src={Verbal} />
                <h3>Verbal</h3>
                <h2>61 / 100</h2>
              </div>
              <div className="category visual">
              <img className="icon" src={Visual} />
                <h3>Visual</h3>
                <h2>72 / 100</h2>
              </div>
              <div>
                <button className={isClicked ? "continue-btn clicked" : "continue-btn"} onClick={buttonClicked}>Continue</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
