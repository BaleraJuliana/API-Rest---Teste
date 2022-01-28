module.exports = app => {
  const pessoaController = require('../controllers/pessoaController')();
  const eventoController = require('../controllers/eventoController')();
  const eventoPessoaController = require('../controllers/eventoPessoaController')();

  app.route('/api/v1/listarPessoas').get(pessoaController.listarPessoas);
  app.route('/api/v1/listarEventos').get(eventoController.listarEventos);
  app.route('/api/v1/listarEvento/:id').get(eventoController.listarEvento);
  app.route('/api/v1/listarPessoa/:id').get(pessoaController.listarPessoa);
  app.route('/api/v1/listarEventosDadoUmaPessoa/:id').get(eventoPessoaController.listarEventosDadoUmaPessoa);
  app.route('/api/v1/listarPessoasDadoUmEvento/:id').get(eventoPessoaController.listarPessoasDadoUmEvento);
  app.route('/api/v1/deletarEvento/:id').get(eventoController.deletarEvento);
  app.route('/api/v1/deletarPessoa/:id').get(pessoaController.deletarPessoa);
  
}