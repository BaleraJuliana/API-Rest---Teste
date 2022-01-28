module.exports = () => {
  const conexaoDB = require('../../config/connection.js');
  const controller = {};

  controller.listarPessoas = (req, res) => {
    conexaoDB.query('SELECT * FROM pessoa', (err, pessoas) => {
      res.status(200).json(pessoas);
    });
  }

  controller.listarPessoa = (req, res) => {
    conexaoDB.query('SELECT * FROM pessoa WHERE id='+req.params.id, (err, pessoas) => {
      res.status(200).json(pessoas);
    });
  }

  controller.deletarPessoa = (req, res) => {
    conexaoDB.query('DELETE FROM pessoa WHERE id='+req.params.id)
    .then(() => res.json('Pessoa deletada !'))
    .catch(err => res.status(400).json('Erro: ' + err))
  }
  
  return controller;
}
