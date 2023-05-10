import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';


// Routes
import index from './routers/pages.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('view engine', 'ejs');

//Middelware (Has to happen before routing)
app.use(bodyParser.urlencoded({ extended : false }));
app.use(express.static(path.join(__dirname, 'assets')));


app.use('/', index);

app.use((req, res) => {
	res.status(404).render('404');
});


// Callback function
app.listen(1234, () => {
	console.log(`code is running in port:1234`);
});
