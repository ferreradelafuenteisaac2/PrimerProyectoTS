import { menuPral } from './view/menuPral'
import { leerTeclado } from './view/entradaTeclado'

const main = async () => {
    let n: number
    let n1: number, n2: number, n3: number
    do {

        n = await menuPral()
        switch(n){
            case 1:
                console.log("Has elegido Par/Impar")
                n1 = parseInt(await leerTeclado('Introduce un numero'))
                let par: number
                par=n1%2
                if (n1==1) {
                    console.log(`El numero ${n1} es impar`)
                } else {
                    if (n1==2) {
                        console.log(`El numero ${n1} es impar`)
                    } else {
                        if (par==0) {
                            console.log(`El numero ${n1} es par`)
                        } else {
                            console.log(`El numero ${n1} es impar`)
                        }
                    }
                }
                break
            case 2:
                console.log('Has elegido el comparador')
                n1 =  parseInt( await leerTeclado('Dame un número')) 
                n2 =  parseInt( await leerTeclado('Dame otro número'))
                n3 =  parseInt( await leerTeclado('Dame un número más'))
                if (n1==n2 && n2==n3) {
                    console.log('Los numeros son iguales')
                } else {
                    if (n1 > n2) {
                        console.log(`El numero mayor es ${n1}`)
                    } else {
                        if (n2 > n3) {
                            console.log(`El numero mayor es ${n2}`)
                        } else {
                            console.log(`El numero mayor es ${n3}`)
                        }
                    }
                }
                break
            case 3:
                console.log('Has elegido sucesion potencias de 2')
                n1 =  parseInt( await leerTeclado('Dame un número')) 
                let a: number
                let b: number
                let i: number
                a=2
                for(i = 0; i<=n1; i++) {
                    a+=a
                    console.log(`${a}`)
                
                }
                break
            case 0:
                console.log('\nAdios')
                break
            default:
                console.log("Opción incorrecta")
                break
        }
    }while (n != 0)
}
main()



