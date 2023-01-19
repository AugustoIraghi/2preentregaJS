// Bueno vamos con la misma idea, una tienda de alcohol, esta vez solo de cerveza
// Voy a tener un array con los distintos tipos de cervezas
// Cada una va a ser un objeto que tenga "Nombre", "Precio", "Potencia" y una "Descripcion"

// Al cliente se le va a dar una bienvenida, preguntar por la cerveza que quiera, darle la posibilidad de conocer la descripcion de la cerveza y la opcion de buscar una cerveza por su "Potencia"
// ofrecer comprar por botellon o pinta
// Tendre que hacer un array vacio que vaya conteniendo la lista de compras de la persona


let valid

class Beer{
    constructor(nombre, precio, alcohol, ibu, descripcion){
        this.nombre = nombre
        this.precio = Number(precio)            // valor de la pinta
        this.alcohol = Number(alcohol)
        this.ibu = Number(ibu)
        this.descripcion = descripcion
        this.cantidad = 0
    }
    agregar(cant){
        this.cantidad += cant
    }
    dtoMayor(){
        this.precio *= 4       // cada botellon viene por 2 litros, la pinta es medio litro, asi que lo multiplico por el equivalente
        this.precio *= 0.85      // 15% de descuento por comprar por botellon
    }
}


const beer0 = new Beer("English Brown",330,5.5,22,"Elaborada con maltas caramelo, un toque de maltas oscuras y lúpulos ingleses, agradable aroma acaramelado y ligeramente balanceada hacia las maltas, con cuerpo medio y de color rojizo. Puede servirse con carnes rojas, hamburguesa y cerdo.")
const beer1 = new Beer("Blonde Ale",350,5.5,18,"Es una cerveza de cuerpo ligero, con amargor medio, aroma cítrico, con buena carbonatación pero con espuma poco persistente, fácil de beber y refrescante. Ideal para acompañar picadas, pizzas y frutos de mar.")
const beer2 = new Beer("Irish Stout Nitro",450,4.7,30,"Es una cerveza de color negro intenso, con aromas a maltas tostadas, café. En boca es una cerveza que se caracteriza por su cuerpo medio ligero, agradable al paladar. Ideal para acompañar quesos fuertes o postre.")
const beer3 = new Beer("Doppelbock",410,8.1,30,"Una Cerveza lager de origen alemán. Color ámbar oscuro. Limpia, rica y maltosa con un carácter bajo a frutas como ciruela y pasas derivados de la malta.")
const beer4 = new Beer("Barley Wine",400,10.5,50,"Cerveza color ámbar, de aroma maltoso y con toques a fruta madura y frutos secos. Sabor acaramelado equilibrado entre la malta y el lúpulo. Posee un acabado largo, licoroso y con gran personalidad.")
const beer5 = new Beer("IPA",330,5.9,50,"Es una cerveza elaborada a base de maltas pálidas y un toque de maltas caramelo, con fuerte sabor y aroma a lúpulos americanos, espuma blanca persistente, de cuerpo medio y con gran carácter. Ideal para maridar con quesos fuertes y picante.")
const beer6 = new Beer("Dubbel",360,7.1,22,"Cerveza de color cobrizo. Ofrece aromas y sabores complejos dulces y tostados por las maltas especiales utilizadas, y frutales debido a los ésteres generados en la fermentación.")
const beer7 = new Beer("Schwarzbier",380,6.2,23,"La Cerveza más oscura de Alemania, originaria de las regiones de Thuringia, Saxony y Franconia. Los sabores se inclinan más hacia el café y chocolate y menos al caramelo. Sin embargo, no es tostada como una Stout. Aroma a malta bajo a moderado, con un dulzor aromático leve y/o notas de malta torrada. De cuerpo medio-liviano a medio.")
const beer8 = new Beer("Honey",330,6.5,18,"De color dorado, cuerpo medio, con un intenso aroma y sabor a miel. Se caracteriza por ser muy fresca, agradable, de gusto dulce. Ideal para calmar la sed o acompañar ensaladas, platos de sabores neutros o afrutados.")
const beer9 = new Beer("Porter",350,6.1,23,"De color oscuro y con reflejos rubí, espuma cremosa y persistente, con notas a café, chocolate y caramelo. Elaborada con una mezcla de maltas caramelo y oscuras. Ideal para acompañar carnes rojas y postres.")


