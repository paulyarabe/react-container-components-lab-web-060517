// Code SearchableMovieReviewsContainer Here

import React from 'react'
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query='
const KEY = `api-key=${NYT_API_KEY}`

class SearchableMovieReviewsContainer extends React.Component {

  constructor(){
    super()

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    fetch(URL).then(resp => resp.json()).then(data => this.setState({
      reviews: data.results
    }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" value={this.state.search} onChange={this.handleChange} />
          <input type="submit" name="Submit" />
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer
