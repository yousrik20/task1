import { useEffect, useState } from 'react';
import './App.css';
import image from './assets/1.avif';
import axios from 'axios';
function App() {
  const [newQuote,setNewQuote]=useState(false);
  const [quote,setQuote]=useState('');  
  useEffect(()=>{
    axios.get('https://api.chucknorris.io/jokes/random').then((response)=>{
      console.log(response.data);
      setQuote(response.data.value)
    });
  },[newQuote])
    return (
    <>
      <div className='main'>
      <h2>W&S</h2>
        <div className='container'>
          
          <div className='content'>
            <div className='img-con'>
            <img src={image}/>
            </div>
            <div className='text'>
              <q>{quote}</q>            
              <button onClick={()=>setNewQuote(!newQuote)}>New Quote</button>
            </div>
            
          </div>
        </div>
      </div>
      <footer>All Copyright Reserved for W&s &copy; 2024</footer>
    </>
  )
}

export default App
