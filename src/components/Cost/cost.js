import React from 'react';
import './cost.css';

class Cost extends React.Component {
	render() {
		return(
			<div className='Cost'>
				<div className="Cost_Header_Text">
					<div className="Big-Text">Прозрачные цены</div>
					<div className="Middle-Text">
						Открыто показываем стоимость занятий,
						чтобы вы могли спланировать бюджет на английский.
						Платите по 2 урока или приобретайте пакеты со скидками до 26%.
					</div>
				</div>
			</div>
		);
	}
}

export default Cost;