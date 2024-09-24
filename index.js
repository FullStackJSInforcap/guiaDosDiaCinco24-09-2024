const express = require('express');
const hbs = require('hbs');

const app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('inicio');
});

app.get('/contactos', (req, res) => {
    res.render('contacto');
});

app.get('/galeria', (req, res) => {
    res.render('galeria');
});

app.get('/ventas', (req, res) => {
    res.render('ventas', {
        usuario: 'Marcos',
        ventas: [
            1500,
            15000,
            20000
        ]
    });
});

app.listen(3000, () => {
    console.log('Corriendo en el puerto 3000');
});