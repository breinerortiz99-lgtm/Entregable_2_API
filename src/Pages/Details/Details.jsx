import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import CardCharacters from '../../Components/CardCharacters/CardCharacters';
import './Details.css';

const Details = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const [character, setCharacter] = useState(null);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => response.json())
      .then((data) => setCharacter(data));
  }, [id]);

  return (
    <div className="containerDetails">
      {character ? (
        <>
          <CardCharacters
            id={character.id}
            name={character.name}
            image={character.image}
            species={character.species}
            status={character.status}
            gender={character.gender}
            disableClick = {true}
          />

          <button
            className="btnBack"
            onClick={() => navigate(-1)}
          >
            Volver
          </button>
        </>
      ) : (
        <p>Cargando personaje...</p>
      )}
    </div>
  );
};

export default Details;