import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

export default function CharacterCard({
  name,
  gender,
  species,
  status,
  imageURL
}) {
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia className={classes.media} alt={name} image={imageURL} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Species: {species}
            Status: {status}
            Gender: {gender}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
