import {useState, useEffect} from 'react'



function App() {

  const [value, setValue]= useState('');
  const [definitions, setDefinitions]=useState([]);
  const [timerID, setTimerID]= useState(null);

  function handleChange(e){
    setValue(e.target.value)
  }

  async function getDataFromApi(){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6db7790b42mshcac8cea600d7c55p143eb0jsn688395fb3f3d',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
  
    const res= await fetch(`https://wordsapiv1.p.rapidapi.com/words/${value}/definitions`, options)
    const data= await res.json();
  
    setDefinitions(data['definitions'])
  }


  function handleInput(){

    clearTimeout(timerID)

    setTimerID(setTimeout(getDataFromApi, 1000))
  
}

useEffect(() => {

  if(value){

  handleInput()
  }
  
}, [value])






  return (
    <div id="container">
            <h1>Definition Searcher</h1>
            <input onChange={handleChange} value={value} id="word-search" type="text" name='message' placeholder="Enter a word..."/>
            <ol id="definitions-list">

              {definitions.length>0 && definitions.map(definition=>{
                return <li>{definition.definition}</li>
              })}
            </ol>

        </div>
   
  );
}

export default App;
