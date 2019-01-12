import React from 'react';
import {NavLink} from 'react-router-dom';
import Button from '../../Form/Button/button.js';

import './testbegin.css';

class TestBegin extends React.Component {
	render() {
		return(
			<div className="Test__Header">
				<div className="Test__Header__Text">
					<div className="Big-Text">Узнайте уровень английского</div>
					<div className="Middle-Text">
					Авторский тест на определение уровня английского языка 
					онлайн-школы «Skylang» — это комплексная проверка ваших знаний
					 в четырех областях: грамматике, словарном запасе, чтении и
					  восприятии речи на слух.
					</div>
					<div className="Test__Link">
						<NavLink to="/test/1" >
							<Button>Начать Тестирование</Button>
						</NavLink>
					</div>
				</div>
			</div>
		);
	}
};

export default TestBegin;