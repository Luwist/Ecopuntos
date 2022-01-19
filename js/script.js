let map = L.map('map').setView([-34.61079812618841, -58.44970540894825], 12);

// Capas base
let osmLayer = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap<\/a> contributors'
}).addTo(map);

L.geoJson(comunas).addTo(map);

/* BUSCADOR */

const resultado = document.getElementById('resultado');
const boton = document.getElementById('boton');
const formulario = document.getElementById('formulario');
const sugerencias = document.querySelector('.sugerencias');
const menuMobile = document.getElementById('menu-mobile');
const btn = document.getElementById('btn');
let markerNew;
let markerOld;

btn.addEventListener('click', () => {
    console.log('click')
    menuMobile.classList.toggle('menu-items');
})
  
/* Filtro */
  
formulario.addEventListener('keyup', (e) => {
      
    const texto = formulario.value.toUpperCase();

    /* BUSCADOR CON LA TECLA ENTER */
    
    if (texto === "") {
        resultado.style.display='none'
        sugerencias.style.display='none'
    }else{
        resultado.style.display='block'
        sugerencias.style.display='block'
        
        resultado.innerHTML = '';
        

        for (let i = 0; i < 81; i++){
            
            let nombre = puntos.features[i].properties.nombre;

            if (nombre.indexOf(texto) !== -1 ) {
                resultado.innerHTML += `
                <li>${nombre}</li>`
            }
        }
        
        if (resultado.innerHTML === '') {
            resultado.innerHTML += `
            <li><b>${formulario.value}</b> no existe</li>
            `
        }
      
    }

    if (e.key == "Enter"){
        for (let i = 0; i < 81; i++){
            if (texto == puntos.features[i].properties.nombre) {
                markerNew = L.marker([puntos.features[i].geometry.coordinates[1],puntos.features[i].geometry.coordinates[0]])
                .bindPopup('<b>Nombre: </b>' + puntos.features[i].properties.nombre + '<br>' +
                            '<b>Direccion: </b>' + puntos.features[i].properties.direccion + '<br>' +
                            '<b>Materiales: </b>' + puntos.features[i].properties.materiales +'<br>'+
                            '<b>Dia y hora: </b>' + puntos.features[i].properties.dia_hora)
                .addTo(map);
                map.flyTo([puntos.features[i].geometry.coordinates[1],puntos.features[i].geometry.coordinates[0]], 18);
                sugerencias.style.display='none';
                if (map.hasLayer(markerOld) == true) {
                    map.removeLayer(markerOld)
                }
                puntoss.classList.remove('puntos-active')
                map.removeLayer(markers);
                plastic.classList.remove('plastic-active')
                map.removeLayer(plasticMarkers);
                vidrio.classList.remove('vidrio-active')
                map.removeLayer(glass);
                paper.classList.remove('paper-active')
                map.removeLayer(paperMarkers);
                electronicos.classList.remove('electronicos-active')
                map.removeLayer(markerElectronic);

                map.removeLayer(markersArray1)
                map.removeLayer(markersArray2)
                map.removeLayer(markersArray3)
                map.removeLayer(markersArray4)
                map.removeLayer(markersArray5)
                map.removeLayer(markersArray6)
                map.removeLayer(markersArray7)
                map.removeLayer(markersArray8)
                map.removeLayer(markersArray9)
                map.removeLayer(markersArray10)
                map.removeLayer(markersArray11)
                map.removeLayer(markersArray12)
                map.removeLayer(markersArray13)
                map.removeLayer(markersArray14)
                map.removeLayer(markersArray15)
            }
        }
    }
    markerOld = markerNew;
})

/* BOTON DE BUSQUEDA */;
boton.addEventListener('click', () => {
    const texto = formulario.value.toUpperCase();
    
    for (let i = 0; i < 81; i++){
        if (texto == puntos.features[i].properties.nombre) {
            markerNew = L.marker([puntos.features[i].geometry.coordinates[1],puntos.features[i].geometry.coordinates[0]])
            .bindPopup('<b>Nombre: </b>' + puntos.features[i].properties.nombre + '<br>' +
                        '<b>Direccion: </b>' + puntos.features[i].properties.direccion + '<br>' +
                        '<b>Materiales: </b>' + puntos.features[i].properties.materiales +'<br>'+
                        '<b>Dia y hora: </b>' + puntos.features[i].properties.dia_hora)
            .addTo(map);
            map.flyTo([puntos.features[i].geometry.coordinates[1],puntos.features[i].geometry.coordinates[0]], 18);
            sugerencias.style.display='none';
            if (map.hasLayer(markerOld) == true) {
                map.removeLayer(markerOld)
            }
            puntoss.classList.remove('puntos-active')
            map.removeLayer(markers);
            plastic.classList.remove('plastic-active')
            map.removeLayer(plasticMarkers);
            vidrio.classList.remove('vidrio-active')
            map.removeLayer(glass);
            paper.classList.remove('paper-active')
            map.removeLayer(paperMarkers);
            electronicos.classList.remove('electronicos-active')
            map.removeLayer(markerElectronic);

            map.removeLayer(markersArray1)
            map.removeLayer(markersArray2)
            map.removeLayer(markersArray3)
            map.removeLayer(markersArray4)
            map.removeLayer(markersArray5)
            map.removeLayer(markersArray6)
            map.removeLayer(markersArray7)
            map.removeLayer(markersArray8)
            map.removeLayer(markersArray9)
            map.removeLayer(markersArray10)
            map.removeLayer(markersArray11)
            map.removeLayer(markersArray12)
            map.removeLayer(markersArray13)
            map.removeLayer(markersArray14)
            map.removeLayer(markersArray15)
        }
    }

    markerOld = markerNew;
})

/* HACIENDO CLICK EN EL LI LLEVA A LA COORDENADA */

resultado.addEventListener('click', (e) => {

    for (let i = 0; i < 81; i++){
  
        if (e.target.textContent == puntos.features[i].properties.nombre) {
            markerNew = L.marker([puntos.features[i].geometry.coordinates[1],puntos.features[i].geometry.coordinates[0]])
            .bindPopup('<b>Nombre: </b>' + puntos.features[i].properties.nombre + '<br>' +
                        '<b>Direccion: </b>' + puntos.features[i].properties.direccion + '<br>' +
                        '<b>Materiales: </b>' + puntos.features[i].properties.materiales +'<br>'+
                        '<b>Dia y hora: </b>' + puntos.features[i].properties.dia_hora)
            .addTo(map);

            map.flyTo([puntos.features[i].geometry.coordinates[1],puntos.features[i].geometry.coordinates[0]], 18);
            sugerencias.style.display='none'
            formulario.value = textContent = e.target.textContent
            if (map.hasLayer(markerOld) == true) {
                map.removeLayer(markerOld)
            }
            puntoss.classList.remove('puntos-active')
            map.removeLayer(markers);
            plastic.classList.remove('plastic-active')
            map.removeLayer(plasticMarkers);
            vidrio.classList.remove('vidrio-active')
            map.removeLayer(glass);
            paper.classList.remove('paper-active')
            map.removeLayer(paperMarkers);
            electronicos.classList.remove('electronicos-active')
            map.removeLayer(markerElectronic);

            map.removeLayer(markersArray1)
            map.removeLayer(markersArray2)
            map.removeLayer(markersArray3)
            map.removeLayer(markersArray4)
            map.removeLayer(markersArray5)
            map.removeLayer(markersArray6)
            map.removeLayer(markersArray7)
            map.removeLayer(markersArray8)
            map.removeLayer(markersArray9)
            map.removeLayer(markersArray10)
            map.removeLayer(markersArray11)
            map.removeLayer(markersArray12)
            map.removeLayer(markersArray13)
            map.removeLayer(markersArray14)
            map.removeLayer(markersArray15)
        }
    }
    markerOld = markerNew;
})

/* PUNTOS */

let markers = L.featureGroup([coord0, coord1, coord2, coord3, coord4, coord5, coord6, coord7, coord8, coord9, coord10, coord11, coord12, coord13, coord14, coord15, coord16, coord17, coord18, coord19, coord20, coord21, coord22, coord23, coord24, coord25, coord26, coord27, coord28, coord29, coord30, coord31, coord32, coord33, coord34, coord35, coord36, coord37, coord38, coord39, coord40, coord41, coord42, coord43, coord44, coord45, coord46, coord47, coord48, coord49, coord50, coord51, coord52, coord53, coord54, coord55, coord56, coord57, coord58, coord59, coord60, coord61, coord62, coord63, coord64, coord65, coord66, coord67, coord68, coord69, coord70, coord71, coord72, coord73, coord74, coord75, coord76, coord77, coord78, coord79, coord80])

