import { useEffect, useState } from 'react';
import './App.css';
import TodoItems from './components/TodoItems';
import axios from 'axios'
function App() {

  const [data, setData] = useState(null);
   
  const url = 'http://localhost:5000/user/getItems';
  
  useEffect( () => {
    fetch(url,{mode:'no-cors'}).then((result) => {
     
          result.json();
        
    }).then((data) => {
      console.log("Data: ", data);
      // setData(data);
    }).catch((err) => {
      console.error("Error in fetching data " + err);
       })
   
  //  getData()
  }, []);


  return (
    <div className="App">
       <TodoItems/>
    </div>
  );
}

export default App;
