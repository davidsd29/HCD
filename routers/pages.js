import express from 'express';
import { kledingKeuze } from '../data/storage.js';

const form = express.Router();
const queryString = (req) => req._parsedUrl.search;
const searchParts = (req) => req.split('/');

// import { index, end, done } from '../controllers/pages.js';

form
	.get('/', (req, res) => {res.render('pages/index');})
    
    .get('/style', (req, res) => {
        const searchArray = searchParts(req._parsedOriginalUrl.pathname);
		let values =
			kledingKeuze.find((object) => {
				if (
					object.style == searchArray[1] &&
					object.pageType == searchArray[0]
				)
					return object;
			}) || {};

		const pageType = 'start';
		res.render('pages/form', {
			pageType,
			values,
		});
	})

	.get('/type', (req, res) => {
		const searchArray = searchParts(req._parsedOriginalUrl.pathname);
		let values =
			kledingKeuze.find((object) => {
				if (
					object.top == searchArray[1] &&
					object.pageType == searchArray[0]
				)
					return object;
			}) || {};

		const categorie = {
			pageType: 'type',
			style: req.query.style,
		};

		kledingKeuze.push(categorie);
		const pageType = 'type';
		res.render('pages/form', {
			pageType,
			values,
		});
	})

	.get('/design', (req, res) => {
		const searchArray = searchParts(req._parsedOriginalUrl.pathname);
		let values =
			kledingKeuze.find((object) => {
				if (
					object.topPattern == searchArray[1] &&
					object.pageType == searchArray[0]
				)
					return object;
			}) || {};

		const pageType = 'design';
		const onderkant = req.query.bottom;
		const bovenkant = req.query.top;

		const type = {
			top: req.query.top,
			bottom: req.query.bottom,
		};

		kledingKeuze.push(type);

		res.render('pages/form', {
            values,
			pageType,
			onderkant,
			bovenkant,
		});
	})

	.get('/kleur/', (req, res) => {
        const searchArray = searchParts(req._parsedOriginalUrl.pathname);
		let values =
			kledingKeuze.find((object) => {
				if (
					object.topColor == searchArray[1] &&
					object.pageType == searchArray[0]
				)
					return object;
			}) || {};
            
		const pattern = {
			topPattern: req.query.print,
			bottomPattern: req.query.fabric,
		};

		kledingKeuze.push(pattern);
		console.log(kledingKeuze);

		const pageType = 'kleur';
		res.render('pages/form', {
			pageType,
            values
		});
	});

export default form;
