import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './CardCharacters.css';

import { useNavigate } from 'react-router-dom';

// Recibe las propiedades (props) del personaje
const CardCharacters = ({ id, name, image, species, status, gender, disableClick = false }) => {
  const navigate = useNavigate();

  return (
    <Card
      className='cardd'
      onClick={() => {
        if (!disableClick) {
          navigate(`/Details/${id}`);
        }
      }}
    >
      <CardActionArea>

        <CardMedia
          sx={{ borderRadius: '10px' }}
          component="img"
          image={image}
          alt={name}
        />

        <CardContent>

          <Typography
            gutterBottom
            variant="h5"
            component="div"
            id='nombre'
          >
            {name}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: 'text.secondary' }}
            className='datos'
          >
            Especie: {species}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: 'text.secondary' }}
            className='datos'
          >
            Estado: {status}
          </Typography>

          <Typography
            variant="body2"
            sx={{ color: 'text.secondary' }}
            className='datos'
          >
            Género: {gender}
          </Typography>

        </CardContent>

      </CardActionArea>
    </Card>
  );
};

export default CardCharacters;