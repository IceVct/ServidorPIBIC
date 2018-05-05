const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const imagemRouter = require('./routes/imagem');

// app.use(express.static(__dirname, 'public'));
//..

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({extended:true,limit: '50mb'}))
app.use(morgan('dev'));

app.use(imagemRouter);

// Error handling
// Handling error in case that the URL requested is not valid or it doesnt exist
app.use(function(req, res, next){
	const error = new Error('Not found!');
	error.status = 404;
	next(error);
});

// Handling erros from the whole application
app.use(function(error, req, res, next){
	res.status(error.status || 500); // if there's no specific error code, returns 500
	res.json({
		error: {
			message: error.message
		}
	});
});

module.exports = app;
