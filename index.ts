



const Util = {
    isValid: isValid,
    isEmailValid:isEmailValid,
    forceInputFontFamily: forceInputFontFamily
}


/**
 * Verifica se o atributo não vazio ou nulo e menor que o tamanho passado (default é 0)
 * @example 
 *   isValid('ana', 5); //false
 *   isValid('ana', 3); //true
 */
function isValid (valor: string, tamanho?: number) : boolean{ 
    if(!tamanho) tamanho = 0;

    if(!valor || valor == null || valor.length < tamanho){
        return false;   
    }
    return true;
}


/**
 * Verifica se é um email válido tanto em tamanho quanto em caracteres.
 * @param emailValidar 
 * @returns 
 */
function isEmailValid (emailValidar : string ) : boolean  {
    if(emailValidar.length < 1){
      return false;
    }
                
    if ((emailValidar.length != 0) && ((emailValidar.indexOf("@") < 1) || (emailValidar.indexOf('.') == -1))){
     return false;
    }

    return true;
}

function forceInputFontFamily(ref : any, senhaEscondida :boolean) :void{
    if (ref.current) {
        ref.current.setNativeProps({
           secureTextEntry:senhaEscondida,
          style: {
            fontFamily:'Silka',
          },
        });
      }
}


module.exports = Util;