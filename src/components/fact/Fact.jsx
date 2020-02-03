import React from 'react'
import PropTypes from 'prop-types'

function Quote({ fact }) {
  return (
    <div>
      {fact}
    </div>
  )
}

Quote.propTypes = {
  fact: PropTypes.string.isRequired
}

export default Quote

