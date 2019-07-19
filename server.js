"use strict";
const app = require('./config/express')();
const PORT = app.get('port');
const { dbURL } = require('./config/private');

require('./config/db')(dbURL);
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
