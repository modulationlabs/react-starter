import * as React from 'react';
import * as _ from 'lodash';

export interface NavbarProps {
	id?: string;
	brand?: string;
}

export interface NavbarState {
	id?: string;
}

export class Navbar extends React.Component<NavbarProps, NavbarState> {

	componentWillMount() {
		const id = this.props.id || _.uniqueId('navbar-');
		this.setState({
			id
		});
	}

	render() {
		return (
		 <nav className="uk-navbar-container uk-navbar-inverse uk-margin" uk-navbar>
			<div className="uk-navbar-left">
				<a className="uk-navbar-item uk-logo" href="#">Logo</a>
				<ul className="uk-navbar-nav">
					<li>
						<a href="#">
							<span className="uk-icon uk-margin-small-right" href="#" uk-icon="icon: star"></span>
							Features
						</a>
					</li>
				</ul>
				<div className="uk-navbar-item">
					<div>Some <a href="#">Link</a></div>
				</div>
				<div className="uk-navbar-item">
					<form action="javascript:void(0)">
						<input className="uk-input uk-form-width-small" type="text" placeholder="Input" />
						<button className="uk-button uk-button-default">Button</button>
					</form>
				</div>
			</div>
		</nav>
	   );
	}
}
