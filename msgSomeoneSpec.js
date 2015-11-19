var request = require('superagent');
var expect = require('expect.js');
var http = require('http');
var msg = {
	"nome" : "Bruno",
	"mensagem" : "Hello Again"
};

describe('requestPost', function(){
	it('deve devolver status 200(OK)', function(done){
		
		request.post('http://localhost:9283/api/msgSomeone')
			.type('form')
			.send({nome: msg.nome, mensagem: msg.mensagem})
			.end(function(res){
				expect(res.status).to.equal(200);
				done();
			});
	});
});
