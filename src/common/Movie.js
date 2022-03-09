import React, { Component } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

export default class Movie extends Component {
  render() {
    const imageBaseURL = "https://image.tmdb.org/t/p/w500";
    const ellipsis = {
      display: "-webkit-box",
      overflow: "hidden",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: 3,
    };
    return (
      <Card sx={{ maxWidth: 345, height: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={imageBaseURL + this.props.movie.poster_path}
            alt={this.props.movie.backdrop_path}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {this.props.movie.original_title}
            </Typography>
            <Typography
              sx={ellipsis}
              variant="body2"
              color="text.secondary"
            >
              {this.props.movie.overview}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}
