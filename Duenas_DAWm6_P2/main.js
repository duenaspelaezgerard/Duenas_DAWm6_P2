const llamarNick = document.querySelector("#btnNick") //PILLAMOS LOS DIV DE LOS BOTONES

llamarNick.addEventListener("click",function(event){ //DECLARO FUNCION Y GUARDO EVENTO CLICK DEL BOTON
    event.preventDefault()
    const nombre = document.querySelector("#nick").value //GUARDO VALOR DEL DIV EN UNA VARIABLE
    valor = modificaNick(nombre) //RECIBO VARIABLE PREVIAMENTE ENVIADA ENTRE ()
    document.querySelector("#lugarNick").innerHTML = valor //INYECTO EN DIV VARIABLE
})

function modificaNick(nick){
    let textoDefinitivo = nick
    if(textoDefinitivo != ""){
        textoDefinitivo = textoDefinitivo.toUpperCase() //PASO A MAYUSCULAS
        textoDefinitivo = textoDefinitivo.trim() //QUITO ESPACIO DELANTE Y DETRAS
        textoDefinitivo = textoDefinitivo.replaceAll(' ', "_") //SUSTITUYO ESPACIO POR BARRA BAJA
        return textoDefinitivo //DEVUELVO VARIABLE
    }else{
        alert("El nick no puede estar en blanco")
    }
}

const llamarFecha = document.querySelector("#btnFecha") //PILLAMOS LOS DIV DE LOS BOTONES

llamarFecha.addEventListener("click",function(event){ //DECLARO FUNCION Y GUARDO EVENTO CLICK DEL BOTON
    event.preventDefault()
    const miFecha = new Date("2001/02/23 21:30:40") //CREO INSTANCIA FECHA MI CUMPLE
    valor = modificaData(miFecha) //RECIBO VARIABLE PREVIAMENTE ENVIADA ENTRE ()
    valor2 = modificaData2(new Date("1963/04/29 04:45:40"))
    valor3 = dias('2001/02/23T03:24:00')

    document.querySelector("#modificaDataLabel").innerHTML = valor //INYECTO EN DIV VARIABLE
    document.querySelector("#modificaData2Label").innerHTML = valor2 //INYECTO EN DIV VARIABLE
    document.querySelector("#ejemplo2").innerHTML =valor

    if (valor3.error) {
        document.querySelector("#dias2").innerHTML = `Error: ${valor3.mensaje}`;
    } else {
        document.querySelector("#dias2").innerHTML = `Días desde la fecha: ${valor3}`;
    }
})

function modificaData(data){
    let fecha = " " //CREO VARIABLE VACÍA

    const meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'] //ARRAY MESES QUE LUEGO COMPARAME CON EL NUMERO QUE ME SALGA EN EL GETMONTH PARA IMPRIMAR LA POSICION DEL VECTOR QUE TENDRA EL MES CORRESPONDIENTE AL VECTOR

    //SACAR CONCATENACION DE PARTES DE LA FECHA CON DISTINTOS PARAMENTROS
    fecha = `<strong>${data.getDate()} ${meses[data.getMonth()]} ${data.getFullYear()} 
    - ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()} </strong>`

    return fecha //DEVUELVO VARIABLE
}

function modificaData2(objecteDate){
    return `<strong>${objecteDate.getFullYear()}/${(objecteDate.getMonth() + 1).toString().padStart(2, '0')}/${objecteDate.getDate()}T ${objecteDate.getHours()}:${objecteDate.getMinutes()}:${objecteDate.getSeconds()}</strong>`; //DEVUELVO STRING FECHA
}

function dias(dataText) {
    const formatoFecha = /^(\d{4})\/(\d{2})\/(\d{2})T(\d{2}):(\d{2}):(\d{2})$/; //CREO VARIABLE CON FORMATO CORRECTO DE LA FECHA
    const matches = dataText.match(formatoFecha); //LA COMPARO 

    if (!matches) { // Comprueba si no hay coincidencias (matches es null o undefined)
        return {   // Si no hay coincidencias, devuelve un objeto
            error: true, 
            mensaje: "El formato no es correcto"
        };
    }

    const [, any, mes, dia, horas, minutos, segundos] = matches // Extraigo partes de la cadena de texto usando expresiones regulares y asigno los valores a las variables correspondientes
    const fechaEntrada = new Date(`${any}/${mes}/${dia} ${horas}:${minutos}:${segundos}`) // Creo un objeto Date utilizando las partes extraídas en el formato 'YYYY/MM/DD HH:mm:ss'
    const fechaActual = new Date() // Obtengo la fecha y hora actuales
    const diferenciaTiempo = fechaActual - fechaEntrada // Calculo la diferencia en milisegundos entre la fecha actual y la fecha de entrada
    const diferenciaDias = Math.floor(diferenciaTiempo / (1000 * 60 * 60 * 24)) // Convierto la diferencia de tiempo a días redondeando hacia abajo
    return diferenciaDias
}


dades = {
    partidas: [
        {	
            avata: 'imagen1.png',
            nick: 'MANOLO',
            puntuacion: 124561,
            fecha: '23/12/2005T12:12:00'
        },
        {
            avatar: 'imagen2.png',
            nick: 'PEDRA',
            puntuacion: 1561,
            fecha: '23/09/2006T13:12:00'
        }
    ],
    ranking: [
        {	
            avatar: 'imagen1.png',
            nick: 'MANOLO',
            puntuacion: 124561
        },
        {
            avatar: 'imagen2.png',
            nick: 'PEDRA',
            puntuacion: 1561
        }
    ],
}

var ls = { 
    setDades: function(dades) {
        var jsonDades = JSON.stringify(dades)
        localStorage.setItem('tetris_dades', jsonDades)
        return true
    },
    getDades: function() {
        var tetrisDades = localStorage.getItem('tetris_dades')
        if (tetrisDades) {
            return JSON.parse(tetrisDades)
        } else {
            return {} // Devuelve un objeto vacío si no hay datos en el localStorage
        }
    }
}

// Uso de los métodos setDades y getDades
ls.setDades(dades)
ls.getDades()

partida ={
    avatar: 'imagen2.png',
    nick: 'PEDRA',
    puntuacion: 1561,
    fecha: '23/09/05T13:12:00'
}

function registrePartidas(partida){
    var dades = ls.getDades() // Obtenir les dades actuals del localstorage
    dades.partidas.push(partida) // Afegir la nova partida a l'array partidas
    ls.setDades(dades) // Actualitzar les dades al localstorage
}



