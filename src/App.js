import React, { useState, useEffect} from 'react';
import ChildComponent from './components/ChildComponent'

const App = () => {
  const [data, setData] = useState([])

  useEffect(()=> {
    const fetchedData = async () => {
      try{
        const response = await fetch("https://fakestoreapi.com/products")
        const result = await response.json()
        setData(result)
        console.log(result)
      }
      catch(error){
        console.log(error)
      }
    }
    fetchedData()
  },[])

  return (
    <div>
      <ChildComponent data={data}/>
    </div>
  );
}

export default App;
