import { useEffect, useState } from 'react';
import CardCharacters from '../../Components/CardCharacters/CardCharacters';
import Button from '../../Components/Button/Button';
import './Filtrar.css';

function Filtrar() {
    const [speciesList, setSpeciesList] = useState([]);
    const [selectedSpecies, setSelectedSpecies] = useState('');
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        async function obtenerEspecies() {
            const ids = Array.from(
                { length: 826 },
                (_, i) => i + 1
            ).join(',');

            const response = await fetch(
                `https://rickandmortyapi.com/api/character/${ids}`
            );

            const data = await response.json();

            // Extraer especies únicas
            const especiesUnicas = [
                ...new Set(data.map((character) => character.species))
            ].sort();
            setSpeciesList(especiesUnicas);
        }

        obtenerEspecies();
    }, []);

    const handleChangeSpecies = (e) => {
        setSelectedSpecies(e.target.value);
        setPage(1);
    };

    useEffect(() => {
        if (!selectedSpecies) {
            setCharacters([]);
            setTotalPages(1);
            return;
        }

        async function obtenerPersonajesFiltrados() {
            const response = await fetch(
                `https://rickandmortyapi.com/api/character/?species=${encodeURIComponent(
                    selectedSpecies
                )}&page=${page}`
            );

            const data = await response.json();
            setCharacters(data.results);
            setTotalPages(data.info.pages);
        }

        obtenerPersonajesFiltrados();
    }, [selectedSpecies, page]);

    return (
        <div className="containergeneral">
            <div id='tituloselector'>
                <h2>Filtrar por especie</h2>
                <select
                    value={selectedSpecies}
                    onChange={handleChangeSpecies}
                >
                    <option value="">
                        Seleccione una especie
                    </option>

                    {speciesList.map((species, index) => (
                        <option
                            key={index}
                            value={species}
                        >
                            {species}
                        </option>
                    ))}
                </select>

            </div>


            <div className="ContainerCharacters">
                {characters.map((character) => (
                    <CardCharacters
                        key={character.id}
                        id={character.id}
                        name={character.name}
                        image={character.image}
                        species={character.species}
                        status={character.status}
                        gender={character.gender}
                    />
                ))}
            </div>

            {selectedSpecies && totalPages > 1 && (
                <div className="pagination">
                    <Button
                        text="Atrás"
                        onClick={() => setPage(page - 1)}
                        disabled={page === 1}
                    />

                    <span>
                        Página {page} de {totalPages}
                    </span>

                    <Button
                        text="Siguiente"
                        onClick={() => setPage(page + 1)}
                        disabled={page === totalPages}
                    />
                </div>
            )}
        </div>
    );
}

export default Filtrar;