import styled from '@emotion/styled'
import { css } from '@emotion/core'

const TableCell = styled.div((props) => css`
  font-family: ${props.theme.fontFamily.default};
  display: flex;
  align-items: center;
  margin: 0 16px;
  text-align: left;
`)

export default TableCell
