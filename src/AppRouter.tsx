import React, { PropsWithChildren } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home';
import { PageNotFound } from './pages/page-not-found';
import { VendorsPage } from './pages/vendors';

interface OwnProps {};

type Props = PropsWithChildren<OwnProps>;

export function AppRouter(props: Props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/vendors' element={<VendorsPage/>}/>
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </BrowserRouter>
    )
}