"use strict"
const app = require('./config/express')();
const PORT = app.get('port'); 

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});