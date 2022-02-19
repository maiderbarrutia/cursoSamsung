


/* Mostrar el valor que el usuario ha seleccionado en el elemento rango */
function mostrarValoracion () { 
    const valoracion = document.getElementById("valoracion").value;
    alert ("Has valorado con " + valoracion + " puntos"); 
}

/* Mostrar la cuenta bancaria introducida por el usuario */
function mostrarCuenta (){

    const pais = document.getElementById("pais").value;
    const iban = document.getElementById("iban").value;
    const entidad = document.getElementById("entidad").value;
    const sucursal = document.getElementById("sucursal").value;
    const dc = document.getElementById("dc").value;
    const cuenta = document.getElementById("cuenta").value;

    alert ("Su número de cuenta bancaria es: " + pais + iban + "-" + entidad+ "-" + sucursal+ "-" + dc+ "-" + cuenta);

}

/* Mostrar día de la semana (Lunes a Domingo) */
function mostrarDia(){
    
    const fecha = new Date(document.getElementById("fecha").value);
    const dias=["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    const diaSemana = dias[fecha.getDay()];

    alert("La fecha seleccionada en calendario es: " + diaSemana);

}






/* Validación codigo postal */   
function validarCP(){
    const codigoPostal = document.getElementById("codigoPostal").value;
    const provincia = document.getElementById('provincia').value;
    

    var regions = [
        {code:"12",region:"Alava"},
        {code:"23",region:"Albacete"},
        {code:"45",region:"Alicante"}
    ]; 
    var regions = [{code:"01",region:"Alava"},{code:"02",region:"Albacete"},{code:"03",region:"Alicante"},{code:"04",region:"Almeria"},{code:"05",region:"Avila"},{code:"06",region:"Badajoz"},{code:"07",region:"Islas Baleares"},{code:"08",region:"Barcelona"},{code:"09",region:"Burgos"},{code:"10",region:"Caceres"},{code:"11",region:"Cadiz"},{code:"12",region:"Castellon"},{code:"13",region:"Ciudad Real"},{code:"14",region:"Cordoba"},{code:"15",region:"La Coruña"},{code:"16",region:"Cuenca"},{code:"17",region:"Gerona"},{code:"18",region:"Granada"},{code:"19",region:"Guadalajara"},{code:"20",region:"Guipuzcoa"},{code:"21",region:"Huelva"},{code:"22",region:"Huesca"},{code:"23",region:"Jaen"},{code:"24",region:"Leon"},{code:"25",region:"Lerida"},{code:"26",region:"La Rioja"},{code:"27",region:"Lugo"},{code:"28",region:"Madrid"},{code:"29",region:"Malaga"},{code:"30",region:"Murcia"},{code:"31",region:"Navarra"},{code:"32",region:"Orense"},{code:"33",region:"Asturias"},{code:"34",region:"Palencia"},{code:"35",region:"Las Palmas"},{code:"36",region:"Pontevedra"},{code:"37",region:"Salamanca"},{code:"38",region:"Santa Cruz de Tenerife"},{code:"39",region:"Cantabria"},{code:"40",region:"Segovia"},{code:"41",region:"Sevilla"},{code:"42",region:"Soria"},{code:"43",region:"Tarragona"},{code:"44",region:"Teruel"},{code:"45",region:"Toledo"},{code:"46",region:"Valencia"},{code:"47",region:"Valladolid"},{code:"48",region:"Vizcaya"},{code:"49",region:"Zamora"},{code:"50",region:"Zaragoza"},{code:"51",region:"Ceuta"},{code:"52",region:"Melilla"}];


    if(codigoPostal.length == 5 && codigoPostal <= 53000 && codigoPostal >= 1000){
        var regionCode = codigoPostal.substr(0,2);
        regions.forEach((element)=>{
            if(element.code == regionCode && element.region == provincia){ 
                console.log("Provincia correcta");
                console.log(element);
            }
        });


    }else if(codigoPostal == "" || provincia == ""){
        console.log("Campo vacío, debe introducir un código postal");
        

    }else if(codigoPostal < 5 || codigoPostal > 5){
        console.log("Debe introducir 5 dígitos");
    }
    else{
        console.log("Error. Vuelva a introducir los datos");
    }
    
}