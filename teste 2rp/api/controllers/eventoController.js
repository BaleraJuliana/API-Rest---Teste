module.exports = () => {
  const conexaoDB = require('../../config/connection.js');
  const controller = {};

  controller.listarEventos = (req, res) => {
    conexaoDB.query('SELECT * FROM evento', (err, eventos) => {
      res.status(200).json(eventos);
    });
  }

  controller.listarEvento = (req, res) => {
    conexaoDB.query('SELECT * FROM evento WHERE id='+req.params.id, (err, eventos) => {
      res.status(200).json(eventos);
    });
  }

  controller.deletarEvento = (req, res) => {
    conexaoDB.query('DELETE FROM evento WHERE id='+req.params.id)
    .then(() => res.json('Evento deletado !'))
    .catch(err => res.status(400).json('Erro: ' + err))
  }

  return controller;
}
