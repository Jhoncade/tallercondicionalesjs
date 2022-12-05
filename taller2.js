//1. Ejercicio

// num1=parseInt(prompt("Digita un numero"))
// num2=parseInt(prompt("Digita otro numero"))
// if (num1>num2){
//     console.log(num1,num2)}
// else{
//     console.log(num2,num1)}

//2. Ejercicio

// num=parseInt(prompt("Digita un numero entre 1 y 10"))
// if (num<=0 || num>=11){
//     console.log("Numero no valido digita el numero entre 1 y 10")
// }
// else{
//     switch (num){
//         case 1:
//             console.log("Impar")
//         break
//         case 2:
//             console.log("Par")
//         break
//         case 3:
//             console.log("Impar")
//         break
//         case 4:
//             console.log("Par")
//         break
//         case 5:
//             console.log("Impar")
//         break
//         case 6:
//             console.log("Par")
//         break
//         case 7:
//             console.log("Impar")
//         break
//         case 8:
//             console.log("Par")
//         break
//         case 9:
//             console.log("Impar")
//         break
//         case 10:
//             console.log("Par")
//         break

//     }}

//3. Ejercicio

// num=parseInt(prompt("Digita un numero entre 1 y 10"))
// if (num<=0 || num>=11){
//     console.log("Numero no valido digita el numero entre 1 y 10")
// }
// else{
//     switch (num){
//         case 1:
//             console.log("Uno")
//         break
//         case 2:
//             console.log("Dos")
//         break
//         case 3:
//             console.log("Tres")
//         break
//         case 4:
//             console.log("Cuatro")
//         break
//         case 5:
//             console.log("Cinco")
//         break
//         case 6:
//             console.log("Seis")
//         break
//         case 7:
//             console.log("Siete")
//         break
//         case 8:
//             console.log("Ocho")
//         break
//         case 9:
//             console.log("Nueve")
//         break
//         case 10:
//             console.log("Diez")
//         break

//     }}

//4. Ejercicio

// costo=0
// duracion=parseInt(prompt("Digita la duracion de la llamada"))
// if (duracion >0 && duracion<=3){
//     costo=200
//     console.log("el coste de la llamada es: ",costo)}
// else if (duracion>3){
//     costo=duracion*100-100
//     console.log("el coste de la llamada es: ",costo)}
// else{
//     console.log("Error en los datos")}


//5. Ejercicio

// preciob=7000
// precion=8000
// cantidadb=40
// cantidadn=48
// vendidosb=parseInt(prompt("Digita la cantidad de conejos blancos a comprar"))
// vendidosn=parseInt(prompt("Digita la cantidad de conejos negros a comprar"))
// console.log("La cantidad de conejos vendidas es de: ",vendidosb+vendidosn)
// totalb=vendidosb*preciob
// totaln=vendidosn*precion
// console.log("El precio de los conejos vendidas es de: ",totalb+totaln)
// if (vendidosb>vendidosn){
//     console.log("La cantidad de conejos que mas se vendio son conejos blancos con un total de: "+vendidosb)}
// else if(vendidosb===vendidosn){
//     console.log("La cantidad de conejos se vendieron por igual con un total de: ",vendidosb,"Blancos",vendidosn,"Negros")}
// else{
//     console.log("La cantidad de conejos que mas se vendio son conejos negros con un total de: "+vendidosn)}



//6. Ejercicio

// Notae1=parseFloat(prompt("Digita la nota de la primera evaluacion"))
// Notae2=parseFloat(prompt("Digita la nota de la segunda evaluacion"))
// Notae3=parseFloat(prompt("Digita la nota de la tercera evaluacion"))
// Notat1=parseFloat(prompt("Digita la nota del primer trabajo"))
// Notat2=parseFloat(prompt("Digita la nota de la segundo trabajo"))

// if (Notae1 <1 || Notae2 <1 || Notae3 <1 && Notae1>5 || Notae2>5 || Notae3 >5){
//     console.log("Error en alguna de las notas de las evaluaciones")}
// else if (Notat1 <1 || Notat2 <1  && Notat1>5 || Notat2>5 ){
//     console.log("Error en alguna de las notas de los trabajos")}
// else {
// totale=((Notae1+Notae2+Notae3)/3)*0.6
// totalt=((Notat1+Notat2)/2)*0.4
// console.log("Su definitiva es de",totale+totalt)
// }


//7. Ejercicio


// articulo=(prompt("Digita el nombre del articulo"))
// precio=parseFloat(prompt("Digita el precio del articulo"))
// cantidad=parseInt(prompt("Digita la cantidad"))
// clave=parseInt(prompt("Digita la clave"))

// if (clave===1){
//     subtotal=precio*cantidad
//     desc=subtotal*0.1
//     total=subtotal-desc
//     console.log("El articulo",articulo,"El descuento del articulo:",desc,"El precio a pagar seria de:",total)
// }
// else if (clave===2){
//     subtotal=precio*cantidad
//     desc=subtotal*0.2
//     total=subtotal-desc
//     console.log("El articulo",articulo,"El descuento del articulo:",desc,"El precio a pagar seria de:",total)
// }
// else{ console.log("Error en la clave")}



//8. Ejercicio



// presu=parseFloat(prompt("Digite el presupuesto "))
// psqu=parseInt(prompt("Digite el porcentaje para psquiatria "))
// pedi=parseInt(prompt("Digite el porcentaje para pediatria "))
// trau=parseInt(prompt("Digite el porcentaje para traumatologia "))
// if (trau+pedi+psqu==100){
//     console.log("porcentaje correcto")
//     console.log("El porcentaje asignado para psquiatria es",psqu,
//     "presupuesto obtenido es",presu*psqu/100,
//     "El porcentaje asignado para pediatria es ",pedi,
//     "presupuesto obtenido es",presu*pedi/100,
//     "El porcentaje asignado para traumatologu es",trau,
//     "presupuesto obtenido es ",presu*trau/100)}
// else{
//     console.log("Error en el porcentaje")}



//9. Ejercicio

dias=parseFloat(prompt("dias de estancia: "))
kilo=parseFloat(prompt("kilometros de recorrido hacia el lugar dedestino: "))
vkilo = 2.5
precio=kilo*v_kilo

if(dias>=7 && kilo>800){
  v_desc = precio*0.3}
else if (dias<7 && kilo<800){
  v_desc = 0}
else{
  dias=0
  kilo =0

precio_total_ida=(precio-v_desc)
precio_total_ida_vuelta = precio_total_ida*2

console.log("El valor del voleto ida y vueelta es:",precio_total_ida_vuelta)}