let cervezas = [beer0,beer1,beer2,beer3,beer4,beer5,beer6,beer7,beer8,beer9]




alert("Bienvenido a la tienda DrunkDwarf de cerveza.")
do{
let compraPor = prompt("En DrunkDwarf ofrecemos la venta por pinta o por botellon.\nEl botellon tiene un descuento del 15% respecto a la venta por pinta.\nDesea comprar por Pinta o Botellon?")
compraPor=compraPor.toLowerCase()

if (compraPor == "pinta") {
    valid=true
} 
else if(compraPor=="botellon") {
    cervezas.forEach(element => {
        element.dtoMayor()
    });
    valid=true
} else {
    alert("Por favor seleccione una opcion valida.\nEscriba PINTA o BOTELLON segun como quiera realizar la compra.")
    valid = false
}

cervezas.forEach(element => {
    console.log(element.precio)
});
}while(valid==false)

let listarCervezas = ""
alert("Podra elegir entre las siguientes cervezas o filtrar por las que mas le guste, en caso de querer mas informacion sobre alguna escriba INFO")
let index = 0
cervezas.forEach(element => {
    index++
    let nuevoElemento = `${index}. ${element.nombre}, Alc: ${element.alcohol}%, Ibu: ${element.ibu}, Precio: $${element.precio}\n`;
    listarCervezas+= nuevoElemento
});

moreText= "0. No deseo comprar nada mas.\nSeleccione la cerveza que quiera con el numero de item o INFO si necesita saber mas informacion sobre alguna"
do{
    numeroElegido=prompt(listarCervezas+moreText)
    numeroElegido=numeroElegido.toUpperCase()
//    alert(numeroElegido+typeof(numeroElegido))
if(numeroElegido=="0"){
    moreBeer=false

}else if(numeroElegido=="INFO"){
    infoSobre=prompt("Seleccione sobre que cerveza desea saber más información\n"+listarCervezas)
    descripcionCerveza=cervezas[infoSobre] 
    alert(`${descripcionCerveza.nombre}:\nAlcohol: ${descripcionCerveza.alcohol}%, IBU: ${descripcionCerveza.ibu}\n${descripcionCerveza.descripcion}`)
//    alert("Seleccione que cerveza va a querer comprar a continuacion.")
    moreBeer=true

}else if(numeroElegido>0 && numeroElegido<11){
    numeroElegido=Math.floor(numeroElegido)
    numeroElegido--
    do{
    cantidadElegida=Number(prompt("Que cantidad de cervezas va a querer"))
    if (cantidadElegida>=0) {
        cervezas[numeroElegido].cantidad += cantidadElegida
        valido=true
        alert(`Agregó ${cantidadElegida} ${cervezas[numeroElegido].nombre}`)
    } else {
        alert("Por favor seleccione una opcion valida.")
        valido=false
    }}while(valido==false)
    
//    alert(typeof(cervezas[numeroElegido].cantidad))
//    alert(cervezas[numeroElegido].cantidad)
    moreBeer=true    
} else{
    alert("Por favor seleccione una opcion valida. Escriba un número del 0 al 10 o INFO.")
    moreBeer=true
}

}while(moreBeer==true)





let saldoCarrito = Number(0)

cervezas.forEach(element => {

    console.log(element.cantidad+typeof(element.cantidad)+" "+element.precio+typeof(element.precio))
    
    saldoCarrito= saldoCarrito + element.cantidad * element.precio
});

let resumenDeCompra = ""
cervezas.forEach(element => {
    if (element.cantidad>0) {
        subtotalElemento= element.cantidad * element.precio
        nuevoElemento=`${element.cantidad}  ${element.nombre}         $${subtotalElemento}\n`
        resumenDeCompra+=nuevoElemento
    } else {
        
    }
});

alert("Detalle de su compra:\n"+resumenDeCompra+"\nSubtotal:       $"+saldoCarrito)

// let saldoCarrito = cervezas.reduce((acumulador,actual)=> acumulador+(actual.cantidad*actual.precio),0)
alert("El total de su compra es de $"+saldoCarrito)