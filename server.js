var express   	    = require('express');
	http 	 	    = require('http');
	app 	  	    = express();
	fs 		  	    = require('fs');
	express         = require("express");
	bodyParser      = require("body-parser");
	methodOverride  = require("method-override");

app
	.use(bodyParser())
    .use(methodOverride())

	/*.get('*', function (req, res) {
		res.sendfile('public/main.html');
	})*/ // error: Uncaught SyntaxError: Unexpected token <. Code below works fine.

	var serveStatic = require('serve-static');
	app.use(serveStatic('public', {'index': ['/main.html']}))

	.post('/api/msgSomeone', function(req, res) {
		if(!req.body.mensagem || !req.body.mensagem) {
			return res.status(400).send('faltando mensagem');
		}
		if(!req.body.nome) {
			return res.status(400).send('faltando nome');
		}
		else{
			console.log("Olá: " + req.body.nome + ", Sua mensagem é " + req.body.mensagem);
			return res.status(200).send('OK');
		}
	})

 	.listen(9283);
