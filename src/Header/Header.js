import React from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import Options from '../components/HeaderOptions/Options';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch } from 'react-redux';
import { logout } from '../features/userSlice';
import { auth } from '../firebase/firebase';

function Header()

{
	
	const dispatch = useDispatch()
	const loggout = () =>
	{
		dispatch(logout());  
		auth.signOut();
	}
	return (
		<div className='header'>
			<div className='header__left'>
				<img
					src='https://www.flaticon.com/svg/static/icons/svg/174/174857.svg'
					alt='linkedln'
				/>
				<div className='header__left-search'>
					<SearchIcon />
					<input placeholder='Search' type='text' />
				</div>
			</div>
			<div className='header__right'>
				<Options Icon={HomeIcon} title='Home' />
				<Options Icon={SupervisorAccountIcon} title='My Network' />
				<Options Icon={BusinessCenterIcon} title='Jobs' />
				<Options Icon={ChatIcon} title='Messaging' />
				<Options Icon={NotificationsIcon} title='Notifications' />
				<Options
					title='Me'
					onClick={loggout}
					avatar
				/>
			</div> 
		</div>
	);
}

export default Header;