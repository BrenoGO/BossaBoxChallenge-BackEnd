"use strict";
require('dotenv').config();
const app = require('./config/express')();
const PORT = app.get('port');

const dbURL = process.env.DB_URL;

require('./config/db')(dbURL);
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
