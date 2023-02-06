import React, { PropsWithChildren, useEffect } from 'react';
import { shallowEqual } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getVendorsFetch } from './vendorsSlice';
import styles from './VendorsPage.module.scss'
import { Vendor } from './vendor';

interface OwnProps { }

type Props = PropsWithChildren<OwnProps>;

export function VendorsPage(props: Props) {
    const dispatch = useAppDispatch();
    const loading = useAppSelector(state => state.vendors.isLoading)
    const vendors = useAppSelector(state => state.vendors.vendors, shallowEqual)
    useEffect(() => {
        dispatch(getVendorsFetch(0))
    }, [])
    if (loading) {
        return <>Loading...</>
    }
    return (
        <div className={styles.wrapper}>
            {loading ? <>Loading...</> : vendors.map(vendor => (
                <Vendor vendor={vendor} key={vendor.title} />
            ))}
        </div>
    )
}