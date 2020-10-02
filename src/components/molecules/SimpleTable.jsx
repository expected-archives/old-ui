/* eslint-disable react/no-array-index-key */
/** @jsx jsx */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import PropTypes from 'prop-types'
import { jsx } from '@emotion/core'
import Table from '~/components/atoms/Table'
import TableHeader from '~/components/atoms/TableHeader'
import TableCell from '~/components/atoms/TableCell'
import TableRow from '~/components/atoms/TableRow'

function SimpleTable({
  config, dataSource, onRowClick, noData,
}) {
  function onClick(row) {
    return (event) => {
      if (!onRowClick) {
        return
      }
      if (['a', 'button'].includes(event.nativeEvent.path[0].tagName.toLowerCase())) {
        return
      }
      onRowClick(row, event)
    }
  }

  return dataSource?.length ? (
    <Table>
      <TableHeader>
        {config.map((item, index) => (
          <TableCell
            key={index}
            className={item.cellClassName}
            css={item.css}
          >
            {item.renderHeader()}
          </TableCell>
        ))}
      </TableHeader>
      <div>
        {dataSource.map((row, rIndex) => (
          <TableRow
            key={rIndex}
            onClick={onClick(row)}
            style={onRowClick ? { cursor: 'pointer' } : {}}
          >
            {config.map((item, index) => (
              <TableCell
                key={index}
                className={item.cellClassName}
                css={item.css}
              >
                {item.renderCell(row)}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </div>
    </Table>
  ) : noData
}

SimpleTable.propTypes = {
  config: PropTypes.arrayOf(
    PropTypes.shape({
      renderHeader: PropTypes.func.isRequired,
      renderCell: PropTypes.func.isRequired,
      cellClassName: PropTypes.string,
      css: PropTypes.object,
    }),
  ).isRequired,
  dataSource: PropTypes.array,
  onRowClick: PropTypes.func,
  noData: PropTypes.node,
}

SimpleTable.defaultProps = {
  noData: null,
}

export default SimpleTable
