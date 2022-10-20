import {useState, useEffect} from 'react'




function App() {

  const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

  //useState:
  const [pokemon, setPokemon]= useState([]);
 //



  useEffect(()=>{

    async function getDataFromApi(url){

      const res= await fetch(url);
      const {game_indices}= await res.json();

      setPokemon(game_indices);
    
    }

    getDataFromApi(url);

  }, [])




  return (
    <div className="App">

      <table >

        <caption>Crypto prices</caption>


       <thead className='flex space-x-10'>
        <th scope='col'>Game_index</th>
        <th scope='col'>Name</th>
        
        </thead>

        <tbody>

          {pokemon.map(pok=>{

            return (
            
            <tr>

              <td>{pok.game_index}</td>
              <td>{pok.version.name}</td>


            </tr>


            )
          })}


        </tbody>








      </table>
      
    </div>
  );
}

export default App;
