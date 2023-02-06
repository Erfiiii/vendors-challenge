import React, { PropsWithChildren } from 'react';
import { Vendor } from '../../../api/vendors/types';
import { formatNumber } from '../../../shared/domains/number';
import { PriceOutput } from '../../../shared/domains/price';
import { Rate } from '../../../shared/rate/Rate';
import styles from './Vendor.module.scss';

interface OwnProps {
vendor: Vendor
}

type Props= PropsWithChildren<OwnProps>;

export function Vendor(props:Props) {
    const {vendor} = props;
    return (
        <div className={styles.card} key={vendor.title}>
                    <div className={styles['card-header']}>
                        <img src={vendor.backgroundImage} />
                    </div>
                    <div className={styles['vendor-avatar']}>
                        <img src={vendor.logo} />
                    </div>
                    <div className={styles['card-body']}>
                        <div className={styles['card-title-rate']}>
                            <p className={styles['card-title__p']}>{vendor.title}</p>
                            <div>
                                <span className={styles['card-body__vote-count']} >({formatNumber(vendor.voteCount)})</span>
                                <Rate rate={vendor.rate} />
                            </div>
                        </div>
                        <p className={styles['card-description__p']}>{vendor.description}</p>
                        <div>
                            <span className={styles['card-body__rate']}>{vendor.isExpress ? 'ارسال اکسپرس' : 'پیک فروشنده'}</span>
                            <span className={styles['card-body__price']}>{(vendor.deliveryPrice == 0 ? ' رایگان ' : <PriceOutput value={vendor.deliveryPrice} />)}</span>
                        </div>
                    </div>
                </div>
    )
}