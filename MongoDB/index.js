const mongoose = require('mongoose');
const { MONGO_URI } = require('./config'); // La URI para establecer la conexión a la bd de mongodb
const axios = require('axios').default; // Para las consultas HTTP
const cheerio = require('cheerio'); // Para procesar HTML
const cron = require('node-cron'); // Para realizar el cron job
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
  .then(() => { console.log('Connection to database established')})
  .catch(err => {
    console.log(`db error ${err.message}`);
    process.exit(-1)
  }); // Se realiza la conexión con la bd de mongodb
const { BreakingNew } = require('./models');


// schedule(cronExpression, callbak)
// un cron expression es una forma de indicar el período en que se va a ejecutar el call back
// Perído: '0 */4 * * *' -> Cada 4 horas
// Perído: '* * * * *' -> Cada minuto
cron.schedule('* * * * *', async () => {
  console.log('Cron Job Executed!');
  const html = await axios.get('https://cnnespanol.cnn.com/');
  const $ = cheerio.load(html.data);
  const titles = $('.news__title');
  titles.each((index, element) => {
    const breakingNew = {
      title: $(element).text().trim(),
      link: $(element).children().attr('href')
    };
    BreakingNew.create([breakingNew]);
  });
});