var router = require('express').Router();

var datos = require('./datos.json'); 

router.get('/', async (req, res) => {

    res.json({
        status: 'ok'
    });

});

//Ejercicio 1
 
router.post('/info/obtenerClientePorId', async (req, res) => { 
 
    let clienteTarget = {};     
    for (let i = 0; i <= datos.length; i++) {         
        if (req.body._id === datos[i]._id) {            
             clienteTarget = datos[i];            
              break; 
            }
        } 

 
    res.json({
        status: 'ok',
        Info: clienteTarget
    });

});

//ejercicio 2
router.post('/calculadora/sumaEnIntervalo', async (req, res) => {
    let suma = 0 ;
    let num1= req.body.numero1;
    let num2= req.body.numero2;

    if(num1 - num1 === 0 && num2 - num2 === 0 ){
        for (var i = num1; i <= num2; i++) {
            suma = suma + i;     
        }
    } else {
        suma = "Datos Incorrectos";
    }

    res.json({
        status: 'ok',
        Suma:  suma 
    });

});
//Ejercicio 3
router.get('/info/limpiarCarteraGlobal', async (req, res) => { 
     
    for (let i = 0; i < datos.length; i++) {         
        
        if (datos[i].carteraPendiente !== 0) {            
             datos[i].carteraPendiente = 0;                           
            }
        } 

    res.json({
        status: 'ok',
        Info: datos
    });

});

//Ejercicio 4
router.post('/info/agregarCliente', async (req, res) => { 
    let idCliente= req.body.id;
    let nombreCliente= req.body.nombre;
    let empresaCliente= req.body.empresa;
    let emailCliente= req.body.email;
    let productosCompradosCliente= req.body.productosComprados;
    let carteraPendienteCliente= req.body.carteraPendiente;
     
    var file = {file:{"cliente": idCliente, "nombre": nombreCliente, "empresa" : empresaCliente , "email" : emailCliente , "productosComprados" : productosCompradosCliente, "carteraPendiente" : carteraPendienteCliente}};

    datos.push(file);

    res.json({
        status: 'ok',
        Info: datos
    });

});

//Ejercicio 5
router.get('/info/obtenerDatosMejorCliente', async (req, res) => { 


    for (let i = 0; i < datos.length; i++) {         
        
        Cantidad = Math.max(datos[i].productosComprados)

    }

    res.json({
        status: 'ok',
        Info: Cantidad
    });

});


//Ejercicio 6
router.post('/manejo/dataCentral', async (req, res) => {
   
    let cadenaRec= req.body.cadena;
    var cantidadDeCaracteres = cadenaRec.length;
    var ResultadoDiv = (cantidadDeCaracteres/2);
    if (Math.floor(ResultadoDiv) === ResultadoDiv ){

        var resultado = cadenaRec.substr((ResultadoDiv-1),2);
    } else {
        var resultado = cadenaRec.substr((ResultadoDiv),1);
    }

    res.json({
        Cantidad:cantidadDeCaracteres,
        status: 'ok',
        Suma:  resultado 
    });

});


module.exports = router;