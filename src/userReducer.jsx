import React, { useState } from 'react'

function userReducer() {

    const [count, setcount] = useState(0);
  return (
      <div>
          <p>count: {count}</p>
          <button onClick={()=>setcount(count +1)}>incremental</button>
          <button onClick={()=>setcount(count-1)}>decrememtal</button>
          <button onClick={()=>setcount(0)}>Reset</button>
    </div>
  )
}

export default userReducer