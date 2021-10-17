import { Empleado } from './Empleado';
export class Maquinaria extends Empleado {
    private _peligrosidad: boolean;
    private _permisos: number;
  constructor(dni: string, 
    iban: string, 
    email: string, 
    salarioBase: number, 
    expedientes: boolean, 
    peligrosidad: boolean, 
    permisos: number) {
    super(dni,iban,email,salarioBase, expedientes);
    this._peligrosidad = peligrosidad;
    this._permisos=permisos;
  }
  
  salarioFinal(): number | any{
    let salario : number;
    salario = super.salarioFinal();
    let peligrosidad : Boolean;
    let permisos : number;
    let salarioFinal : number;
    permisos = this._permisos;
    peligrosidad = this._peligrosidad;
    let salarioA : number
    let salarioB : number 
    if (this._expedientes == false){
        
        if (peligrosidad == true) {
             salarioA = salario + 200;
                if (permisos > 2 ){
                      salarioB = salarioA + 75;
                      return salarioB
                } else {
                      salarioB=0;
                }
                salarioFinal=salarioA+salarioB;
                return salarioFinal
        } else {
            salarioA = salario
                if (permisos > 2 ){
                    salarioB = salarioA + 75;
                    return salarioB
                } else {
                    salarioB=0;
               }
            salarioFinal=salarioA+salarioB;
            return salarioFinal
        }
        

    }else {

      if (peligrosidad == true) {
          salarioA = (salario + 200)*0.95;
               if (permisos > 2 ){
                      salarioB = (salarioA + (75*0.95));
                      return salarioB
              } else {
                      salarioB=0;
              } 
              salarioFinal=salarioA+salarioB;
              return salarioFinal         
       } else {
         salarioA=salario*0.95;
              if (permisos > 2 ){
                    salarioB = (salarioA + (75*0.95));
                    return salarioB
              } else {
                    salarioB=0;
              }  
       }
        salarioFinal=salarioA+salarioB;
        return salarioFinal
      }
     


  }
  todo(){
    let resultado: string
    resultado = `${super.todo()}, Complemento de peligrosidad: ${this._peligrosidad}, Permisos Maquinas (nº): ${this._permisos} `
    return resultado
  }
}