import React from 'react';
import {NavLink} from 'react-router-dom';

import './header.css';

class Header extends React.Component {
	render() {
		return(
			<div className="Header">
				<NavLink exact to ='' className='HeaderLink' activeClassName='HeaderLink--Active'>
					<div className='Title'>О школе</div>
				</NavLink>
				<NavLink to='/cost' className='HeaderLink' activeClassName='HeaderLink--Active'>
					<div className='Title'>Стоимость</div>
				</NavLink>
				<NavLink to='/courses' className='HeaderLink' activeClassName='HeaderLink--Active'>
					<div className='Title'>Курсы</div>
				</NavLink>
				<NavLink to='/blog' className='HeaderLink' activeClassName='HeaderLink--Active'>
					<div className='Title'>Блог</div>
				</NavLink>
				<NavLink to='/test' className='HeaderLink' activeClassName='HeaderLink--Active'>
					<div className='Title'>Тестирование</div>
				</NavLink>
				<NavLink to='/teachers' className='HeaderLink' activeClassName='HeaderLink--Active'>
					<div className='Title'>Преподаватели</div>
				</NavLink>
			</div>
		);
	}
}
 
export default Header;