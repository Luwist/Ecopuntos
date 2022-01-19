const data = [
    {
        nombre: 'PLAZA CASTELLI',
        direccion: 'CONDE y JURAMENTO',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.5673114271266, -58.46463459803104'
    },
    {
        nombre: 'PLAZA ARMENIA',
        direccion: 'MALABIA y NICARAGUA',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor / Organicos (jueves)',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.589092613878925, -58.42475759495435'
    },
    {
        nombre: 'PLAZA BALCARCE',
        direccion: 'MANZANARES y VUELTA DE OBLIGADO',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.54704645232918, -58.46837082181539'
    },
    {
        nombre: 'PLAZA LEANDRO N ALEM',
        direccion: 'ARTIGAS, JOSE GERVASIO GRAL. y LARSEN',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.5763941135912, -58.503988534096734'
    },
    {
        nombre: 'PLAZA VELEZ SARSFIELD',
        direccion: 'AVELLANEDA AV. y CHIVILCOY',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.62961178326025, -58.483418715328696'
    },
    {
        nombre: 'PARQUE SANTOJANNI',
        direccion: 'DE LA TORRE, LISANDRO y PATRON',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.6494611405422, -58.51645115231643'
    },
    {
        nombre: 'PLAZA CALABRIA',
        direccion: 'CASTAÑARES AV. y ESCALADA AV.',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.66446317742341, -58.469770185887846'
    },
    {
        nombre: 'PARQUE CHACABUCO',
        direccion: 'ASAMBLEA AV. y PUAN',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.63582268838114, -58.44282125182652'
    },
    {
        nombre: 'PLAZA ALMAGRO',
        direccion: 'SARMIENTO y BULNES',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor / Organicos (jueves)',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.605279406550615, -58.419024844179845'
    },
    {
        nombre: 'PLAZA COLOMBIA',
        direccion: 'MONTES DE OCA, MANUEL AV. y BRANDSEN',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.63758603642891, -58.37462626205135'
    },
    {
        nombre: 'PLAZA DR. J. M. VELASCO IBARRA',
        direccion: 'JUJUY AV. y MEXICO',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.617124338980126, -58.403825027617685'
    },
    {
        nombre: 'PLAZA ROSARIO VERA PEÑALOZZA',
        direccion: 'SAN JUAN AV. y CHACABUCO',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor / Organicos (jueves)',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.622177519574876, -58.37586302557907'
    },
    {
        nombre: 'PARQUE CENTENARIO',
        direccion: 'PATRICIAS ARGENTINAS AV. y ROENTGEN AV.',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.60644586617558, -58.43305061428588'
    },
    {
        nombre: 'PARQUE SAAVEDRA 1',
        direccion: 'PEREZ, ROQUE y PAROISSIEN',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.55153985934512, -58.48193991620853'
    },
    {
        nombre: 'PLAZA 25 DE AGOSTO',
        direccion: 'CHARLONE y HEREDIA',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.58032653185241, -58.46310069037412'
    },
    {
        nombre: 'PLAZA ARISTOBULO DEL VALLE',
        direccion: 'CAMPANA y BAIGORRIA',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.60554782434701, -58.49367062071346'
    },
    {
        nombre: 'PLAZA 1RO DE MAYO',
        direccion: 'YRIGOYEN, HIPOLITO y PASCO',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.611388378296596, -58.39789749235834'
    },
    {
        nombre: 'PLAZA BOEDO',
        direccion: 'ESTADOS UNIDOS y SANCHEZ DE LORIA',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor / Organicos (jueves)',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.62205422547946, -58.41268997611993'
    },
    {
        nombre: 'PLAZA SUDAMÉRICA',
        direccion: 'PIEDRA BUENA AV. y FERNANDEZ DE LA CRUZ, F. GRAL. AV.',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.68788593026678, -58.47520209229093'
    },
    {
        nombre: 'PARQUE LOS ANDES',
        direccion: 'DORREGO AV. y GUZMAN',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.59190938168593, -58.44926227385695'
    },
    {
        nombre: 'PLAZA GUEMES',
        direccion: 'MEDRANO y CHARCAS',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.58935909378594, -58.41610356457189'
    },
    {
        nombre: 'PLAZA MANUEL BELGRANO',
        direccion: 'CUBA y JURAMENTO AV.',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor / Organicos (jueves)',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.56180411542746, -58.45468264478193'
    },
    {
        nombre: 'PLAZA ARENALES',
        direccion: 'NUEVA YORK y MERCEDES',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.60038042015674, -58.512593887889544'
    },
    {
        nombre: 'PLAZA DON BOSCO',
        direccion: 'LOPE DE VEGA AV. y GONZALEZ, ELPIDIO',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.6263932944959, -58.50854459907066'
    },
    {
        nombre: 'PARQUE AVELLANEDA',
        direccion: 'DIRECTORIO AV. y FERNANDEZ',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.64305864871052, -58.48175070180981'
    },
    {
        nombre: 'PLAZA PUEYRREDÓN',
        direccion: 'YERBAL y ARTIGAS, JOSE GERVASIO GRAL.',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.628061201943325, -58.46423623187248'
    },
    {
        nombre: 'PARQUE RIVADAVIA',
        direccion: 'RIVADAVIA AV. y BALCARCE, FLORENCIO',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor / Organicos (jueves)',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.61749012013638, -58.43419275028445'
    },
    {
        nombre: 'PLAZA VEA',
        direccion: 'SAN JUAN AV. y DEAN FUNES',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.62424342223405, -58.404640140374106'
    },
    {
        nombre: 'PLAZA IRLANDA',
        direccion: 'ALVAREZ, DONATO TTE. GRAL. y GAONA AV.',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.613702624455414, -58.4586040253146'
    },
    {
        nombre: 'PLAZA ALBERDI',
        direccion: 'LARRALDE, CRISOLOGO AV. y ACHA, MARIANO GRAL.',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.5600091415174, -58.48764335124689'
    },
    {
        nombre: 'PLAZA CIUDAD DE BANFF',
        direccion: 'ARREGUI AV. y LISBOA',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.628058868827516, -58.52056358402289'
    },
    {
        nombre: 'PLAZA ROQUE SAENZ PEÑA',
        direccion: 'ESCALADA DE SAN MARTIN, R. y BOYACA',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.610200355023494, -58.468078583800526'
    },
    {
        nombre: 'PLAZA DE LOS PERIODISTAS',
        direccion: 'NAZCA AV. y NEUQUEN',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.62123507620766, -58.47369497506933'
    },
    {
        nombre: 'PLAZA NOBEL',
        direccion: 'BUCAREST y HAMBURGO',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.58766989938722, -58.484477635410215'
    },
    {
        nombre: 'PLAZA BENITO NAZAR',
        direccion: 'ANTEZANA y OLAYA',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.60486322805854, -58.44531073695562'
    },
    {
        nombre: 'PLAZA ECHEVERRIA',
        direccion: 'RIVERA, PEDRO I. DR. y BAUNESS',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.57203544371686, -58.48932093193387'
    },
    {
        nombre: 'PLAZA ROMULO ZABALA',
        direccion: 'ERCILLA 7502',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.65734855950942, -58.52042835975665'
    },
    {
        nombre: 'PLAZA DOMINGO OLIVERA',
        direccion: 'OLIVERA AV. 824',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.64745759337881, -58.484291948862854'
    },
    {
        nombre: 'FADU / CIUDAD UNIVERSITARIA',
        direccion: 'GUIRALDES, INT. 2560',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.53929575588419, -58.447235768542924'
    },
    {
        nombre: 'PLAZA EMILIO MITRE',
        direccion: 'LAS HERAS GENERAL AV. y CANTILO',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.588501131097225, -58.39776437114102'
    },
    {
        nombre: 'PLAZA PETRONILA RODRIGUEZ',
        direccion: 'RODRIGUEZ PEÑA y PARAGUAY',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor / Organicos (jueves)',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.59870813398388, -58.391354984840646'
    },
    {
        nombre: 'PLAZA MARTIN FIERRO',
        direccion: 'URQUIZA, GRAL. y COCHABAMBA',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.625965614507834, -58.40719855296883'
    },
    {
        nombre: 'PARQUE LEONARDO PEREYRA',
        direccion: 'VELEZ SARSFIELD AV. y IRIARTE, GRAL. AV.',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.65088541064563, -58.38874398903822'
    },
    {
        nombre: 'PLAZA ANGEL GRIS',
        direccion: 'AVELLANEDA AV. y CALCENA',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.62150581153228, -58.45615431083606'
    },
    {
        nombre: 'PLAZA MARTIN RODRIGUEZ',
        direccion: 'HABANA y ARGERICH',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.590918655887236, -58.50099674615336'
    },
    {
        nombre: 'PLAZA ZAPIOLA',
        direccion: 'JURAMENTO y DONADO',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.57325021366239, -58.475454812340054'
    },
    {
        nombre: 'PLAZA MAFALDA',
        direccion: 'DUMONT, SANTOS y MARTINEZ, ENRIQUE GRAL.',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.5809404325573, -58.444776539550325'
    },
    {
        nombre: 'PLAZA REPÚBLICA DE PERÚ',
        direccion: 'FIGUEROA ALCORTA PRES. AV. 3400',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.57686924589542, -58.40397291614977'
    },
    {
        nombre: 'PLAZA CONSTITUCION',
        direccion: 'LIMA y GARAY, JUAN DE AV.',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.62658478264378, -58.381951076210214'
    },
    {
        nombre: 'PLAZA NUEVA POMPEYA',
        direccion: 'SAENZ AV. y TRAFUL',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.65198431594878, -58.41608332252841'
    },
    {
        nombre: 'PLAZA MATHEU',
        direccion: 'ARAOZ DE LA MADRID, GREGORIO, GRAL. 1050',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.63984843805647, -58.3669041746019'
    },
    {
        nombre: 'PLAZA GUILLERMO Y ALFREDO BARBIERI',
        direccion: 'LOS PATOS Y LUNA',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.639900196580825, -58.39943372595071'
    },
    {
        nombre: 'PLAZA DE LA MISERICORDIA',
        direccion: 'LAUTARO y BILBAO, FRANCISCO',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor / Organicos (jueves)',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.6327398182351, -58.455333589215115'
    },
    {
        nombre: 'PLAZA 11 DE NOVIEMBRE',
        direccion: 'DIRECTORIO AV. e ITALIA',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.634698532270384, -58.463773197951184'
    },
    {
        nombre: 'ESTACION LUGANO',
        direccion: 'GALLO, DELFIN y LEGUIZAMON, MARTINIANO',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.6774380392307, -58.476718523696064'
    },
    {
        nombre: 'LUGANO 1 Y 2',
        direccion: 'OLASCOAGA, MANUEL JOSE CNEL. y SOLDADO DE LA FRONTERA AV.',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.68353283948295, -58.46572644053812'
    },
    {
        nombre: 'PLAZA SARGENTO CABRAL',
        direccion: 'SUAREZ, JOSE LEON y MARTINEZ DE HOZ',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.65080222986006, -58.527003332023234'
    },
    {
        nombre: 'CARREFOUR MATADEROS',
        direccion: 'PAZ, GRAL. AV. 12950',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.66418617439263, -58.51443667494902'
    },
    {
        nombre: 'PLAZA SARMIENTO',
        direccion: 'COSQUIN y HUMAITA',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.64551447149208, -58.52321607628464'
    },
    {
        nombre: 'PLAZA TOSCANERAS DE VILLA REAL',
        direccion: 'LISTA, RAMON CNEL. y MOLIERE',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.616273499750676, -58.52595518112603'
    },
    {
        nombre: 'CARREFOUR J B JUSTO',
        direccion: 'ALVAREZ JONTE AV. y PARÍS',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.63327728554474, -58.5216041263903'
    },
    {
        nombre: 'PLAZA MONTE CASTRO',
        direccion: 'GUALEGUAYCHU y MIRANDA',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.61793979533078, -58.497913733322804'
    },
    {
        nombre: 'PLAZA MONSEÑOR FERMIN LAFITTE',
        direccion: 'ALLENDE y ARREGUI',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.61805987782806, -58.50725849036674'
    },
    {
        nombre: 'PLAZA EL MAESTRO',
        direccion: 'BEIRO, FRANCISCO AV. y CALDERON DE LA BARCA, PEDRO',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.61271194990151, -58.52269675619225'
    },
    {
        nombre: 'PLAZA MARCOS SASTRE',
        direccion: 'MONROE y MILLER',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.57077645705021, -58.48141501661056'
    },
    {
        nombre: 'PLAZA SAN MIGUEL DE CORICOITIS',
        direccion: 'LORETO, VIRREY y DELGADO',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.57731445589391, -58.45790190516625'
    },
    {
        nombre: 'ESTACIÓN NUÑEZ',
        direccion: 'GRECIA y PEDRAZA MANUELA',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor / Organicos (jueves)',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.54941879162428, -58.461966798187085'
    },
    {
        nombre: 'PARQUE LAS HERAS',
        direccion: 'SALGUERO, JERONIMO 2450',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.58328773802527, -58.41025487013151'
    },
    {
        nombre: 'PLAZA LIBERTAD',
        direccion: 'PARAGUAY y LIBERTAD',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.59785421574686, -58.383895699757936'
    },
    {
        nombre: 'PASEO DE LAS AMERICAS',
        direccion: 'RAMSAY y BLANCO ENCALADA',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.54910467898907, -58.44207304147886'
    },
    {
        nombre: 'PLAZA AMADEO SABATTINI',
        direccion: 'COLPAYO y VALLESE, FELIPE',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.61268419596997, -58.443512319071274'
    },
    {
        nombre: 'PLAZA DE LA BANDERA',
        direccion: 'JUSTO, JUAN B. AV. y GAONA AV.',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.62888488720425, -58.49356486588372'
    },
    {
        nombre: 'PLAZA CIUDAD DE UDINE',
        direccion: 'CHIVILCOY y CAMARONES',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.620204839342705, -58.49235805216775'
    },
    {
        nombre: 'PLAZA CORONEL RAMON FALCON',
        direccion: 'FALCON, RAMON L. CNEL. y BENEDETTI, OSVALDO E. DIP. NAC.',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.63559490640259, -58.48250294221071'
    },
    {
        nombre: 'PLAZOLETA BALBIN',
        direccion: 'BALBIN, RICARDO DR. AV. y ARIAS',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.55364322714399,-58.497506457056915'
    },
    {
        nombre: 'PLAZA MAKENNA',
        direccion: 'CRAMER y RAMALLO',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.54430345916892,-58.47686858190736'
    },
    {
        nombre: 'PARQUE SAAVEDRA 2',
        direccion: 'GARCIA DEL RIO AV. y PINTO',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.550069519202715,-58.47707613501825'
    },
    {
        nombre: 'PLAZA MANZANA 66',
        direccion: 'MORENO y JUJUY AV.',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.613631218428516,-58.40601951346562'
    },
    {
        nombre: 'POLO CIRCO',
        direccion: 'INCLAN y PICHINCHA AV.',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.62919359296902,-58.39635368287327'
    },
    {
        nombre: 'VILLA 1.11.14',
        direccion: 'MORENO, PERITO AV. y VARELA AV.',
        materiales: 'RAEES / Aceite vegetal usado (en botellas cerradas) / Pilas/ Papel / Cartón / Vidrio / Metal / Plástico / Tetra-brik / Telgopor',
        dia_hora: 'Martes a Sábado de 11 a 17 hs.',
        coordenadas: '-34.651102449447045,-58.44332886384152'
    },
    {
        nombre: 'FUNDACION EQUIDAD',
        direccion: ' calle Viel 1739, Barrio Parque Chacabuco, CABA',
        materiales: 'CPU completos - Monitores LED y LCD - Teclados y Mouses - Notebooks y Netbooks - Tablets - Memorias RAM - Díscos Rígidos - Procesadores - Motherboards - Cables y periféricos varios - Celulares.',
        dia_hora: 'Lunes a Viernes de 9 a 15 hs',
        coordenadas: '-34.636721298284264,-58.42856907370753'
    },
]