import React, { PropsWithChildren } from 'react';

interface OwnProps {}

type Props = PropsWithChildren<OwnProps>;

export function VendorsPage(props: Props) {
    return (
        <div>
            Vendors
        </div>
    )
}