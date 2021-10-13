const lambdaLocal = require('lambda-local');

 var listaTest=[]

 var environment={
    schema:"Campit_PROD",
    host:"testdb.cpdhfwt3rnn2.us-east-1.rds.amazonaws.com",
    user:"admin",
    password:"Calri3jhw21.1",
    BookingEngine:'https://api.sandbox.reservationsteps.ru',
    usernameBE:'titiloxx@gmail.com',
    passwordBE:'bhbP5Upo0o6HVfviPdjk6A6JmSsc67g2',
    environment:'DEV',
    tableName:'Campit-logs-DEV'
}
 
const CrearIngresoDormis=async ()=>{
    //Crear Ingreso
    var response=await lambdaLocal.execute({
    event: {event:{search:'Ivan'},specificUsername:"Unquehue",username:'unquehue',type:'test'},
    lambdaPath: 'built/index.js',
    profilePath: '~/.aws/credentials',
    profileName: 'default',
    environment,
    timeoutMs: 10000
});}

CrearIngresoDormis()

const corroborar=()=>{
    if (listaTest) {
         console.log(`Test pasados: ${listaTest.length} de 20`)
    } 
   
    for (var item of listaTest){
    console.log(item)

}
    console.log("-----------")
    setTimeout(corroborar,2000);
}

corroborar();