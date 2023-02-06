import React, { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import styles from './HomePage.module.scss'

interface OwnProps {}

type Props = PropsWithChildren<OwnProps>;

export function HomePage(props: Props) {
    return (
        <div className={styles.wrapper}>
            <Link to={'/vendors'} >
                Go to vendors
            </Link>
        </div>
    )
}