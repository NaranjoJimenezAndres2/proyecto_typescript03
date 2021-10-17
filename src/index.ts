import { menuPral } from './view/menuPral'
import { leerTeclado } from './view/entradaTeclado'
import { Empleado } from './clases/Empleado'
import { Maquinaria } from './clases/Maquinaria'
import { Oficina } from './clases/Oficina'
import { domainToASCII } from 'url'


let emp: Empleado;
let maq: Maquinaria;
let ofi: Oficina;

let empleados: Array<Empleado> = new Array<Empleado>();

//Creación de un empleado génerico
const nuevoEmp = async () =>  {                                 
    let emp: Empleado;
    const dni = await leerTeclado('\nDNI');
    const iban = await leerTeclado('iban');
    const email = await leerTeclado('email') ;
    const salarioBase = parseInt( await leerTeclado('salarioBase') );
    const expedientes = Boolean( await leerTeclado('expedientes') );
    emp = new Empleado (dni, iban, email, salarioBase,expedientes);
    empleados.push(emp);
    return emp
}

//Creacion de un empleado Oficina
const nuevoOfi = async () =>  {
    let ofi: Oficina;
    const dni = await leerTeclado('\nDNI');
    const iban = await leerTeclado('iban');
    const email = await leerTeclado('email') ;
    const salarioBase = parseInt( await leerTeclado('salarioBase') );
    const expedientes = Boolean( await leerTeclado('expedientes') );
    const horasExtras = parseInt( await leerTeclado('horasExtras') );
    const dietas = parseInt( await leerTeclado('dietas') );
    ofi = new Oficina (dni, iban, email, salarioBase,expedientes, horasExtras, dietas);
    empleados.push(ofi);
    return ofi
}

//Creación de un empleado Maquinaria
const nuevoMaq = async () =>  {
    let maq: Maquinaria;
    const dni = await leerTeclado('\nDNI');
    const iban = await leerTeclado('iban');
    const email = await leerTeclado('email') ;
    const salarioBase = parseInt( await leerTeclado('salarioBase') );
    const expedientes = Boolean( await leerTeclado('expedientes') );
    const peligrosidad = Boolean( await leerTeclado('peligrosidad') );
    const permisos = parseInt( await leerTeclado('permisos') );
    maq = new Maquinaria (dni, iban, email, salarioBase,expedientes, peligrosidad, permisos);
    empleados.push(maq);
    return maq
}

//lista todos los elementos guardados en el array de empleados
const mostrar = async () => {
    for (let a of empleados) {
        console.log(`${a.todo()}`);
      }
    
}

//borra el elemento del array seleccionado
const borrar = async () =>  {
    let i: number
    let registro: number = parseInt(await leerTeclado('\nDni del empleado a eliminar'));
    for(  i = 0; i < empleados.length; i++){ 
        if ( i == registro) { 
            empleados.splice(i, 1);   //cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
            
        }
    
    }console.log('Eliminado');
    

}

// Realiza las operaciones segun los parametros de cada tipo de empleado
const salario = async () => {
    
    for (let a of empleados) {
        console.log(a instanceof Oficina,  Maquinaria);
        console.log(`${a.todo()}, Salario final: ${a.salarioFinal()}`);
      }
    
}

//busca el elemento seleccionado y lo muestra por pantalla
const buscador = async ()  => {
    let objIndex: number
    let DNI: string = (await leerTeclado('\nIntroduce DNI del empleado a buscar: '));
    if (empleados != undefined){
        objIndex = empleados.findIndex((obj => obj.dni == DNI));  //metodo findIndex es de busqueda dentro de un array
        console.log(empleados[objIndex]);
    }
}


//Actualiza el objeto "iban"
const actualizar  = async (emp: Empleado | undefined)  => {
    if (emp != undefined){
            let DNI: string = (await leerTeclado('\nEmpleado a modificar (introduce DNI): '));
            let newIban : string = await leerTeclado('\nNuevo iban');

            empleados.map(function(dato){              //metodo .map crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
            if (dato.dni == DNI){
                dato.iban = newIban;
            }
            return dato;
            });
            console.log (empleados)
    }else{
        console.log(`\Empleado no creado`)
        try{
            console.log(empleados)
        }catch(err){
            console.log(`NO CREADO--- ${err}`)
        }

}

    
}    

//menu
const main = async () => {
    let n: number
    let emp: Empleado | undefined
    //mientras no asigne valor será undefined
    do {
        n = await menuPral()
        switch(n){
            case 1:
                emp = await nuevoEmp()
                break
            case 2:
                ofi = await nuevoOfi()
                break
            case 3:
                maq = await nuevoMaq()
                break
            case 4:
                mostrar()
                break
            case 5:
                salario()
                break
            case 6:
                await borrar()
                break
            case 7:
                await actualizar(emp)
                break
            case 8:
                await buscador()
                break
            case 0:
                console.log('\nAdios')
        }
    }while (n != 0)
}
main()


