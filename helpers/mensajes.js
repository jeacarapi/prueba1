
require('colors');


const mostrarMenu = () =>{

    return new Promise (resolve => {
        console.clear();
        console.log('=========================='.cyan);
        console.log('  Seleccione una opción  '.rainbow.bgWhite);
        console.log('==========================\n'.cyan);

        console.log(`${`1.`.brightCyan} Crear tarea`);
        console.log(`${`2.`.brightCyan} Listar tareas`);
        console.log(`${`3.`.brightCyan} Listar tareas completadas`);
        console.log(`${`4.`.brightCyan} Listar tareas pendientes`);
        console.log(`${`5.`.brightCyan} Completar tareas`);
        console.log(`${`6.`.brightCyan} Borrar tarea`);
        console.log(`${`0.`.brightCyan} Salir\n`);
    
        const readline = require ('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

        readline.question('Seleccione una opción: ', (opt) => {
        readline.close()
        resolve(opt)

    })
    });

    


}


const pausa =() => {

    return new Promise (resolve=>{
        const readline = require ('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readline.question(`\nPresione ${'ENTER'.cyan} para continuar\n`, (opt) => {
        readline.close()
        resolve();
        })
    })
    
}
module.exports = {
    mostrarMenu,
    pausa
}


