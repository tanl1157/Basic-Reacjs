import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from './AppContext';

function MyComponent(props) {
  const { count, setCount } = useContext(AppContext);
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div>
      <h2>This is MyComponent</h2>
      <p>{props.message}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <div>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
      </div>
    </div>
  );
}

export default MyComponent;
