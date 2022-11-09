import React, { Component } from 'react'
import {Movie} from './Movie';

export class UnrentedMovies extends Component {
  render() {
    return (<div>
              <div className='renting-title'>Catalog:</div>
              <div className='movies-container'>{this.props.movies.map(movie=>
                <Movie movie={movie} rentAMovie={this.props.rentAMovie} unrentAMovie={this.props.unrentAMovie}/>
              )}</div>
            </div>
    )
  }
}

export default UnrentedMovies;
