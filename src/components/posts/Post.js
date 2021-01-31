import { Avatar } from '@material-ui/core';
import React, { forwardRef } from 'react';
import Options from '../inputOptions/Options';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import './Post.css';

const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
	return (
		<div ref={ref} className='post'>
			<div className='post-header'>
				<Avatar src={photoUrl}>{name[0]}</Avatar>
				<div className='post-infos'>
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>
			<div className='post-body'>
				<p>{message}</p>
			</div>
			<div className='post-buttons'>
				<Options Icon={ThumbUpAltOutlinedIcon} title='Like' color='gray' />
				<Options Icon={ChatOutlinedIcon} title='Comment' color='gray' />
				<Options Icon={ShareOutlinedIcon} title='Share' color='gray' />
				<Options Icon={SendOutlinedIcon} title='Send' color='gray' />
			</div>
		</div>
	);
});

export default Post;
