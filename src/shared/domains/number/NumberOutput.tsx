import React, { PropsWithChildren } from 'react';
import { formatNumber } from './format-number';

interface OwnProps {
  value: number;
}

export type Props = PropsWithChildren<OwnProps>;

export function NumberOutput(props: Props) {
  const {value, ...rest} = props
  const text = formatNumber(props.value);
  return (
    <span {...rest}>{text}</span>
  )
}
