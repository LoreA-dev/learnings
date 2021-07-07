let sale1 = +prompt(`Ingrese valor de primera venta`); let sale2 = +prompt(`Ingrese valor de segunda venta`); let sale3 = +prompt(`Ingrese valor de tercera venta`);

let porcentOfCommissions = +prompt(`Ingrese porcentaje de comisión`);
let commissions = (sale1+sale2+sale3)*porcentOfCommissions/100;

console.log(commissions);