const puntoss = document.getElementById('puntoss');
let puntosActive;
let plasticActive; 
puntoss.addEventListener('click', () => {
    puntosActive = puntoss.classList.toggle('puntos-active');

    if (puntosActive == true) {
        if (map.hasLayer(markerOld) == true) {
                map.removeLayer(markerOld)
            }
        formulario.value = ""
        markers.addTo(map);
        map.setView([-34.61079812618841, -58.44970540894825], 12);
        map.removeLayer(markersArray1)
        map.removeLayer(markersArray2)
        map.removeLayer(markersArray3)
        map.removeLayer(markersArray4)
        map.removeLayer(markersArray5)
        map.removeLayer(markersArray6)
        map.removeLayer(markersArray7)
        map.removeLayer(markersArray8)
        map.removeLayer(markersArray9)
        map.removeLayer(markersArray10)
        map.removeLayer(markersArray11)
        map.removeLayer(markersArray12)
        map.removeLayer(markersArray13)
        map.removeLayer(markersArray14)
        map.removeLayer(markersArray15)
    }else{
        map.removeLayer(markers);
    }

    if (electronicActive == true) {
        electronicos.classList.remove('electronicos-active')
        map.removeLayer(markerElectronic);
    }

    if (plasticActive == true) {
        plastic.classList.remove('plastic-active')
        map.removeLayer(plasticMarkers);
    }

    if (vidrioActive == true) {
        vidrio.classList.remove('vidrio-active')
        map.removeLayer(glass);
    }

    if (paperActive == true) {
        paper.classList.remove('paper-active')
        map.removeLayer(paperMarkers);
    }
})

/* PLASTICO */


const plastic = document.getElementById('plastic');

let plasticMarkers = L.featureGroup([plastic0, plastic1, plastic2, plastic3, plastic4, plastic5, plastic6, plastic7, plastic8, plastic9, plastic10, plastic11, plastic12, plastic13, plastic14, plastic15, plastic16, plastic17, plastic18, plastic19, plastic20, plastic21, plastic22, plastic23, plastic24, plastic25, plastic26, plastic27, plastic28, plastic29, plastic30, plastic31, plastic32, plastic33, plastic34, plastic35, plastic36, plastic37, plastic38, plastic39, plastic40, plastic41, plastic42, plastic43, plastic44, plastic45, plastic46, plastic47, plastic48, plastic49, plastic50, plastic51, plastic52, plastic53, plastic54, plastic55, plastic56, plastic57, plastic58, plastic59, plastic60, plastic61, plastic62, plastic63, plastic64, plastic65, plastic66, plastic67, plastic68, plastic69, plastic70, plastic71, plastic72, plastic73, plastic74, plastic75, plastic76, plastic77, plastic78, plastic79]);



plastic.addEventListener('click', () => {
    plasticActive = plastic.classList.toggle('plastic-active')

    if (plasticActive == true) {
        if (map.hasLayer(markerOld) == true) {
                map.removeLayer(markerOld)
            }
        formulario.value = ""
        plasticMarkers.addTo(map);
        map.setView([-34.61079812618841, -58.44970540894825], 12);
        map.removeLayer(markersArray1)
        map.removeLayer(markersArray2)
        map.removeLayer(markersArray3)
        map.removeLayer(markersArray4)
        map.removeLayer(markersArray5)
        map.removeLayer(markersArray6)
        map.removeLayer(markersArray7)
        map.removeLayer(markersArray8)
        map.removeLayer(markersArray9)
        map.removeLayer(markersArray10)
        map.removeLayer(markersArray11)
        map.removeLayer(markersArray12)
        map.removeLayer(markersArray13)
        map.removeLayer(markersArray14)
        map.removeLayer(markersArray15)
    }else{
        map.removeLayer(plasticMarkers);
    }

    if (electronicActive == true) {
        electronicos.classList.remove('electronicos-active')
        map.removeLayer(markerElectronic);
    }

    if (puntosActive == true) {
        puntoss.classList.remove('puntos-active')
        map.removeLayer(markers);
    }

    if (vidrioActive == true) {
        vidrio.classList.remove('vidrio-active')
        map.removeLayer(glass);
    }

    if (paperActive == true) {
        paper.classList.remove('paper-active')
        map.removeLayer(paperMarkers);
    }
})

/* VIDRIO */

const vidrio = document.getElementById('vidrio');

let glass = L.featureGroup([glass0, glass1, glass2, glass3, glass4, glass5, glass6, glass7, glass8, glass9, glass10, glass11, glass12, glass13, glass14, glass15, glass16, glass17, glass18, glass19, glass20, glass21, glass22, glass23, glass24, glass25, glass26, glass27, glass28, glass29, glass30, glass31, glass32, glass33, glass34, glass35, glass36, glass37, glass38, glass39, glass40, glass41, glass42, glass43, glass44, glass45, glass46, glass47, glass48, glass49, glass50, glass51, glass52, glass53, glass54, glass55, glass56, glass57, glass58, glass59, glass60, glass61, glass62, glass63, glass64, glass65, glass66, glass67, glass68, glass69, glass70, glass71, glass72, glass73, glass74, glass75, glass76, glass77, glass78, glass79]);

let vidrioActive;

vidrio.addEventListener('click', () => {
    vidrioActive = vidrio.classList.toggle('vidrio-active')

    if (vidrioActive == true) {
        if (map.hasLayer(markerOld) == true) {
                map.removeLayer(markerOld)
            }
        formulario.value = ""
        glass.addTo(map);
        map.setView([-34.61079812618841, -58.44970540894825], 12);
        map.removeLayer(markersArray1)
        map.removeLayer(markersArray2)
        map.removeLayer(markersArray3)
        map.removeLayer(markersArray4)
        map.removeLayer(markersArray5)
        map.removeLayer(markersArray6)
        map.removeLayer(markersArray7)
        map.removeLayer(markersArray8)
        map.removeLayer(markersArray9)
        map.removeLayer(markersArray10)
        map.removeLayer(markersArray11)
        map.removeLayer(markersArray12)
        map.removeLayer(markersArray13)
        map.removeLayer(markersArray14)
        map.removeLayer(markersArray15)
    }else{
        map.removeLayer(glass);
    }

    if (electronicActive == true) {
        electronicos.classList.remove('electronicos-active')
        map.removeLayer(markerElectronic);
    }

    if (plasticActive == true) {
        plastic.classList.remove('plastic-active')
        map.removeLayer(plasticMarkers);
    }

    if (puntosActive == true) {
        puntoss.classList.remove('puntos-active')
        map.removeLayer(markers);
    }

    if (paperActive == true) {
        paper.classList.remove('paper-active')
        map.removeLayer(paperMarkers);
    }
})

/* PAPEL Y CARTON */

const paper = document.getElementById('paper');

let paperMarkers = L.featureGroup([paper0, paper1, paper2, paper3, paper4, paper5, paper6, paper7, paper8, paper9, paper10, paper11, paper12, paper13, paper14, paper15, paper16, paper17, paper18, paper19, paper20, paper21, paper22, paper23, paper24, paper25, paper26, paper27, paper28, paper29, paper30, paper31, paper32, paper33, paper34, paper35, paper36, paper37, paper38, paper39, paper40, paper41, paper42, paper43, paper44, paper45, paper46, paper47, paper48, paper49, paper50, paper51, paper52, paper53, paper54, paper55, paper56, paper57, paper58, paper59, paper60, paper61, paper62, paper63, paper64, paper65, paper66, paper67, paper68, paper69, paper70, paper71, paper72, paper73, paper74, paper75, paper76, paper77, paper78, paper79]);

let paperActive;

