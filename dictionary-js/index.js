const input= document.getElementById('word-search')
input.addEventListener('input', handleInput)
const definitionsList= document.getElementById('definitions-list')

let timerID;


function handleInput(){
    clearTimeout(timerID)

    if (input.value.length ===0){
        clearInput()
    }

    else{
    timerID= setTimeout(getDataFromApi, 500)
    }

}


function getDataFromApi(){

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6db7790b42mshcac8cea600d7c55p143eb0jsn688395fb3f3d',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
    

fetch(`https://wordsapiv1.p.rapidapi.com/words/${input.value}/definitions`, options)
	.then( (response) => response.json())
	.then( (response) =>{
        console.log(response)
        const definitions= response['definitions']
        console.log(definitions)
        const fragment= document.createDocumentFragment();
        definitions.forEach((definition)=>{
            fragment.appendChild(createList(definition))

        })

       definitionsList.replaceChildren(fragment)
        

    })
     .catch(err => console.error(err));

}


  function createList(definition){

    const li= document.createElement('li')
    li.textContent= definition['definition']

    return li
  }


  function clearInput(){
    definitionsList.innerHTML= '';
  }











