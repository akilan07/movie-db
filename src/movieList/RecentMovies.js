import { Grid } from "@mui/material";
import React, { Component } from "react";
import Movie from "./Movie";
import Box from "@mui/material/Box";
import axios from "axios";

export default class RecentMovies extends Component {
  constructor(props) {
    super(props);
    this.state = { movies: [], page: 0 };
  }

  componentDidMount() {
    document.title = "Popular Movies";
    this.getMovieDetails();
  }

  getMovieDetails = () => {
    axios
      .get(`/movie/popular?page=${this.state.page + 1}`)
      .then((response) => response.data)
      .then((json) => {
        let movieList = this.state.movies.concat(json.results);
        this.setState({movies: movieList, page: json.page});
      });
  };

  render() {
    const infiniteScroll = (e) => {
      const bottom =
        e.target.scrollHeight - e.target.scrollTop <= e.target.clientHeight &&
        e.target.scrollHeight - e.target.scrollTop >= e.target.clientHeight - 1;
      if (bottom) {
        let getPage = this.state.page + 1;
        this.setState({ page: getPage });
        this.getMovieDetails();
      }
    };
    return (
      <div onScroll={infiniteScroll} className="container">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={5} columns={32}>
            {Array.from(this.state.movies).map((movie, index) => (
              <Grid item xs={8} key={index}>
                <center>
                  <Movie movie={movie} />
                </center>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    );
  }
}
