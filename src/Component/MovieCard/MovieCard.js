import React, {useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import StarRateIcon from '@material-ui/icons/StarRate';
import { Box } from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import {Link} from "react-router-dom"; 


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
    },
    media: {
      height: 100,
      paddingTop: '56.25%', // 16:9
      witdh:100, 
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
  




export default function MovieCard({movie}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const [rating, setRating] = React.useState(movie.rating);
  console.log("rating",rating)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

const [MovieCard, setMovieCard] = useState({})

  

  return (

    <Card className={classes.root} style = {{width: "30%", textAlign: "center", marginTop: "10%", color: "rgb(29, 160, 247)"}} >
        
    {/* <Link to ={`/Details/${movie.id}`}>   */}
    <Link to ={'/Details/'+ movie.id}>  

      <CardMedia
        className={classes.media}
        image={movie.posterURL}
      />
      <CardContent>
        <Typography style ={{color:"rgb(29, 160, 247)", fontSize:"150%"}} variant="body2" color="textSecondary" component="p">
        {movie.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <div className="ratingDiv">
          <Box component="fieldset" mb={3} borderColor="transparent">
            <Rating name="read-only" value={rating} readOnly />
          </Box>
        </div>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent style = {{color: "grey"}}>
          <Typography paragraph >Description:</Typography>
          <Typography paragraph>
            {movie.description}
          </Typography>
          <StarRateIcon/>
        </CardContent>
      </Collapse>
    </Link>
    </Card>
  );
}




       
