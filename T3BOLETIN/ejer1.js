
var expr = prompt("elija una de las siguientes opciones: \n1- Redondeo a su inmediato superior de un número. \n2- Redondeo a su inmediato inferior de un número \n3- Redondeo al número más cercano. \n4- Cálculo del número máximo entre dos dados \n5- Cálculo del número mínimo entre dos dados \n6-Cálculo de un número elevado a otro. \n7-Cálculo de la raíz cuadrada de un número");

switch (expr) {
    case '1':
        var numero = parseFloat(prompt("Introduce un número con decimales: "))
        document.write(Math.ceil(numero));
        break;
    case '2':
        var numero = parseFloat(prompt("Introduce un número con decimales: "))
        document.write(Math.floor(numero));
        break;
    case '3':
        var numero = parseFloat(prompt("Introduce un número con decimales: "))
        document.write(Math.round(numero));
        break;
    case '4':
        var numero1 = parseFloat(prompt("Introduce un número con decimales: "))
        var numero2 = parseFloat(prompt("Introduce un número con decimales: "))
        document.write(Math.max(numero1, numero2));
        break;
    case '5':
        var numero1 = parseFloat(prompt("Introduce un número con decimales: "))
        var numero2 = parseFloat(prompt("Introduce un número con decimales: "))
        document.write(Math.min(numero1, numero2));
        break;
    case '6':
        var numero1 = parseFloat(prompt("Introduce un número con decimales: "))
        var numero2 = parseFloat(prompt("Introduce un número con decimales: "))
        document.write(Math.pow(numero1, numero2));
        break;
    case '7':
        var numero = parseFloat(prompt("Introduce un número con decimales: "))
        document.write(Math.sqrt(numero));
        break;
    default:
        document.write('Opción incorrecta');
}

