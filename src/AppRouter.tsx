import React, { PropsWithChildren } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/home';
import { VendorsPage } from './pages/vendors';

interface OwnProps { };

type Props = PropsWithChildren<OwnProps>;

export function AppRouter(props: Props) {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/vendors' element={<VendorsPage/>}/>
            </Routes>
        </BrowserRouter>
    )
}