paper.addEventListener('click', () => {
    paperActive = paper.classList.toggle('paper-active');

    if (paperActive == true) {
        if (map.hasLayer(markerOld) == true) {
                map.removeLayer(markerOld)
            }
        formulario.value = ""
        paperMarkers.addTo(map);
        map.setView([-34.61079812618841, -58.44970540894825], 12);
        map.removeLayer(markersArray1)
        map.removeLayer(markersArray2)
        map.removeLayer(markersArray3)
        map.removeLayer(markersArray4)
        map.removeLayer(markersArray5)
        map.removeLayer(markersArray6)
        map.removeLayer(markersArray7)
        map.removeLayer(markersArray8)
        map.removeLayer(markersArray9)
        map.removeLayer(markersArray10)
        map.removeLayer(markersArray11)
        map.removeLayer(markersArray12)
        map.removeLayer(markersArray13)
        map.removeLayer(markersArray14)
        map.removeLayer(markersArray15)
    }else{
        map.removeLayer(paperMarkers);
    }

    if (electronicActive == true) {
        electronicos.classList.remove('electronicos-active')
        map.removeLayer(markerElectronic);
    }

    if (vidrioActive == true) {
        vidrio.classList.remove('vidrio-active')
        map.removeLayer(glass);
    }

    if (plasticActive == true) {
        plastic.classList.remove('plastic-active')
        map.removeLayer(plasticMarkers);
    }

    if (puntosActive == true) {
        puntoss.classList.remove('puntos-active')
        map.removeLayer(markers);
    }
})

/* ELECTRONICOS */

const electronicos = document.getElementById('electronicos');

let markerElectronic = L.marker(data[80].coordenadas.split(","));

let electronicActive;

electronicos.addEventListener('click', () => {
    electronicActive = electronicos.classList.toggle('electronicos-active')

    if (electronicActive == true) {
        if (map.hasLayer(markerOld) == true) {
                map.removeLayer(markerOld)
            }
        formulario.value = ""
        markerElectronic.addTo(map).bindPopup("<b>Nombre: </b>" + data[80].nombre + "<br>" + "<b>Materiales: </b>" + data[80].materiales + "<br/>" + "<b>Dia y Hora: </b>" + data[80].dia_hora);
        map.flyTo(data[80].coordenadas.split(","), 18);
        map.removeLayer(markersArray1)
        map.removeLayer(markersArray2)
        map.removeLayer(markersArray3)
        map.removeLayer(markersArray4)
        map.removeLayer(markersArray5)
        map.removeLayer(markersArray6)
        map.removeLayer(markersArray7)
        map.removeLayer(markersArray8)
        map.removeLayer(markersArray9)
        map.removeLayer(markersArray10)
        map.removeLayer(markersArray11)
        map.removeLayer(markersArray12)
        map.removeLayer(markersArray13)
        map.removeLayer(markersArray14)
        map.removeLayer(markersArray15)

        map.removeLayer(markers);
        map.removeLayer(plasticMarkers);
        map.removeLayer(glass);
        map.removeLayer(paperMarkers);
    }else{
        map.removeLayer(markerElectronic);
    }

    if (puntosActive == true) {
        puntoss.classList.remove('puntos-active')
        map.removeLayer(markers);
    }

    if (vidrioActive == true) {
        vidrio.classList.remove('vidrio-active')
        map.removeLayer(glass);
    }

    if (plasticActive == true) {
        plastic.classList.remove('plastic-active')
        map.removeLayer(plasticMarkers);
    }

    if (paperActive == true) {
        paper.classList.remove('paper-active')
        map.removeLayer(paperMarkers);
    }

})
let layer;
function highlightFeature(e) {
    layer = e.target;

    layer.setStyle({
        weight: 10,
        color: '#7FBC4E',
        dashArray: '',
        // fillOpacity: 0.7
    });

    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
    info.update(layer.feature.properties);
}

