import React from 'react'
import PropTypes from 'prop-types'
import Callout from '~/components/molecules/Callout'
import SimpleTable from '~/components/molecules/SimpleTable'

function SimpleStateHandler({
  loading, onLoad, error, onError, onSuccess,
}) {
  if (loading) {
    return onLoad || (
      <div>Loading...</div>
    )
  }
  if (error) {
    return onError || (
      <Callout color="danger" block>
        {error.message}
      </Callout>
    )
  }
  return onSuccess
}

SimpleStateHandler.propTypes = {
  loading: PropTypes.bool.isRequired,
  onLoad: PropTypes.node,
  error: PropTypes.object,
  onError: PropTypes.node,
  onSuccess: PropTypes.node,
}

SimpleTable.defaultProps = {
  onSuccess: null,
}

export default SimpleStateHandler
