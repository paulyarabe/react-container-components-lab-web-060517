// Code MovieReviews Here

import React from 'react'
import PropTypes from 'prop-types';

const MovieReviews = ({reviews}) => (
  <div className="review-list">
    { reviews.map(review => <div className="review"><p>Movie Title: { review.display_title }</p><p>Critic: { review.byline }</p><p>{ review.headline }</p><p>Summary: { review.summary_short }</p><br /></div>) }
  </div>
)

MovieReviews.defaultProps = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default MovieReviews
