import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Login from './auth/Login';
import { login, logout, selectUser } from './features/userSlice';
import Feeds from './feeds/Feeds';
import { auth } from './firebase/firebase';
import Header from './Header/Header';
import SiderBar from './sidebar/SiderBar';
import Widget from './widget/Widget';

function App() {
	const dispatch = useDispatch();
	const user = useSelector(selectUser);
	useEffect(() => {
		auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				// the user is authenticate
				dispatch(
					login({
						email: userAuth.email,
						uid: userAuth.uid,
						displayName: userAuth.displayName,
						photoUrl: userAuth.profil,
					})
				);
			} else {
				// the user is log out
				dispatch(logout());
			}
		});
	}, [dispatch]);
   
	return (
		<div className='app'>
			<Header />
			{!user ? (
				<Login />
			) : (
				<div className='app-body'>
					{/* Sidebar */}
					<SiderBar />
					{/*  Feed */}
					<Feeds />
						{/* Widgets */}
						<Widget/>
				</div>
			)}
		</div>
	);
}

export default App;
