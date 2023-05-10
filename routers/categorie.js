import express from 'express';
import { kledingKeuze } from '../data/storage.js';

const form = express.Router();
const queryString = (req) => req._parsedUrl.search;
const searchParts = (req) => req.split('/');


form
	.get('/', (req, res) => {
		
		const pageType = 'start';
		res.render('pages/form', {
			pageType,
		});
	})

	.get('/p2/', (req, res) => {
		const searchArray = searchParts(req._parsedOriginalUrl.pathname)
        let values = answers.find((object) => { if (object.subject == searchArray[1] && object.pageNumber == 'p6') return object}) || {};

		const obj = {
			pageNumber: 'p5',
			subject: 'bt',
            title: 'Browser Technologies',   
            teaching: req.query.teaching,
            grading: req.query.grading,
            difficulty: req.query.difficulty,
		};

		answers.push(obj);

        const pageType = 'p2';
		const subject = 'bt';
		const title = 'Browser Technologies';

		res.render('pages/form', {
            query: queryString(req),
            pageType,
            subject,
            title,
			values
		});
	})
    
   

export default form;
