import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice';
import { auth } from '../firebase/firebase';
import './Login.css';

function Login() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [profil, setProfil] = useState('');
	const dispatch = useDispatch();

	const loginApp = (e) => {
		e.preventDefault();
		auth.signInWithEmailAndPassword(email, password).then((userAuth) => {
			dispatch(
				login({
					email: userAuth.user.email,
					uid: userAuth.user.uid,
					displayName: userAuth.user.displayName,
					photoUrl: userAuth.user.photoUrl,
				})
			);
		}).catch(error => alert(error.message));
	};
	const register = () => {
		if (!name) {
			return alert('Please enter a Name for your profil');
		}
		if (email && password) {
			auth
				.createUserWithEmailAndPassword(email, password)
				.then((userAuth) => {
					userAuth.user
						.updateProfile({
							displayName: name,
							photoUrl: profil,
						})
						.then(() => {
							dispatch(
								login({
									email: userAuth.user.email,
									uid: userAuth.user.uid,
									displayName: name,
									photoUrl: profil,
								})
							);
						});
				})
				.catch((error) => {
					alert(error.message);
				});
		}
	};
	return (
		<div className='login'>
			<img
				src='https://vvscanteen.com/wp-content/uploads/LinkedIn-1024x532.jpg'
				alt='linkedin'
			/>
			<form className=''>
				<input
					onChange={(e) => setName(e.target.value)}
					value={name}
					placeholder='Full Name (required if registering)'
					type='text'
				/>
				<input
					value={profil}
					onChange={(e) => setProfil(e.target.value)}
					placeholder='Profil pic URL (optional)'
					type='text'
				/>
				<input
					onChange={(e) => setEmail(e.target.value)}
					value={email}
					placeholder='Email'
					type='email'
				/>
				<input
					onChange={(e) => setPassword(e.target.value)}
					value={password}
					placeholder='Password'
					type='password'
				/>
				<button onClick={loginApp} type='submit'>
					Sign In{' '}
				</button>
			</form>
			<p>
				Not A menber ?{'  '}
				<span onClick={register} className='login-register'>
					Register now
				</span>
			</p>
		</div>
	);
}

export default Login;
