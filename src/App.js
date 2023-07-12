import React, { useState, useEffect } from 'react';

const App = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
        try {
          const response = await fetch('http://118.67.134.110:8000/nodem/all');
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.log('Error fetching data:', error);
        }
      };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Data:</h1>
      <script>fetchData();</script>
      <ul>
        {data.map((item, index) => (
          <li> {item.Geometry}, {item.node_id}, {item.node_guid}, {item.family_name}, {item.category_name},
           {item.minx}, {item.miny}, {item.minz}, {item.maxx}, {item.maxy}, {item.maxz} </li>
        ))}
      </ul>
    </div>
  );
};

export default App;