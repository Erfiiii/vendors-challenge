import React, { PropsWithChildren } from 'react';

interface OwnProps {};

type Props = PropsWithChildren<OwnProps>;


export function PageNotFound(props: Props) {
    return <>Page Not Found</>
}