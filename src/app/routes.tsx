import * as React from 'react';
import { RouteProps } from 'react-router-dom';

import Home from './containers/home';
import About from './containers/about';
import Contact from './containers/contact';
import NotFound from './containers/not-found';

export const routes: RouteProps[] = [{
    path: '/',
    exact: true,
    component: Home
}, {
    path: '/about',
    component: About
}, {
    path: '/contact',
    component: Contact
}, {
    path: '*',
    component: NotFound
}];
