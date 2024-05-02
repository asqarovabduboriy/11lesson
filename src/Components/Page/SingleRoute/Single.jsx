import * as React from 'react';
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
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from '../../Api/Api'
import Loading from '../../Loading/Loading'
import { Container } from '@mui/material'
import './Single.css'



const Single = () => {
    const { id } = useParams()
    const [product, setProduct] = useState(null)

    useEffect(() => {
        axios
            .get(`/products/${id}`)
            .then(res => setProduct(res.data))
            .catch(res => console.log(res))
    }, [])


    return (
        <Container>
           <div className='card_wrapper'> 
           {
                !product ? <Loading /> : <Card sx={{ maxWidth: 345 }} key={product?.id}>
                    <CardHeader
                        avatar={
                            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                                A
                            </Avatar>
                        }
                        action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                        }
                        title={product?.title}
                        subheader={product?.rating}
                    />
                    <CardMedia
                        component="img"
                        height="194"
                        image={product?.images[0]}
                        alt="Paella dish"
                    />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary" title={product?.description}>
                            {product?.description}
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

            }
           </div>
        </Container>
    )
}

export default Single