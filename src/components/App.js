import { useState, useEffect } from 'react'

function App() {
    const [dogBreeds, setDogBreeds] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        fetch ("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json())
            .then((data) => {
                setDogBreeds(data.message)
                setIsLoaded(true)
                console.log(data)
            })
    }, [])


    if (!isLoaded) return <p>Loading...</p>;

    return (
        <img src={dogBreeds} alt='dog'/>
            
            
    )
}


export default App

