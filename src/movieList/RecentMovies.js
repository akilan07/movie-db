import { Grid } from "@mui/material";
import React, { Component } from "react";
import Movie from "./Movie";
import Box from "@mui/material/Box";
import axios from "axios";

export default class RecentMovies extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [], page: 0 };
  }

  componentDidMount() {
    document.title = "Popular Movies";
    axios.get(`/movie/popular?page=${this.state.page+1}`)
    .then((response) => response.data)
    .then( json => this.setState(json))
  }

  render() {

    //Scroll Event

    window.addEventListener('scroll', () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log("reached bottom")
      }
    })
    
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} columns={32}>
          {Array.from(this.state.results).map((movie, index) => (
            <Grid item xs={8} key={index}>
              <center>
                <Movie movie={movie} />
              </center>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
}
