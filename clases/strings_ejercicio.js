/**
 * DECLARE => var 
 * IMPRIMIR => alert("aqui lo que vas a imprimir")
 * PROMPT("")
 * //Strings propierties 
 * var a = "hola"
 * a.includes()
 * a.substring()
 * a.length
 * a + "." // concat
 */

 /**
  * if(expression){
  *     do this!
  * }else if(expression){
  *     do this another thing
  * }else{
  *     do at the last
  * }
  */
const includes = (a,b)=>a.includes(b)
const replace = (a,b,c)=>a.replace(b,c)

  alert("Comienza!")
var cadena
cadena = prompt("Inserte la cadena aqui")
if(includes(cadena,"a")){
    cadena= replace(cadena,"a","")
}
if (includes(cadena,"e")){
    cadena= replace(cadena,"e","")
}
if (includes(cadena,"i")){
    cadena= replace(cadena,"i","")
}
if (includes(cadena,"o")){
    cadena= replace(cadena,"o","")
}
if (includes(cadena,"u")){
    cadena= replace(cadena,"u","")
}
alert(cadena)
