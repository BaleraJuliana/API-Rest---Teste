module.exports = () => {
  const conexaoDB = require('../../config/connection.js');
  const controller = {};

  controller.listarEventosDadoUmaPessoa = (req, res) => {
    conexaoDB.query('SELECT horario from evento, evento_pessoa  where evento.id = evento_pessoa.id_evento AND evento_pessoa.id_pessoa='+req.params.id, (err, pessoas) => {
      res.status(200).json(pessoas);
    });
  }

  controller.listarPessoasDadoUmEvento = (req, res) => {
    conexaoDB.query('SELECT nome from pessoa, evento_pessoa  where pessoa.id = evento_pessoa.id_pessoa AND evento_pessoa.id_evento='+req.params.id, (err, pessoas) => {
      res.status(200).json(pessoas);
    });
  }

  return controller;
}
