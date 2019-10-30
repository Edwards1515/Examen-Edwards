var router = require('express').Router();

var datos = require('./datos.json'); 

router.get('/', async (req, res) => {

    res.json({
        status: 'ok'
    });

});

//Ejercicio 1 completo
 
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

//ejercicio 2 completo
router.post('/calculadora/sumaEnIntervalo', async (req, res) => {
    let suma = 0 ;
    let num1= req.body.numero1;
    let num2= req.body.numero2;
if(num1-num1===0 && num2-num2===0){
    if(num1 < num2){
            for (var i = num1; i <= num2; i++) {
            suma = suma + i;     
        }  
    } else {
        for (var i = num2; i <= num1; i++) {
            suma = suma + i;     
        }  
    }
}else{
    suma="Datos erroneos";
}
    res.json({
        status: 'ok',
        Suma:  suma 
    });
});

//Ejercicio 3 completo
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

    const { _id, nombre, empresa, email, productosComprados, carteraPendiente }= req.body;
      
       const newDato = {...req.body};
       datos.push(newDato);
       console.log(newDato);

    res.json({
        status: 'Ok',
        array:datos
        
    });
})

//Ejercicio 5
router.get('/info/obtenerDatosMejorCliente', async (req, res) => { 

        var mayor = 0;
        for (var i = 0; i < datos.length; i++) {

            if (datos[i].productosComprados > mayor ) {
                mayor = datos[i].productosComprados
                nombre = datos[i].nombre;
                Email = datos[i].email;
        }
            }

    res.json({
        status: 'ok',
        nombre: nombre,
        email:Email
    });

});


//Ejercicio 6 completo
router.post('/manejo/dataCentral', async (req, res) => {
   
    let cadenaRecibida= req.body.cadena;
    var cantidadDeCaracteres = cadenaRecibida.length/2;
    if (Math.floor(cantidadDeCaracteres) === cantidadDeCaracteres ){
        var resultado = cadenaRecibida.substr((cantidadDeCaracteres-1),2);
    } else {
        var resultado = cadenaRecibida.substr((cantidadDeCaracteres),1);
    }
    res.json({
        Cantidad:cantidadDeCaracteres,
        status: 'ok',
        Suma:  resultado 
    });
});


module.exports = router;