import { Grid } from "@mui/material";
import React, { Component } from "react";
import Movie from "./Movie";
import Box from "@mui/material/Box";

export default class RecentMovies extends Component {
  render() {
    const movieDetails = {
      movies: [
        {
          name: "Mudhal Nee Mudivum Nee",
          movieImageURL:
            "https://akamaividz2.zee5.com/image/upload/w_1170,h_658,c_scale,f_auto,q_auto/resources/0-0-1z575093/list/1170x658withlogof58d11c794664bc88dc7a3ee5245cc7b.jpg",
          desc: "Mudhal Nee Mudivum Nee also known by the initialism MNMN, is a 2022 Indian Tamil-language coming-of-age film written and directed by Darbuka Siva, in his directorial debut, who also scored music for the film. Produced by Sameer Bharat Ram, the film features a predominantly new cast and crew.",
        },
        {
          name: "Maanaadu",
          movieImageURL:
            "https://www.pinkvilla.com/files/styles/amp_metadata_content_image/public/maanaadu_silambarasan_tr_postponed.jpg",
          desc: "On the day of a public conference by the state's Chief Minister, his bodyguard and a police officer become stuck in a time loop.",
        },
        {
          name: "Mahaan",
          movieImageURL:
            "https://bingeddata.s3.amazonaws.com/uploads/2022/02/Mahaan-Review.jpg",
          desc: "A mild-mannered school teacher ends up mixed with the corrupt and separated from his family for years after a random beggar's comments drive him to take a walk on the wild side.",
        },
        {
          name: "Doctor",
          movieImageURL: "https://static.toiimg.com/photo/80667091.jpeg",
          desc: "When a military doctor tracks down his former fiancee's kidnapped niece, he discovers a complex human trafficking ring in Goa. He then weaves an intricate trap to capture the perpetrators.",
        },
      ],
    };
    return (
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={5} columns={32}>
          {Array.from(movieDetails.movies).map((movie, index) => (
            <Grid item xs={8} key={index} >
              <center>
                <Movie movie={movie} />
              </center>
            </Grid>
          ))}
          {Array.from(movieDetails.movies).map((movie, index) => (
            <Grid item xs={8} key={index} >
              <center>
                <Movie movie={movie} />
              </center>
            </Grid>
          ))}
          {Array.from(movieDetails.movies).map((movie, index) => (
            <Grid item xs={8} key={index} >
              <center>
                <Movie movie={movie} />
              </center>
            </Grid>
          ))}
          {Array.from(movieDetails.movies).map((movie, index) => (
            <Grid item xs={8} key={index} >
              <center>
                <Movie movie={movie} />
              </center>
            </Grid>
          ))}
          {Array.from(movieDetails.movies).map((movie, index) => (
            <Grid item xs={8} key={index} >
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
