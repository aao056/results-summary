import './App.css';
import { useState } from 'react';
import data from "./data.json"

function App() {

  const [items] = useState(data);

  return (
    <div className="container">
      <div className='result'>
        <h3 className='title'>Your Result</h3>
        <div className='circle'>
          <h5>76</h5>
          <span>of 100</span>
        </div>
        <span className='rating'>Great</span>
        <p>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
      <div className='summary'>
        <h3 className='title'>Summary</h3>
        {items.map((item, index) => 
        <div key={index}
             className="result_item"
             style={{
                backgroundColor: `${item.color}15`
             }}
        >
          <h3 className='category' style={{
            color: item.color
          }}>
            <img src={item.icon} alt={item.category}/>
            {item.category}</h3>
          <p>
            <span className='score'>{item.score}</span>{" "}
            / 100
          </p>
        </div>)}
        <button className='continue'>Continue</button>
      </div>
    </div>
  );
}

export default App;
