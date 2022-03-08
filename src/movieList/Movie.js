import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default class Movie extends Component {
  render() {
    const ellipsis = {
        display: '-webkit-box',
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
        WebkitLineClamp: 3,
    }
    console.log(this.props.movie);
    return (
      <Card sx={{ maxWidth: 345, height: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={this.props.movie.movieImageURL}
            alt={this.props.movie.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {this.props.movie.name}
            </Typography>
            <Typography sx = {ellipsis} variant="body2" over color="text.secondary">
              {this.props.movie.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
