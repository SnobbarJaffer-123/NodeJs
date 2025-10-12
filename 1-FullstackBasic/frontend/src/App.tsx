import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';


interface Joke {
  id: number;
  title: string;
  content: string;
}

function App() {
  
  const [jokes, setJokes] = useState<Joke[]>([]);

  useEffect(()=>{
    //axios.get('http://localhost:4000/api/jokes')
    axios.get('/api/jokes')
    .then((response)=>{
      setJokes(response.data)
    }
  )
  .catch((error)=>{
    console.log(error)
  })
  })
  return (
    <>
      <h1 className="bg-green-200 text-black p-4 rounded-xl">JOKES: {jokes.length}</h1>
      

      {
      
      jokes.map((joke, index) => (
        <div className="pt-10 bg-slate-300 rounded-xl font-semibold" key={joke.id ?? index}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
