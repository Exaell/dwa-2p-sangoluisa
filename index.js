const express = require('express');
const hbs = require('hbs');
const app = express();


const fs = require('fs');
//Helpers
hbs.registerHelper('productos', ()=>{
    var jsonString = fs.readFileSync("./data/datos.json");
    var data = JSON.parse(jsonString);
    var products = "";

    for (x of data) {
        products +=
            
            '<div class="img-plato">'+
            ' <img src="'+x.Image+'" alt="Hamburguesa" class="img-responsive"></div><div class="desc-plato-menu"><h4>'+x.Name+'</h4><p class="precio-plato">'+x.cost+'</p><p class="desc-plato">Lorem ipsum dolor sit amet.</p><br><a href="#" class="boton boton-color">Ordenar</a></div>  '                

        ;             
    }

    return new hbs.SafeString(products);
});

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
