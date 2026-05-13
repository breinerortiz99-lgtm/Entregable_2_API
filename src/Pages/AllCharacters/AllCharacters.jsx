import { useState, useEffect, use } from 'react'
import './AllCharacters.css'
import CardCharacters from '../../Components/CardCharacters/CardCharacters'
import Button from '../../Components/Button/Button'
import Filtrar from '../Filtrar/Filtrar'


const AllCharacters = () => {
    const [characters, setCharacters] = useState([])
    const [page, setPage] = useState(1)

    useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then(response => response.json())
      .then(data => setCharacters(data.results));
  }, [page]);

    return (
        <div className='containergeneral'>
            <h2>Personajes de Rick and Morty</h2>

            <div className='ContainerCharacters'>
                {characters.length > 0 ? (
                    characters.map((character) => (
                        <CardCharacters
                            key={character.id}
                            name={character.name}
                            image={character.image}
                            species={character.species}
                            status={character.status}
                            gender={character.gender}
                        />
                    ))
                ) : (
                    <p>Cargando personajes...</p>
                )}
            </div>
            <div className='paginar'>
                <Button text='Anterior' onClick={() => setPage(page - 1)} disabled={page === 1} />

                <span>Pagina {page}</span>

                <Button text='Siguiente' onClick={() => setPage(page + 1)} disabled={page === 42} />
            </div>

        </div>

    )
}

export default AllCharacters
