import { threadId } from 'worker_threads';
import { Empleado } from './Empleado';
export class Oficina extends Empleado {    private _horasExtras: number;
    private _dietas: number;
    constructor(dni: string, 
        iban: string, 
        email: string, 
        salarioBase: number, 
        expedientes: Boolean, 
        horasExtras: number, 
        dietas:number){
        super(dni,iban,email,salarioBase, expedientes)
        this._horasExtras = horasExtras;
        this._dietas=dietas;
    }
    get horasExtras(){
        return this._horasExtras;
    }

    get dietas(){
        return this._dietas;
    }

    salarioFinal(): number | any{
        let salario : number
        salario = super.salarioFinal()
        let extras : number;
        let dietas: number;2
        let salarioFinal : number;
        extras = this._horasExtras;
        dietas = this._dietas;
        if (this._expedientes == false){
            salarioFinal= salario + (extras * 11.60) + (dietas * 10.80)
            return salarioFinal
        } else{
            salarioFinal = salario + ((extras * 11.60) + (dietas * 10.80) * 0.95)
            return salarioFinal
        }
        
    }

    todo(){
        let resultado: string
        resultado = `${super.todo()}, Numero de Horas Extras: ${this._horasExtras}, Numero de Horas Extras: ${this._dietas} `
        return resultado
      }

}