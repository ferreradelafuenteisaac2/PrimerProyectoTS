import { leerTeclado } from '../view/entradaTeclado'

export const menuPral = async () => {
    let n: number
    console.log('\n')
    console.log('1.- Par/Impar')
    console.log('2.- Comparador')
    console.log('3.- Potencias de 2')
    console.log('0.- Salir')
    n = parseInt( await leerTeclado('opción: ') )
    return n
}