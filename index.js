const express = require('express');
const hbs = require('hbs');
const app = express();

app.use(express.static(__dirname + '/public'));

//Motor de vistas de HBS de express
app.set('view engine', 'hbs');

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');

app.get('/', (req, res) => {
    res.render("home",{        
    });
});


app.listen(port, () => {
    console.log('El servidor esta ejecutandose en el puerto ' + port);
});
