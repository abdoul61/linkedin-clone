import { Avatar } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';
import './Options.css';
function Options({ avatar, Icon, title, onClick }) {
	const user = useSelector(selectUser);
	return (
		<div onClick={onClick} className='header-options'>
			{Icon && <Icon className='header-option-icon' />}
			{avatar && (
				<Avatar className='header-option-icon' src={user?.photoUrl}>
					{user?.email[0]}
				</Avatar>
			)}
			<h3 className='header-option-title'>{title}</h3>
		</div>
	);
}

export default Options;