function resetHighlight(e) {
    geojson.resetStyle(e.target);
    info.update();
}
const p = document.getElementById('p-box');
let marker;
/* COMUNA 1  */
let marker1COM1 = L.marker([-34.622177519574876, -58.37586302557907]).bindPopup('<b>Nombre: </b>' + "PLAZA ROSARIO VERA PEÑALOZZA" + '<br>' + '<b>Direccion: </b>' + "SAN JUAN AV. y CHACABUCO" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor / Organicos (jueves)" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker2COM1 = L.marker([-34.62658478264378, -58.381951076210214]).bindPopup('<b>Nombre: </b>' + "PLAZA CONSTITUCION" + '<br>' + '<b>Direccion: </b>' + "LIMA y GARAY, JUAN DE AV." + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker3COM1 = L.marker([-34.59785421574686, -58.383895699757936]).bindPopup('<b>Nombre: </b>' + "PLAZA LIBERTAD" + '<br>' + '<b>Direccion: </b>' + "PARAGUAY y LIBERTAD" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let markersArray1 = L.featureGroup([marker1COM1,marker2COM1,marker3COM1]);
/* COMUNA 2  */
let marker1COM2 = L.marker([-34.588501131097225, -58.39776437114102]).bindPopup('<b>Nombre: </b>' + "PLAZA EMILIO MITRE" + '<br>' + '<b>Direccion: </b>' + "LAS HERAS GENERAL AV. y CANTILO" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker2COM2 = L.marker([-34.59870813398388, -58.391354984840646]).bindPopup('<b>Nombre: </b>' + "PLAZA PETRONILA RODRIGUEZ" + '<br>' + '<b>Direccion: </b>' + "RODRIGUEZ PEÑA y PARAGUAY" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor / Organicos (jueves)" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let markersArray2 = L.featureGroup([marker1COM2,marker2COM2]);
/* COMUNA 3  */
let marker1COM3 = L.marker([-34.617124338980126, -58.403825027617685]).bindPopup('<b>Nombre: </b>' + "PLAZA DR. J. M. VELASCO IBARRA" + '<br>' + '<b>Direccion: </b>' + "JUJUY AV. y MEXICO" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker2COM3 = L.marker([-34.611388378296596, -58.39789749235834]).bindPopup('<b>Nombre: </b>' + "PLAZA 1RO DE MAYO" + '<br>' + '<b>Direccion: </b>' + "YRIGOYEN, HIPOLITO y PASCO" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker3COM3 = L.marker([-34.62424342223405, -58.404640140374106]).bindPopup('<b>Nombre: </b>' + "PLAZA VEA" + '<br>' + '<b>Direccion: </b>' + "SAN JUAN AV. y DEAN FUNES" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker4COM3 = L.marker([-34.625965614507834, -58.40719855296883]).bindPopup('<b>Nombre: </b>' + "PLAZA MARTIN FIERRO" + '<br>' + '<b>Direccion: </b>' + "URQUIZA, GRAL. y COCHABAMBA" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker5COM3 = L.marker([-34.613631218428516, -58.40601951346562]).bindPopup('<b>Nombre: </b>' + "PLAZA MANZANA 66" + '<br>' + '<b>Direccion: </b>' + "MORENO y JUJUY AV." + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let markersArray3 = L.featureGroup([marker1COM3,marker2COM3,marker3COM3,marker4COM3,marker5COM3]);
/* COMUNA 4*/
let marker1COM4 = L.marker([-34.63758603642891, -58.37462626205135]).bindPopup('<b>Nombre: </b>' + "PLAZA COLOMBIA" + '<br>' + '<b>Direccion: </b>' + "MONTES DE OCA, MANUEL AV. y BRANDSEN" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker2COM4 = L.marker([-34.65088541064563, -58.38874398903822]).bindPopup('<b>Nombre: </b>' + "PARQUE LEONARDO PEREYRA" + '<br>' + '<b>Direccion: </b>' + "VELEZ SARSFIELD AV. y IRIARTE, GRAL. AV." + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker3COM4 = L.marker([-34.65198431594878, -58.41608332252841]).bindPopup('<b>Nombre: </b>' + "PLAZA NUEVA POMPEYA" + '<br>' + '<b>Direccion: </b>' + "SAENZ AV. y TRAFUL" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker4COM4 = L.marker([-34.63984843805647, -58.3669041746019]).bindPopup('<b>Nombre: </b>' + "PLAZA MATHEU" + '<br>' + '<b>Direccion: </b>' + "ARAOZ DE LA MADRID, GREGORIO, GRAL. 1050" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker5COM4 = L.marker([-34.639900196580825, -58.39943372595071]).bindPopup('<b>Nombre: </b>' + "PLAZA GUILLERMO Y ALFREDO BARBIERI" + '<br>' + '<b>Direccion: </b>' + "LOS PATOS Y LUNA" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker6COM4 = L.marker([-34.62919359296902, -58.39635368287327]).bindPopup('<b>Nombre: </b>' + "POLO CIRCO" + '<br>' + '<b>Direccion: </b>' + "INCLAN y PICHINCHA AV." + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let markersArray4 = L.featureGroup([marker1COM4,marker2COM4,marker3COM4,marker4COM4,marker5COM4,marker6COM4]);
/* COMUNA 5  */
let marker1COM5 = L.marker([-34.605279406550615, -58.419024844179845]).bindPopup('<b>Nombre: </b>' + "PLAZA ALMAGRO" + '<br>' + '<b>Direccion: </b>' + "SARMIENTO y BULNES" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor / Organicos (jueves)" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker2COM5 = L.marker([-34.62205422547946, -58.41268997611993]).bindPopup('<b>Nombre: </b>' + "PLAZA BOEDO" + '<br>' + '<b>Direccion: </b>' + "ESTADOS UNIDOS y SANCHEZ DE LORIA" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor / Organicos (jueves)" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let markersArray5 = L.featureGroup([marker1COM5,marker2COM5]);
/* COMUNA 6  */
let marker1COM6 = L.marker([-34.60644586617558, -58.43305061428588]).bindPopup('<b>Nombre: </b>' + "PARQUE CENTENARIO" + '<br>' + '<b>Direccion: </b>' + "PATRICIAS ARGENTINAS AV. y ROENTGEN AV." + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker2COM6 = L.marker([-34.61749012013638, -58.43419275028445]).bindPopup('<b>Nombre: </b>' + "PARQUE RIVADAVIA" + '<br>' + '<b>Direccion: </b>' + "RIVADAVIA AV. y BALCARCE, FLORENCIO" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor / Organicos (jueves)" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker3COM6 = L.marker([-34.613702624455414, -58.4586040253146]).bindPopup('<b>Nombre: </b>' + "PLAZA IRLANDA" + '<br>' + '<b>Direccion: </b>' + "ALVAREZ, DONATO TTE. GRAL. y GAONA AV." + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker4COM6 = L.marker([-34.61268419596997, -58.443512319071274]).bindPopup('<b>Nombre: </b>' + "PLAZA AMADEO SABATTINI" + '<br>' + '<b>Direccion: </b>' + "COLPAYO y VALLESE, FELIPE" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let markersArray6 = L.featureGroup([marker1COM6,marker2COM6,marker3COM6,marker4COM6]);
/* COMUNA 7 */
let marker1COM7 = L.marker([-34.63582268838114, -58.44282125182652]).bindPopup('<b>Nombre: </b>' + "PARQUE CHACABUCO" + '<br>' + '<b>Direccion: </b>' + "ASAMBLEA AV. y PUAN" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker2COM7 = L.marker([-34.628061201943325, -58.46423623187248]).bindPopup('<b>Nombre: </b>' + "PLAZA PUEYRREDÓN" + '<br>' + '<b>Direccion: </b>' + "YERBAL y ARTIGAS, JOSE GERVASIO GRAL." + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker3COM7 = L.marker([-34.62123507620766, -58.47369497506933]).bindPopup('<b>Nombre: </b>' + "PLAZA DE LOS PERIODISTAS" + '<br>' + '<b>Direccion: </b>' + "NAZCA  AV. y NEUQUEN" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker4COM7 = L.marker([-34.62150581153228, -58.45615431083606]).bindPopup('<b>Nombre: </b>' + "PLAZA ANGEL GRIS" + '<br>' + '<b>Direccion: </b>' + "AVELLANEDA AV. y CALCENA" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker5COM7 = L.marker([-34.6327398182351, -58.455333589215115]).bindPopup('<b>Nombre: </b>' + "PLAZA DE LA MISERICORDIA" + '<br>' + '<b>Direccion: </b>' + "LAUTARO y BILBAO, FRANCISCO" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor / Organicos (jueves)" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker6COM7 = L.marker([-34.634698532270384, -58.463773197951184]).bindPopup('<b>Nombre: </b>' + "PLAZA 11 DE NOVIEMBRE" + '<br>' + '<b>Direccion: </b>' + "DIRECTORIO AV. e ITALIA" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker7COM7 = L.marker([-34.651102449447045, -58.44332886384152]).bindPopup('<b>Nombre: </b>' + "VILLA 1.11.14" + '<br>' + '<b>Direccion: </b>' + "MORENO, PERITO AV. y VARELA AV." + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker8COM7 = L.marker([-34.636721298284264, -58.42856907370753]).bindPopup('<b>Nombre: </b>' + "FUNDACION EQUIDAD" + '<br>' + '<b>Direccion: </b>' + "MORENO, PERITO AV. y VARELA AV." + '<br>' + '<b>Materiales: </b>' + "CPU completos / Monitores LED y LCD / Teclados y Mouses / Notebooks y Netbooks / Tablets / Memorias RAM - Díscos Rígidos / Procesadores / Motherboards / Cables y periféricos varios / Celulares." + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let markersArray7 = L.featureGroup([marker1COM7,marker2COM7,marker3COM7,marker4COM7,marker5COM7,marker6COM7,marker7COM7,marker8COM7]);
/* COMUNA 8 */
let marker1COM8 = L.marker([-34.66446317742341, -58.469770185887846]).bindPopup('<b>Nombre: </b>' + "PLAZA CALABRIA" + '<br>' + '<b>Direccion: </b>' + "CASTAÑARES AV. y ESCALADA AV." + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker2COM8 = L.marker([-34.68788593026678, -58.47520209229093]).bindPopup('<b>Nombre: </b>' + "PLAZA SUDAMÉRICA" + '<br>' + '<b>Direccion: </b>' + "PIEDRA BUENA AV. y FERNANDEZ DE LA CRUZ, F. GRAL. AV." + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker3COM8 = L.marker([-34.6774380392307, -58.476718523696064]).bindPopup('<b>Nombre: </b>' + "ESTACION LUGANO" + '<br>' + '<b>Direccion: </b>' + "GALLO, DELFIN y LEGUIZAMON, MARTINIANO" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker4COM8 = L.marker([-34.68353283948295, -58.46572644053812]).bindPopup('<b>Nombre: </b>' + "LUGANO 1 Y 2" + '<br>' + '<b>Direccion: </b>' + "OLASCOAGA, MANUEL JOSE CNEL. y SOLDADO DE LA FRONTERA AV." + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let markersArray8 = L.featureGroup([marker1COM8,marker2COM8,marker3COM8,marker4COM8]);
/* COMUNA 9 */
let marker1COM9 = L.marker([-34.6494611405422, -58.51645115231643]).bindPopup('<b>Nombre: </b>' + "PARQUE SANTOJANNI" + '<br>' + '<b>Direccion: </b>' + "DE LA TORRE, LISANDRO y PATRON" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker2COM9 = L.marker([-34.64305864871052, -58.48175070180981]).bindPopup('<b>Nombre: </b>' + "PARQUE AVELLANEDA" + '<br>' + '<b>Direccion: </b>' + "DIRECTORIO AV. y FERNANDEZ" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker3COM9 = L.marker([-34.65734855950942, -58.52042835975665]).bindPopup('<b>Nombre: </b>' + "PLAZA ROMULO ZABALA" + '<br>' + '<b>Direccion: </b>' + "ERCILLA 7502" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker4COM9 = L.marker([-34.64745759337881, -58.484291948862854]).bindPopup('<b>Nombre: </b>' + "PLAZA DOMINGO OLIVERA" + '<br>' + '<b>Direccion: </b>' + "OLIVERA AV. 824" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker5COM9 = L.marker([-34.65080222986006, -58.527003332023234]).bindPopup('<b>Nombre: </b>' + "PLAZA SARGENTO CABRAL" + '<br>' + '<b>Direccion: </b>' + "SUAREZ, JOSE LEON y MARTINEZ DE HOZ" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker6COM9 = L.marker([-34.66418617439263, -58.51443667494902]).bindPopup('<b>Nombre: </b>' + "CARREFOUR MATADEROS" + '<br>' + '<b>Direccion: </b>' + "PAZ, GRAL. AV. 12950" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker7COM9 = L.marker([-34.64551447149208, -58.52321607628464]).bindPopup('<b>Nombre: </b>' + "PLAZA SARMIENTO" + '<br>' + '<b>Direccion: </b>' + "COSQUIN y HUMAITA" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let markersArray9 = L.featureGroup([marker1COM9,marker2COM9,marker3COM9,marker4COM9,marker5COM9,marker6COM9,marker7COM9]);
/* COMUNA 10 */
let marker1COM10 = L.marker([-34.62961178326025, -58.483418715328696]).bindPopup('<b>Nombre: </b>' + "PLAZA VELEZ SARSFIELD" + '<br>' + '<b>Direccion: </b>' + "AVELLANEDA AV. y CHIVILCOY" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker2COM10 = L.marker([-34.6263932944959, -58.50854459907066]).bindPopup('<b>Nombre: </b>' + "PLAZA DON BOSCO" + '<br>' + '<b>Direccion: </b>' + "LOPE DE VEGA AV. y GONZALEZ, ELPIDIO" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker3COM10 = L.marker([-34.628058868827516, -58.52056358402289]).bindPopup('<b>Nombre: </b>' + "PLAZA CIUDAD DE BANFF" + '<br>' + '<b>Direccion: </b>' + "ARREGUI AV. y LISBOA" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker4COM10 = L.marker([-34.616273499750676, -58.52595518112603]).bindPopup('<b>Nombre: </b>' + "PLAZA TOSCANERAS DE VILLA REAL" + '<br>' + '<b>Direccion: </b>' + "LISTA, RAMON CNEL. y MOLIERE" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker5COM10 = L.marker([-34.63327728554474, -58.5216041263903]).bindPopup('<b>Nombre: </b>' + "CARREFOUR J B JUSTO" + '<br>' + '<b>Direccion: </b>' + "ALVAREZ JONTE AV. y PARÍS" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker6COM10 = L.marker([-34.61793979533078, -58.497913733322804]).bindPopup('<b>Nombre: </b>' + "PLAZA MONTE CASTRO" + '<br>' + '<b>Direccion: </b>' + "GUALEGUAYCHU y MIRANDA" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker7COM10 = L.marker([-34.61805987782806, -58.50725849036674]).bindPopup('<b>Nombre: </b>' + "PLAZA MONSEÑOR FERMIN LAFITTE" + '<br>' + '<b>Direccion: </b>' + "ALLENDE y ARREGUI" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker8COM10 = L.marker([-34.62888488720425, -58.49356486588372]).bindPopup('<b>Nombre: </b>' + "PLAZA DE LA BANDERA" + '<br>' + '<b>Direccion: </b>' + "JUSTO, JUAN B. AV. y GAONA AV." + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker9COM10 = L.marker([-34.620204839342705, -58.49235805216775]).bindPopup('<b>Nombre: </b>' + "PLAZA CIUDAD DE UDINE" + '<br>' + '<b>Direccion: </b>' + "CHIVILCOY y CAMARONES" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker10COM10 = L.marker([-34.63559490640259, -58.48250294221071]).bindPopup('<b>Nombre: </b>' + "PLAZA CORONEL RAMON FALCON" + '<br>' + '<b>Direccion: </b>' + "FALCON, RAMON L. CNEL. y BENEDETTI, OSVALDO E. DIP. NAC." + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let markersArray10 = L.featureGroup([marker1COM10,marker2COM10,marker3COM10,marker4COM10,marker5COM10,marker6COM10,marker7COM10,marker8COM10,marker9COM10,marker10COM10]);
/* COMUNA 11 */
let marker1COM11 = L.marker([-34.60554782434701, -58.49367062071346]).bindPopup('<b>Nombre: </b>' + "PLAZA ARISTOBULO DEL VALLE" + '<br>' + '<b>Direccion: </b>' + "CAMPANA y BAIGORRIA" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker2COM11 = L.marker([-34.60038042015674, -58.512593887889544]).bindPopup('<b>Nombre: </b>' + "PLAZA ARENALES" + '<br>' + '<b>Direccion: </b>' + "NUEVA YORK y MERCEDES" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker3COM11 = L.marker([-34.610200355023494, -58.468078583800526]).bindPopup('<b>Nombre: </b>' + "PLAZA ROQUE SAENZ PEÑA" + '<br>' + '<b>Direccion: </b>' + "ESCALADA DE SAN MARTIN, R. y BOYACA" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker4COM11 = L.marker([-34.61271194990151, -58.52269675619225]).bindPopup('<b>Nombre: </b>' + "PLAZA EL MAESTRO" + '<br>' + '<b>Direccion: </b>' + "BEIRO, FRANCISCO AV. y CALDERON DE LA BARCA, PEDRO" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let markersArray11 = L.featureGroup([marker1COM11,marker2COM11,marker3COM11,marker4COM11]);
/* COMUNA 12 */
let marker1COM12 = L.marker([-34.5763941135912, -58.503988534096734]).bindPopup('<b>Nombre: </b>' + "PLAZA LEANDRO N ALEM" + '<br>' + '<b>Direccion: </b>' + "ARTIGAS, JOSE GERVASIO GRAL. y LARSEN" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker2COM12 = L.marker([-34.55153985934512, -58.48193991620853]).bindPopup('<b>Nombre: </b>' + "PARQUE SAAVEDRA 1" + '<br>' + '<b>Direccion: </b>' + "PEREZ, ROQUE y PAROISSIEN" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker3COM12 = L.marker([-34.5600091415174, -58.48764335124689]).bindPopup('<b>Nombre: </b>' + "PLAZA ALBERDI" + '<br>' + '<b>Direccion: </b>' + "LARRALDE, CRISOLOGO AV. y ACHA, MARIANO GRAL." + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker4COM12 = L.marker([-34.57203544371686, -58.48932093193387]).bindPopup('<b>Nombre: </b>' + "PLAZA ECHEVERRIA" + '<br>' + '<b>Direccion: </b>' + "RIVERA, PEDRO I. DR. y BAUNESS" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker5COM12 = L.marker([-34.590918655887236, -58.50099674615336]).bindPopup('<b>Nombre: </b>' + "PLAZA MARTIN RODRIGUEZ" + '<br>' + '<b>Direccion: </b>' + "HABANA y ARGERICH" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker6COM12 = L.marker([-34.57325021366239, -58.475454812340054]).bindPopup('<b>Nombre: </b>' + "PLAZA ZAPIOLA" + '<br>' + '<b>Direccion: </b>' + "JURAMENTO y DONADO" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker7COM12 = L.marker([-34.57077645705021, -58.48141501661056]).bindPopup('<b>Nombre: </b>' + "PLAZA MARCOS SASTRE" + '<br>' + '<b>Direccion: </b>' + "MONROE y MILLER" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker8COM12 = L.marker([-34.55364322714399, -58.497506457056915]).bindPopup('<b>Nombre: </b>' + "PLAZOLETA BALBIN" + '<br>' + '<b>Direccion: </b>' + "BALBIN, RICARDO DR. AV. y ARIAS" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker9COM12 = L.marker([-34.54430345916892, -58.47686858190736]).bindPopup('<b>Nombre: </b>' + "PLAZA MAKENNA" + '<br>' + '<b>Direccion: </b>' + "CRAMER y RAMALLO" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker10COM12 = L.marker([-34.550069519202715, -58.47707613501825]).bindPopup('<b>Nombre: </b>' + "PARQUE SAAVEDRA 2" + '<br>' + '<b>Direccion: </b>' + "GARCIA DEL RIO AV. y PINTO" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let markersArray12 = L.featureGroup([marker1COM12,marker2COM12,marker3COM12,marker4COM12,marker5COM12,marker6COM12,marker7COM12,marker8COM12,marker9COM12,marker10COM12]);
/* COMUNA 13 */
let marker1COM13 = L.marker([-34.5673114271266, -58.46463459803104]).bindPopup('<b>Nombre: </b>' + "PLAZA CASTELLI" + '<br>' + '<b>Direccion: </b>' + "CONDE y JURAMENTO" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker2COM13 = L.marker([-34.54704645232918, -58.46837082181539]).bindPopup('<b>Nombre: </b>' + "PLAZA BALCARCE" + '<br>' + '<b>Direccion: </b>' + "MANZANARES y VUELTA DE OBLIGADO" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker3COM13 = L.marker([-34.56180411542746, -58.45468264478193]).bindPopup('<b>Nombre: </b>' + "PLAZA MANUEL BELGRANO" + '<br>' + '<b>Direccion: </b>' + "CUBA y JURAMENTO AV." + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor / Organicos (jueves)" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker4COM13 = L.marker([-34.53929575588419, -58.447235768542924]).bindPopup('<b>Nombre: </b>' + "FADU / CIUDAD UNIVERSITARIA" + '<br>' + '<b>Direccion: </b>' + "GUIRALDES, INT. 2560" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker5COM13 = L.marker([-34.5809404325573, -58.444776539550325]).bindPopup('<b>Nombre: </b>' + "PLAZA MAFALDA" + '<br>' + '<b>Direccion: </b>' + "DUMONT, SANTOS y MARTINEZ, ENRIQUE GRAL." + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker6COM13 = L.marker([-34.57731445589391, -58.45790190516625]).bindPopup('<b>Nombre: </b>' + "PLAZA SAN MIGUEL DE CORICOITIS" + '<br>' + '<b>Direccion: </b>' + "LORETO, VIRREY y DELGADO" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker7COM13 = L.marker([-34.54941879162428, -58.461966798187085]).bindPopup('<b>Nombre: </b>' + "ESTACIÓN NUÑEZ" + '<br>' + '<b>Direccion: </b>' + "GRECIA y PEDRAZA MANUELA" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor / Organicos (jueves)" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker8COM13 = L.marker([-34.54910467898907, -58.44207304147886]).bindPopup('<b>Nombre: </b>' + "PASEO DE LAS AMERICAS" + '<br>' + '<b>Direccion: </b>' + "RAMSAY y BLANCO ENCALADA" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let markersArray13 = L.featureGroup([marker1COM13,marker2COM13,marker3COM13,marker4COM13,marker5COM13,marker6COM13,marker7COM13,marker8COM13]);
/* COMUNA 14 */
let marker1COM14 = L.marker([-34.589092613878925, -58.42475759495435]).bindPopup('<b>Nombre: </b>' + "PLAZA ARMENIA" + '<br>' + '<b>Direccion: </b>' + "MALABIA y NICARAGUA" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor / Organicos (jueves)" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker2COM14 = L.marker([-34.58935909378594, -58.41610356457189]).bindPopup('<b>Nombre: </b>' + "PLAZA GUEMES" + '<br>' + '<b>Direccion: </b>' + "MEDRANO y CHARCAS" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker3COM14 = L.marker([-34.57686924589542, -58.40397291614977]).bindPopup('<b>Nombre: </b>' + "PLAZA REPÚBLICA DE PERÚ" + '<br>' + '<b>Direccion: </b>' + "FIGUEROA ALCORTA PRES. AV. 3400" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker4COM14 = L.marker([-34.58328773802527, -58.41025487013151]).bindPopup('<b>Nombre: </b>' + "PARQUE LAS HERAS" + '<br>' + '<b>Direccion: </b>' + "SALGUERO, JERONIMO 2450" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let markersArray14 = L.featureGroup([marker1COM14,marker2COM14,marker3COM14,marker4COM14]);
/* COMUNA 15 */
let marker1COM15 = L.marker([-34.58032653185241, -58.46310069037412]).bindPopup('<b>Nombre: </b>' + "PLAZA 25 DE AGOSTO" + '<br>' + '<b>Direccion: </b>' + "CHARLONE y HEREDIA" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker2COM15 = L.marker([-34.59190938168593, -58.44926227385695]).bindPopup('<b>Nombre: </b>' + "PARQUE LOS ANDES" + '<br>' + '<b>Direccion: </b>' + "DORREGO AV. y GUZMAN" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker3COM15 = L.marker([-34.58766989938722, -58.484477635410215]).bindPopup('<b>Nombre: </b>' + "PLAZA NOBEL" + '<br>' + '<b>Direccion: </b>' + "BUCAREST y HAMBURGO" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let marker4COM15 = L.marker([-34.60486322805854, -58.44531073695562]).bindPopup('<b>Nombre: </b>' + "PLAZA BENITO NAZAR" + '<br>' + '<b>Direccion: </b>' + "ANTEZANA y OLAYA" + '<br>' + '<b>Materiales: </b>' + "RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor" + '<br>' + '<b>Dia y hora: </b>' + "Martes a Sábado de 11 a 17 hs.")
let markersArray15 = L.featureGroup([marker1COM15,marker2COM15,marker3COM15,marker4COM15]);
let contador = 0;
let infoasfa = document.getElementsByClassName('info')
function zoomToFeature(e) {
    map.fitBounds(e.target.getBounds()  );
    switch (true) {
        case layer.feature.properties.COMUNAS === "1":
            for (let i = 0; i < 80; i++){
                if (puntos.features[i].properties.comuna == "COMUNA 1") {
                    markersArray1.addTo(map)
                    formulario.value = ""
                    if (map.hasLayer(markerOld) == true) {
                        map.removeLayer(markerOld)
                    }
                    map.removeLayer(markers);
                    map.removeLayer(plasticMarkers);
                    map.removeLayer(glass);
                    map.removeLayer(paperMarkers);
                    map.removeLayer(markerElectronic);

                    plastic.classList.remove('plastic-active')
                    paper.classList.remove('paper-active')
                    vidrio.classList.remove('vidrio-active')
                    puntoss.classList.remove('puntos-active')
                    electronicos.classList.remove('electronicos-active')

                    map.removeLayer(markersArray2)
                    map.removeLayer(markersArray3)
                    map.removeLayer(markersArray4)
                    map.removeLayer(markersArray5)
                    map.removeLayer(markersArray6)
                    map.removeLayer(markersArray7)
                    map.removeLayer(markersArray8)
                    map.removeLayer(markersArray9)
                    map.removeLayer(markersArray10)
                    map.removeLayer(markersArray11)
                    map.removeLayer(markersArray12)
                    map.removeLayer(markersArray13)
                    map.removeLayer(markersArray14)
                    map.removeLayer(markersArray15)
                }
            }
        break;
        case layer.feature.properties.COMUNAS === "2":
            for (let i = 0; i < 80; i++){
                if (puntos.features[i].properties.comuna == "COMUNA 2") {
                    markersArray2.addTo(map)
                    formulario.value = ""
                    if (map.hasLayer(markerOld) == true) {
                        map.removeLayer(markerOld)
                    }
                    map.removeLayer(markers);
                    map.removeLayer(plasticMarkers);
                    map.removeLayer(glass);
                    map.removeLayer(paperMarkers);
                    map.removeLayer(markerElectronic);

                    plastic.classList.remove('plastic-active')
                    paper.classList.remove('paper-active')
                    vidrio.classList.remove('vidrio-active')
                    puntoss.classList.remove('puntos-active')
                    electronicos.classList.remove('electronicos-active')

                    map.removeLayer(markersArray1)
                    map.removeLayer(markersArray3)
                    map.removeLayer(markersArray4)
                    map.removeLayer(markersArray5)
                    map.removeLayer(markersArray6)
                    map.removeLayer(markersArray7)
                    map.removeLayer(markersArray8)
                    map.removeLayer(markersArray9)
                    map.removeLayer(markersArray10)
                    map.removeLayer(markersArray11)
                    map.removeLayer(markersArray12)
                    map.removeLayer(markersArray13)
                    map.removeLayer(markersArray14)
                    map.removeLayer(markersArray15)
                }
            }
            info.update(layer.feature.properties);
        break;
        case layer.feature.properties.COMUNAS === "3":
            for (let i = 0; i < 80; i++){
                if (puntos.features[i].properties.comuna == "COMUNA 3") {
                    markersArray3.addTo(map)
                    formulario.value = ""
                    if (map.hasLayer(markerOld) == true) {
                        map.removeLayer(markerOld)
                    }
                    map.removeLayer(markers);
                    map.removeLayer(plasticMarkers);
                    map.removeLayer(glass);
                    map.removeLayer(paperMarkers);
                    map.removeLayer(markerElectronic);

                    plastic.classList.remove('plastic-active')
                    paper.classList.remove('paper-active')
                    vidrio.classList.remove('vidrio-active')
                    puntoss.classList.remove('puntos-active')
                    electronicos.classList.remove('electronicos-active')

                    map.removeLayer(markersArray1)
                    map.removeLayer(markersArray2)
                    map.removeLayer(markersArray4)
                    map.removeLayer(markersArray5)
                    map.removeLayer(markersArray6)
                    map.removeLayer(markersArray7)
                    map.removeLayer(markersArray8)
                    map.removeLayer(markersArray9)
                    map.removeLayer(markersArray10)
                    map.removeLayer(markersArray11)
                    map.removeLayer(markersArray12)
                    map.removeLayer(markersArray13)
                    map.removeLayer(markersArray14)
                    map.removeLayer(markersArray15)
                }
            }
        break;
        case layer.feature.properties.COMUNAS === "4":
            for (let i = 0; i < 80; i++){
                if (puntos.features[i].properties.comuna == "COMUNA 4") {
                    markersArray4.addTo(map)
                    formulario.value = ""
                    if (map.hasLayer(markerOld) == true) {
                        map.removeLayer(markerOld)
                    }
                    map.removeLayer(markers);
                    map.removeLayer(plasticMarkers);
                    map.removeLayer(glass);
                    map.removeLayer(paperMarkers);
                    map.removeLayer(markerElectronic);
                    
                    plastic.classList.remove('plastic-active')
                    paper.classList.remove('paper-active')
                    vidrio.classList.remove('vidrio-active')
                    puntoss.classList.remove('puntos-active')
                    electronicos.classList.remove('electronicos-active')

                    map.removeLayer(markersArray1)
                    map.removeLayer(markersArray2)
                    map.removeLayer(markersArray3)
                    map.removeLayer(markersArray5)
                    map.removeLayer(markersArray6)
                    map.removeLayer(markersArray7)
                    map.removeLayer(markersArray8)
                    map.removeLayer(markersArray9)
                    map.removeLayer(markersArray10)
                    map.removeLayer(markersArray11)
                    map.removeLayer(markersArray12)
                    map.removeLayer(markersArray13)
                    map.removeLayer(markersArray14)
                    map.removeLayer(markersArray15)
                }
            }
        break;
        case layer.feature.properties.COMUNAS === "5":
            for (let i = 0; i < 80; i++){
                if (puntos.features[i].properties.comuna == "COMUNA 5") {
                    markersArray5.addTo(map)
                    formulario.value = ""
                    if (map.hasLayer(markerOld) == true) {
                        map.removeLayer(markerOld)
                    }
                    map.removeLayer(markers);
                    map.removeLayer(plasticMarkers);
                    map.removeLayer(glass);
                    map.removeLayer(paperMarkers);
                    map.removeLayer(markerElectronic);

                    plastic.classList.remove('plastic-active')
                    paper.classList.remove('paper-active')
                    vidrio.classList.remove('vidrio-active')
                    puntoss.classList.remove('puntos-active')
                    electronicos.classList.remove('electronicos-active')

                    map.removeLayer(markersArray1)
                    map.removeLayer(markersArray2)
                    map.removeLayer(markersArray3)
                    map.removeLayer(markersArray4)
                    map.removeLayer(markersArray6)
                    map.removeLayer(markersArray7)
                    map.removeLayer(markersArray8)
                    map.removeLayer(markersArray9)
                    map.removeLayer(markersArray10)
                    map.removeLayer(markersArray11)
                    map.removeLayer(markersArray12)
                    map.removeLayer(markersArray13)
                    map.removeLayer(markersArray14)
                    map.removeLayer(markersArray15)
                }
            }
        break;
        case layer.feature.properties.COMUNAS === "6":
            for (let i = 0; i < 80; i++){
                if (puntos.features[i].properties.comuna == "COMUNA 6") {
                    markersArray6.addTo(map)
                    formulario.value = ""
                    if (map.hasLayer(markerOld) == true) {
                        map.removeLayer(markerOld)
                    }
                    map.removeLayer(markers);
                    map.removeLayer(plasticMarkers);
                    map.removeLayer(glass);
                    map.removeLayer(paperMarkers);
                    map.removeLayer(markerElectronic);

                    plastic.classList.remove('plastic-active')
                    paper.classList.remove('paper-active')
                    vidrio.classList.remove('vidrio-active')
                    puntoss.classList.remove('puntos-active')
                    electronicos.classList.remove('electronicos-active')

                    map.removeLayer(markersArray1)
                    map.removeLayer(markersArray2)
                    map.removeLayer(markersArray3)
                    map.removeLayer(markersArray4)
                    map.removeLayer(markersArray5)
                    map.removeLayer(markersArray7)
                    map.removeLayer(markersArray8)
                    map.removeLayer(markersArray9)
                    map.removeLayer(markersArray10)
                    map.removeLayer(markersArray11)
                    map.removeLayer(markersArray12)
                    map.removeLayer(markersArray13)
                    map.removeLayer(markersArray14)
                    map.removeLayer(markersArray15)
                }
            }
        break;
        case layer.feature.properties.COMUNAS === "7":
            for (let i = 0; i < 80; i++){
                if (puntos.features[i].properties.comuna == "COMUNA 7") {
                    markersArray7.addTo(map)
                    formulario.value = ""
                    if (map.hasLayer(markerOld) == true) {
                        map.removeLayer(markerOld)
                    }
                    map.removeLayer(markers);
                    map.removeLayer(plasticMarkers);
                    map.removeLayer(glass);
                    map.removeLayer(paperMarkers);
                    map.removeLayer(markerElectronic);

                    plastic.classList.remove('plastic-active')
                    paper.classList.remove('paper-active')
                    vidrio.classList.remove('vidrio-active')
                    puntoss.classList.remove('puntos-active')
                    electronicos.classList.remove('electronicos-active')

                    map.removeLayer(markersArray1)
                    map.removeLayer(markersArray2)
                    map.removeLayer(markersArray3)
                    map.removeLayer(markersArray4)
                    map.removeLayer(markersArray5)
                    map.removeLayer(markersArray6)
                    map.removeLayer(markersArray8)
                    map.removeLayer(markersArray9)
                    map.removeLayer(markersArray10)
                    map.removeLayer(markersArray11)
                    map.removeLayer(markersArray12)
                    map.removeLayer(markersArray13)
                    map.removeLayer(markersArray14)
                    map.removeLayer(markersArray15)
                }
            }
        break;
        case layer.feature.properties.COMUNAS === "8":
            for (let i = 0; i < 80; i++){
                if (puntos.features[i].properties.comuna == "COMUNA 8") {
                    markersArray8.addTo(map)
                    formulario.value = ""
                    if (map.hasLayer(markerOld) == true) {
                        map.removeLayer(markerOld)
                    }
                    map.removeLayer(markers);
                    map.removeLayer(plasticMarkers);
                    map.removeLayer(glass);
                    map.removeLayer(paperMarkers);
                    map.removeLayer(markerElectronic);

                    plastic.classList.remove('plastic-active')
                    paper.classList.remove('paper-active')
                    vidrio.classList.remove('vidrio-active')
                    puntoss.classList.remove('puntos-active')
                    electronicos.classList.remove('electronicos-active')

                    map.removeLayer(markersArray1)
                    map.removeLayer(markersArray2)
                    map.removeLayer(markersArray3)
                    map.removeLayer(markersArray4)
                    map.removeLayer(markersArray5)
                    map.removeLayer(markersArray6)
                    map.removeLayer(markersArray7)
                    map.removeLayer(markersArray9)
                    map.removeLayer(markersArray10)
                    map.removeLayer(markersArray11)
                    map.removeLayer(markersArray12)
                    map.removeLayer(markersArray13)
                    map.removeLayer(markersArray14)
                    map.removeLayer(markersArray15)
                }
            }
        break;
        case layer.feature.properties.COMUNAS === "9":
            for (let i = 0; i < 80; i++){
                if (puntos.features[i].properties.comuna == "COMUNA 9") {
                    markersArray9.addTo(map)
                    formulario.value = ""
                    if (map.hasLayer(markerOld) == true) {
                        map.removeLayer(markerOld)
                    }
                    map.removeLayer(markers);
                    map.removeLayer(plasticMarkers);
                    map.removeLayer(glass);
                    map.removeLayer(paperMarkers);
                    map.removeLayer(markerElectronic);

                    plastic.classList.remove('plastic-active')
                    paper.classList.remove('paper-active')
                    vidrio.classList.remove('vidrio-active')
                    puntoss.classList.remove('puntos-active')
                    electronicos.classList.remove('electronicos-active')

                    map.removeLayer(markersArray1)
                    map.removeLayer(markersArray2)
                    map.removeLayer(markersArray3)
                    map.removeLayer(markersArray4)
                    map.removeLayer(markersArray5)
                    map.removeLayer(markersArray6)
                    map.removeLayer(markersArray7)
                    map.removeLayer(markersArray8)
                    map.removeLayer(markersArray10)
                    map.removeLayer(markersArray11)
                    map.removeLayer(markersArray12)
                    map.removeLayer(markersArray13)
                    map.removeLayer(markersArray14)
                    map.removeLayer(markersArray15)
                }
            }
        break;
        case layer.feature.properties.COMUNAS === "10":
            for (let i = 0; i < 80; i++){
                if (puntos.features[i].properties.comuna == "COMUNA 10") {
                    markersArray10.addTo(map)
                    formulario.value = ""
                    if (map.hasLayer(markerOld) == true) {
                        map.removeLayer(markerOld)
                    }
                    map.removeLayer(markers);
                    map.removeLayer(plasticMarkers);
                    map.removeLayer(glass);
                    map.removeLayer(paperMarkers);
                    map.removeLayer(markerElectronic);

                    plastic.classList.remove('plastic-active')
                    paper.classList.remove('paper-active')
                    vidrio.classList.remove('vidrio-active')
                    puntoss.classList.remove('puntos-active')
                    electronicos.classList.remove('electronicos-active')

                    map.removeLayer(markersArray1)
                    map.removeLayer(markersArray2)
                    map.removeLayer(markersArray3)
                    map.removeLayer(markersArray4)
                    map.removeLayer(markersArray5)
                    map.removeLayer(markersArray6)
                    map.removeLayer(markersArray7)
                    map.removeLayer(markersArray8)
                    map.removeLayer(markersArray9)
                    map.removeLayer(markersArray11)
                    map.removeLayer(markersArray12)
                    map.removeLayer(markersArray13)
                    map.removeLayer(markersArray14)
                    map.removeLayer(markersArray15)
                }
            }
        break;
        case layer.feature.properties.COMUNAS === "11":
            for (let i = 0; i < 80; i++){
                if (puntos.features[i].properties.comuna == "COMUNA 11") {
                    markersArray11.addTo(map)
                    formulario.value = ""
                    if (map.hasLayer(markerOld) == true) {
                        map.removeLayer(markerOld)
                    }
                    map.removeLayer(markers);
                    map.removeLayer(plasticMarkers);
                    map.removeLayer(glass);
                    map.removeLayer(paperMarkers);
                    map.removeLayer(markerElectronic);

                    plastic.classList.remove('plastic-active')
                    paper.classList.remove('paper-active')
                    vidrio.classList.remove('vidrio-active')
                    puntoss.classList.remove('puntos-active')
                    electronicos.classList.remove('electronicos-active')

                    map.removeLayer(markersArray1)
                    map.removeLayer(markersArray2)
                    map.removeLayer(markersArray3)
                    map.removeLayer(markersArray4)
                    map.removeLayer(markersArray5)
                    map.removeLayer(markersArray6)
                    map.removeLayer(markersArray7)
                    map.removeLayer(markersArray8)
                    map.removeLayer(markersArray9)
                    map.removeLayer(markersArray10)
                    map.removeLayer(markersArray12)
                    map.removeLayer(markersArray13)
                    map.removeLayer(markersArray14)
                    map.removeLayer(markersArray15)
                }
            }
        break;
        case layer.feature.properties.COMUNAS === "12":
            for (let i = 0; i < 80; i++){
                if (puntos.features[i].properties.comuna == "COMUNA 12") {
                    markersArray12.addTo(map)
                    formulario.value = ""
                    if (map.hasLayer(markerOld) == true) {
                        map.removeLayer(markerOld)
                    }
                    map.removeLayer(markers);
                    map.removeLayer(plasticMarkers);
                    map.removeLayer(glass);
                    map.removeLayer(paperMarkers);
                    map.removeLayer(markerElectronic);

                    plastic.classList.remove('plastic-active')
                    paper.classList.remove('paper-active')
                    vidrio.classList.remove('vidrio-active')
                    puntoss.classList.remove('puntos-active')
                    electronicos.classList.remove('electronicos-active')

                    map.removeLayer(markersArray1)
                    map.removeLayer(markersArray2)
                    map.removeLayer(markersArray3)
                    map.removeLayer(markersArray4)
                    map.removeLayer(markersArray5)
                    map.removeLayer(markersArray6)
                    map.removeLayer(markersArray7)
                    map.removeLayer(markersArray8)
                    map.removeLayer(markersArray9)
                    map.removeLayer(markersArray10)
                    map.removeLayer(markersArray11)
                    map.removeLayer(markersArray13)
                    map.removeLayer(markersArray14)
                    map.removeLayer(markersArray15)
                }
            }
        break;
        case layer.feature.properties.COMUNAS === "13":
            for (let i = 0; i < 80; i++){
                if (puntos.features[i].properties.comuna == "COMUNA 13") {
                    markersArray13.addTo(map)
                    formulario.value = ""
                    if (map.hasLayer(markerOld) == true) {
                        map.removeLayer(markerOld)
                    }
                    map.removeLayer(markers);
                    map.removeLayer(plasticMarkers);
                    map.removeLayer(glass);
                    map.removeLayer(paperMarkers);
                    map.removeLayer(markerElectronic);

                    plastic.classList.remove('plastic-active')
                    paper.classList.remove('paper-active')
                    vidrio.classList.remove('vidrio-active')
                    puntoss.classList.remove('puntos-active')
                    electronicos.classList.remove('electronicos-active')

                    map.removeLayer(markersArray1)
                    map.removeLayer(markersArray2)
                    map.removeLayer(markersArray3)
                    map.removeLayer(markersArray4)
                    map.removeLayer(markersArray5)
                    map.removeLayer(markersArray6)
                    map.removeLayer(markersArray7)
                    map.removeLayer(markersArray8)
                    map.removeLayer(markersArray9)
                    map.removeLayer(markersArray10)
                    map.removeLayer(markersArray11)
                    map.removeLayer(markersArray12)
                    map.removeLayer(markersArray14)
                    map.removeLayer(markersArray15)
                }
            }
        break;
        case layer.feature.properties.COMUNAS === "14":
            for (let i = 0; i < 80; i++){
                if (puntos.features[i].properties.comuna == "COMUNA 14") {
                    markersArray14.addTo(map)
                    formulario.value = ""
                    if (map.hasLayer(markerOld) == true) {
                        map.removeLayer(markerOld)
                    }
                    map.removeLayer(markers);
                    map.removeLayer(plasticMarkers);
                    map.removeLayer(glass);
                    map.removeLayer(paperMarkers);
                    map.removeLayer(markerElectronic);

                    plastic.classList.remove('plastic-active')
                    paper.classList.remove('paper-active')
                    vidrio.classList.remove('vidrio-active')
                    puntoss.classList.remove('puntos-active')
                    electronicos.classList.remove('electronicos-active')

                    map.removeLayer(markersArray1)
                    map.removeLayer(markersArray2)
                    map.removeLayer(markersArray3)
                    map.removeLayer(markersArray4)
                    map.removeLayer(markersArray5)
                    map.removeLayer(markersArray6)
                    map.removeLayer(markersArray7)
                    map.removeLayer(markersArray8)
                    map.removeLayer(markersArray9)
                    map.removeLayer(markersArray10)
                    map.removeLayer(markersArray11)
                    map.removeLayer(markersArray12)
                    map.removeLayer(markersArray13)
                    map.removeLayer(markersArray15)
                }
            }
        break;
        case layer.feature.properties.COMUNAS === "15":
            for (let i = 0; i < 80; i++){
                if (puntos.features[i].properties.comuna == "COMUNA 15") {
                    markersArray15.addTo(map)
                    formulario.value = ""
                    if (map.hasLayer(markerOld) == true) {
                        map.removeLayer(markerOld)
                    }
                    map.removeLayer(markers);
                    map.removeLayer(plasticMarkers);
                    map.removeLayer(glass);
                    map.removeLayer(paperMarkers);
                    map.removeLayer(markerElectronic);

                    plastic.classList.remove('plastic-active')
                    paper.classList.remove('paper-active')
                    vidrio.classList.remove('vidrio-active')
                    puntoss.classList.remove('puntos-active')
                    electronicos.classList.remove('electronicos-active')

                    map.removeLayer(markersArray1)
                    map.removeLayer(markersArray2)
                    map.removeLayer(markersArray3)
                    map.removeLayer(markersArray4)
                    map.removeLayer(markersArray5)
                    map.removeLayer(markersArray6)
                    map.removeLayer(markersArray7)
                    map.removeLayer(markersArray8)
                    map.removeLayer(markersArray9)
                    map.removeLayer(markersArray10)
                    map.removeLayer(markersArray11)
                    map.removeLayer(markersArray12)
                    map.removeLayer(markersArray13)
                    map.removeLayer(markersArray14)
                }
            }
        break;
    default:
        break;
    }
}
function onEachFeature(feature, layer) {
    layer.on({
        mouseover: highlightFeature,
        mouseout: resetHighlight,
        click: zoomToFeature
    });
}

geojson = L.geoJson(comunas, {
    onEachFeature: onEachFeature
}).addTo(map);

let info = L.control();

info.onAdd = function (map) {
    this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
    this.update();
    return this._div;
};

// method that we will use to update the control based on feature properties passed
info.update = function (props) {
    this._div.innerHTML = (props ?
        `<b>Comuna</b> ` + props.COMUNAS : 'Seleccione una comuna');
};
info.addTo(map);