import React from 'react';
import './Widget.css';
import InfoIcon from '@material-ui/icons/Info';
import FirberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widget() {
	const newsArticle = (heading, subtile) => (
		<div className='widget-article'>
			<div className='widget-article-left'>
				<FirberManualRecordIcon />
			</div>
			<div className='widget-article-rigth'>
				<h4>{heading}</h4>
				<p>{subtile}</p>
			</div>
		</div>
	);
	return (
		<div className='widget'>
			<div className='widget-header'>
				<h2>LinkedIn News</h2>
				<InfoIcon />
			</div>
			{newsArticle(
				'souleyamine just became the first billionaire immigrant',
				'Top News - 999 readers'
			)}
			{newsArticle(
				'Corona virus just hit the all time high since 2020',
				'Top News'
			)}
			{newsArticle(
				'Corona virus just hit the all time high since 2020',
				'Top News'
			)}
			{newsArticle(
				'Corona virus just hit the all time high since 2020',
				'Top News'
			)}
			{newsArticle(
				'Corona virus just hit the all time high since 2020',
				'Top News'
			)}
			{newsArticle(
				'Corona virus just hit the all time high since 2020',
				'Top News'
			)}
		</div>
	);
}

export default Widget;
