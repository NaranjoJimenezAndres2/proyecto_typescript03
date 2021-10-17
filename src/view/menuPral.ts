import { leerTeclado } from '../view/entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- nuevo Empleado')
    console.log('2.- nuevo Oficinista')
    console.log('3.- nuevo Operario de Maquinaria')
    console.log('4.- mostrar la lista de empleados')
    console.log('5.- salario')
    console.log('6.- borrar empleado')
    console.log('7.- actualizar iban de los empleados')
    console.log('8.- buscador')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}