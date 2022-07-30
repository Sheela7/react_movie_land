import {useEffect} from "react";

//7dc9e9be

const API_URL = 'http://www.omdapi.com?apikey=7dc9e9be';
const App = () => {
const searchMovies = async (title) => {
    const response = await fetch(`${API_URL} &s=${title}`)
    const data = await response.json();

    console.log(data);
}
//useeffect accepts the call back function and an empty dependency array as the 
//second one if only needed to be called at start reload.
useEffect(() => {
    searchMovies('Spiderman')
}, [])

    return(
        <h1>App</h1>
    );
}
export default App;