import React from 'react';
import { Avatar } from '@material-ui/core';
import './SideBar.css';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function SiderBar() {
	const user = useSelector(selectUser);
	const recentItem = (topic) => (
		<div className='sidebar-recentitem'>
			<span className='sidebar-hash'>#</span>
			<p>{topic}</p>
		</div>
	);
	return (
		<div className='sidebar'>
			<div className='sidebar-top'>
				<img
					src='https://images.unsplash.com/photo-1517423981203-d246fd44da57?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80'
					alt=''
				/>
				<Avatar src={user.photoUrl} className='sidebar-avatar' >
					{user.email[0]}
				</Avatar>
				<h2>{user.displayName}</h2>
				<h4>{user.email}</h4>
			</div>
			<div className='sidebar-stats'>
				<div className='sidebar-stat'>
					<p>who view you </p>
					<p className='sidebar-stat-number'>2,5433</p>
				</div>
				<div className='sidebar-stat'>
					<p>view on post </p>
					<p className='sidebar-stat-number'>2,222</p>
				</div>
			</div>
			<div className='sidebar-bottom'>
				<p>Recent</p>
				{recentItem('reactjs')}
				{recentItem('Programming')}
				{recentItem('softwareengineering')}
				{recentItem('designer')}
				{recentItem('developer')}
			</div>
		</div>
	);
}

export default SiderBar;
