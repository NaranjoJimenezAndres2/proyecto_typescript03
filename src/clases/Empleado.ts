export class Empleado {
    private _dni: string
    protected _iban: string
    private _email: string
    protected _salarioBase: number
    protected _expedientes: Boolean
    constructor(    
        dni: string, iban: string, email: string, salarioBase: number, expedientes: Boolean){
            this._dni= dni,
            this._iban= iban,
            this._email= email,
            this._salarioBase= salarioBase,
            this._expedientes= expedientes
        }
        
        

          get dni() {
            return this._dni;
          }
          get iban() {
            return this._iban;
          }

          set iban(newIban: string){    // Necesario para poder modificar
            this._iban = newIban
          }

          get email() {
            return this._email;
          }

          get salarioBase() {
            return this._salarioBase;
          }
        
        get expedientes(){
            return this._expedientes;
          } 
          
          salarioFinal(): number | any {
            let salarioFinal: number
            let expedientes: Boolean
            expedientes = this._expedientes
            salarioFinal = this._salarioBase
            if (expedientes == true){
              salarioFinal= salarioFinal *0.95;
            }
            return salarioFinal
          }
          
          todo() {
    return `DNI: ${ this._dni}, 
    IBAN: ${this._iban}, 
    email: ${this._email} , 
    salario Base: ${this._salarioBase}, 
    expedientes : ${this._expedientes} `;
  }

}