import React, { PropsWithChildren, useMemo } from 'react';
import { formatNumber } from '../domains/number';
import  styles from './Rate.module.scss'
import { getColorFromRate } from './utils';

interface OwnProps {
    rate: number
}

type Props = PropsWithChildren<OwnProps>

export function Rate(props: Props) {
    const {rate} = props
    const color = useMemo(()=>getColorFromRate(rate),[rate])
    return (
        <div className={styles['wrapper']}>
            <span className={styles['rate']} style={{color: color}}>{formatNumber(rate)}</span>
        </div>
    )
}