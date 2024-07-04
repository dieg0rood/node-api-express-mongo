const mongoose = require('mongoose')

async function connection() {
    await mongoose.connect('mongodb+srv://ribeirodiegorod:c1EMKOuCGftodygh@node-api-express-mongo.v1at3fg.mongodb.net/?retryWrites=true&w=majority&appName=node-api-express-mongo')
        .then(() => {
            console.log('Conectado ao MongoDB');
        })
        .catch(err => {
            console.error('Falha ao conectar ao MongoDB', err);
            process.exit(1);
        });
}

module.exports = connection