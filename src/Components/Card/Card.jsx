import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import './Card.css'
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import Loading from '../Loading/Loading'



const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),

}));

export default function RecipeReviewCard(props) {

    let card = props.data?.map((el) => (
        <Card sx={{ maxWidth: 345 }} key={el.id}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={el.title}
                subheader={el.rating}
            />
            <Link to={`/products/${el.id}`}>    
                <CardMedia
                    component="img"
                    height="194"
                    image={el.images[0]}
                    alt="Paella dish"
                /></Link>
            <CardContent>
                <Typography variant="body2" color="text.secondary" title={el.description}>
                    {el.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
            </CardActions>
        </Card>

    ))
   
    if (!card) {
        return <Container>
            <Loading/>
        </Container>
    }


    return (
        <>
            <Container>
                <div className='card_wrapper'>
                    {
                      card   
                    }

                </div>
            </Container>
        </>
    );
}
