"use strict";
const app = require('./config/express')();
const PORT = app.get('port');

//app.listen(3000, ()=>{console.log('servidor rodando')})
require('./config/db')('mongodb://BrenoGaudereto:1q2w3e@ds221228.mlab.com:21228/bossabox-challenge');
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
