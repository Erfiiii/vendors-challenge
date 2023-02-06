import React, { PropsWithChildren } from 'react';
import { formatNumber } from '../number';

interface OwnProps {
  value: number;
}

export type Props = PropsWithChildren<OwnProps>;

export function PriceOutput(props: Props) {
  const {value} = props
  const text = formatNumber(value);
  return (
    <span>{text} تومان</span>
  )
}
