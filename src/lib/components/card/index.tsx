import * as React from 'react';
import * as _ from 'lodash';

export interface NavbarProps {
	id?: string;
	brand?: string;
}

export interface NavbarState {
	id?: string;
}

export class Card extends React.Component<NavbarProps, NavbarState> {

	componentWillMount() {
		const id = this.props.id || _.uniqueId('navbar-');
		this.setState({
			id
		});
	}

	render() {
		return(
			<div className="uk-card uk-card-default uk-card-body">
				<h3 className="uk-card-title">Default</h3>
				<p>Lorem ipsum <a href="#">dolor</a> sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
			</div>
		);
	}
}
