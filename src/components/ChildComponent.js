import React, { useState } from 'react';
import './ChildComponent.css'

const ChildComponent = ({ data }) => {
  const [search, setSearch] = useState('');
  
  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h1>Data from parent component</h1>
      <input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul className='container'>
        {filteredData.map((each) => (
          <div key={each.id} className='card'>
            <li> <img src={each.image} alt={each.title}/></li>
            <li>{each.title}</li>
            <li>{each.price}</li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default ChildComponent;
