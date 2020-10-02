import styled from '@emotion/styled'
import { css } from '@emotion/core'
import TableCell from './TableCell'

const TableHeader = styled.div((props) => css`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 0;

  ${TableCell} {
    font-weight: ${props.theme.fontWeight.regular};
    font-size: ${props.theme.typography.text.small.fontSize};
    color: ${props.theme.color.grey['300']};
  }
`)

export default TableHeader
