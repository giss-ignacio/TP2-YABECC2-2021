/**
 * Dado un string s que contiene solo los caracteres 
 * '(', ')','{','}', '[' y ']' determinar si el string enviado es valido
 * 
 * Un string es valido si
 * 1.- Todas las aperturas ( { y [ tienen su cierre.
 * 2.- Todos los cierres estan en el orden correcto 
 * TIP: Utilizando pilas y colas de arrays
 * TIP: Utilizar cadenas y replace
 */

/**
 * 
 * @param {string} s 
 * @return {boolean}
 */
// ((()))
const isValid = function(s){ 
    let aux = -1;
    let respuesta = true;
    while (s.length !=0) {     
        aux = s.length;
        s = s.replace("()","");
        s = s.replace("[]","");
        s = s.replace("{}","");
        // puede reemplazar algo?
        if(aux === s.length){ 
            respuesta = false;
            break;
        }
    }
    return respuesta;
};

const isValid2 = function(s) {

    let aux = -1;
    let respuesta = true;
    let pila = new Array();
    for (let i = 0; i < s.length; i++) {

        let c = s[i];

        if (c == '(' || c == '[' || c == '{') {
            pila.push(c);
            continue;
        }

        let ultimo;
        switch (c) {
            case ')':
                ultimo = pila.pop();
                if (ultimo != '(')
                    return false;
                break;
            case ']':
                ultimo = pila.pop();
                if (ultimo != '[')
                    return false;
                break;
            case '}':
                ultimo = pila.pop();
                if (ultimo != '{')
                    return false;
                break;
        }
    };

    return pila.length == 0;

}

// TESTS
console.log(isValid('()') === true);
console.log(isValid('([{}])') === true);
console.log(isValid('()[]{}')=== true);
console.log(isValid('(}') === false);
console.log(isValid('([)]') === false);
console.log(isValid('{}{}(){[()]}') === true);

console.log(isValid2('()') === true);
console.log(isValid2('([{}])') === true);
console.log(isValid2('()[]{}')=== true);
console.log(isValid2('(}') === false);
console.log(isValid2('([)]') === false);
console.log(isValid2('{}{}(){[()]}') === true);

// VOLVEMOS 9:36