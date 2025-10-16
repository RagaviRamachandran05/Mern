import React, { useState } from 'react';

const State = () => {
  const [count, setCount] = useState(0);
  const [likeCount, setLikeCount] = useState(0);
  const [dislikeCount, setDislikeCount] = useState(0); 

  return (
    <div>
      <h1>State Example</h1>

      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <div style={{ marginTop: '20px' }}>
        <button onClick={() => setLikeCount(likeCount + 1)}>👍 {likeCount} Like</button>
        <button onClick={() => setDislikeCount(dislikeCount + 1)} style={{ marginLeft: '10px' }}>
          👎 {dislikeCount} Dislike
        </button>
      </div>
    </div>
  );
}

export default State;
