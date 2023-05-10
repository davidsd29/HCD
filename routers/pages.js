import express from 'express';
import { kledingKeuze } from '../data/storage.js';

const form = express.Router();
form
	.get('/', (req, res) => {
		res.render('pages/index');
	})

	.get('/style', (req, res) => {
		const pageType = 'start';
		res.render('pages/form', {
			pageType,
		});
	})

	.get('/type', (req, res) => {

		kledingKeuze.push(req.query.style);
		console.log(kledingKeuze);
		const pageType = 'type';
		res.render('pages/form', {
			pageType,
		});
	})

	.get('/design', (req, res) => {
		const pageType = 'design';
		const onderkant = req.query.bottom;
		const bovenkant = req.query.top;

		kledingKeuze.push(req.query.top, req.query.bottom);
		console.log(kledingKeuze);
		res.render('pages/form', {
			pageType,
			onderkant,
			bovenkant,
		});
	})

	.get('/kleur/', (req, res) => {

		const hasPattern = (pattern) => {
			if (pattern == 'plane') {
				return 'geen printje';
			} else {
				return 'een printje';
			}
		};
		console.log(kledingKeuze.style);

		const keuze = `Je hebt gekozen voor de ${kledingKeuze[0]} style met een ${
			kledingKeuze[1]
		} en ${kledingKeuze[2]}. Je hebt gekozen voor een ${
			kledingKeuze[1]
		} met ${hasPattern(kledingKeuze[3])} en een ${kledingKeuze[4]} ${
			kledingKeuze[2]
		}`;

		kledingKeuze.push(req.query.print, req.query.fabric);
		console.log(kledingKeuze);

		let bovenkant = kledingKeuze[1];
		const pageType = 'kleur';
		res.render('pages/form', {
			keuze,
			pageType,
			bovenkant,
		});
	});

export default form;
