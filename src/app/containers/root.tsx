import * as React from 'react';

import { RouteProps } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';

import Header from './header';
import Home from './home';
import About from './about';
import Contact from './contact';
import NotFound from './not-found';
import Http from './../../lib/api';

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

var http = new Http();

export default class Root extends React.Component<any, any> {

	componentDidMount() {
		// API call
		http.get('https://www.googleapis.com/youtube/v3/channels?part=contentDetails%20&mine=true').then((data) => {
			console.log(data);
		})
	}

	render() {
		return (
			<div>
				<Header />
				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route path="/about" component={About}></Route>
					<Route path="/contact" component={Contact}></Route>
					<Route component={NotFound}></Route>
				</Switch>
			</div>
		);
	}

}
