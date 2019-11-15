import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import styled from "styled-components";


const CardStyles = styled.div`

display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 1rem;


`;


const useStyles = makeStyles({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 200,
  },
});

export default function CharacterCard({
  name,
  gender,
  species,
  status,
  imageURL
}) {
  const classes = useStyles();
  return (
    <CardStyles>
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia component="img" className={classes.media} alt={name} image={imageURL} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Species: {species}
            <br />
            Status: {status}
            <br />
            Gender: {gender}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </CardStyles>
  );
}
