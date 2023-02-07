import React, { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import { shallowEqual } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getVendorsFetch } from './vendorsSlice';
import styles from './VendorsPage.module.scss'
import { Vendor } from './vendor';
import InfiniteScroll from 'react-infinite-scroll-component';

interface OwnProps { }

type Props = PropsWithChildren<OwnProps>;

export function VendorsPage(props: Props) {
    const [page, setPage] = useState<number>(0)
    const dispatch = useAppDispatch();
    const error = useAppSelector(state=>state.vendors.error)
    const loading = useAppSelector(state => state.vendors.isLoading)
    const vendors = useAppSelector(state => state.vendors.vendors, shallowEqual)
    useEffect(() => {
        dispatch(getVendorsFetch(page))
    }, [page])

    const loadMore = useCallback(() => {
        setPage(prevPage => prevPage + 1)
    }, [setPage])

    if(error) {
        return <>Oops! Something went wrong. try again.</>
    }

    return (
        <InfiniteScroll
            dataLength={vendors.length}
            next={loadMore}
            hasMore={true}
            loader={null}
            endMessage={<p>You reached end!</p>}
        >
            <div className={styles.wrapper}>
                {vendors.map(vendor => (
                    <Vendor vendor={vendor} key={vendor.title} />
                ))}
                {loading ? <>Loading...</> : null}
            </div>
        </InfiniteScroll>

    )
}