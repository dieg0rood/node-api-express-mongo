const mongoose = require('mongoose')

async function connection() {
    await mongoose.connect('MY_URI')
        .then(() => {
            console.log('Conectado ao MongoDB');
        })
        .catch(err => {
            console.error('Falha ao conectar ao MongoDB', err);
            process.exit(1);
        });
}

module.exports = connection