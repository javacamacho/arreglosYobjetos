const propiedades_venta = [
    {
    nombre: 'Casa en el lago Villarrica',
    src: 'https://a0.muscache.com/im/pictures/cdf61f3a-a769-420e-a4ee-33ab58f6e9f3.jpg?im_w=1200',
    descripcion: 'Insertado en un antiguo bosque es un lugar muy tranquilo, donde se puede nadar, pescar y practicar deportes acuáticos o tomar un baño caliente bajo las estrellas.',
    ubicacion: 'Villarrica',
    habitaciones: 5,
    banos: 3,
    costo: '260.000.000',
    smoke: true,
    pets: true
    },
    {
    nombre: 'Departamento con vista a la cordillera',
    src: 'https://a0.muscache.com/im/pictures/miso/Hosting-858917523964978087/original/d509c6cc-3d04-4cf4-804e-f7bfb9278596.jpeg?im_w=1200',
    descripcion: 'Situado en uno de los edificios más altos de Chile, ofrece el entorno perfecto para una experiencia única en el piso 37.',
    ubicacion: 'Las Condes',
    habitaciones: 2,
    banos: 2,
    costo: '140.000.000',
    smoke: false,
    pets: true
    },
    {
    nombre: 'Cabaña Andes',
    src: 'https://a0.muscache.com/im/pictures/miso/Hosting-36488330/original/307f47e3-43e0-4b24-8408-61d001103c6a.png?im_w=960',
    descripcion: 'Cercano a Santiago en plena precordillera a 1.150 mts de altura, rodeado de bosque con increíble vista al valle, montañas y estrellas.',
    ubicacion: 'San José de Maipo',
    habitaciones: 2,
    banos: 1,
    costo: '144.000.000',
    smoke: true,
    pets: false
    },
    {
    nombre: 'Loft Vista Sky',
    src: 'https://a0.muscache.com/im/pictures/48c6dd68-2fc8-4f60-9002-1389740469ea.jpg?im_w=960',
    descripcion: 'Departamento duplex con terraza privada y vista privilegiada del skyline de la ciudad.',
    ubicacion: 'Santiago centro',
    habitaciones: 1,
    banos: 1,
    costo: '58.000.000',
    smoke: false,
    pets: true
    },
    {
    nombre: 'Departamento con vista a la ciudad y la cordillera',
    src: 'https://a0.muscache.com/im/pictures/prohost-api/Hosting-16267932/original/096c2467-d29e-4ee3-9181-bf9d9904ad68.jpeg?im_w=960',
    descripcion: 'Barrio residencial con todos los atractivos de vivir dentro de la gran ciudad',
    ubicacion: 'Ñuñoa',
    habitaciones: 1,
    banos: 1.5,
    costo: '52.000.000',
    smoke: false,
    pets: false
    },
    {
    nombre: 'Casa "Nido de golondrinas"',
    src: 'https://a0.muscache.com/im/pictures/miso/Hosting-45526609/original/d902a5a6-67fc-41ba-be53-7725ec3e42b3.jpeg?im_w=960',
    descripcion: 'Dúplex, 7 metros sobre el suelo. Parque privado de 2 acres, cubiertas con vistas panorámicas y un puente colgante para dejar volar tus sueños.',
    ubicacion: 'Pucón',
    habitaciones: 1,
    banos: 1,
    costo: '207.000.000',
    smoke: true,
    pets: false
    }
];

const prop_venta = document.querySelector('#prop_venta');

let htmlVentas = ''

for(let dpto of propiedades_venta) {
    
    let fumar = ''
    let mascotas = ''

    if (dpto.smoke === true) {
        fumar = '<p class="text-success"><i class="fas fa-smoking"></i> Permitido fumar</p>';
    } else {
        fumar = '<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>';
    };
    
    if (dpto.pets === true) {
        mascotas = '<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>';
    } else {
        mascotas = '<p class="text-danger"><i class="fa-solid fa-ban"></i> No se permiten mascotas</p>';
    }

    htmlVentas+= `
        <div class="col-md-4 mb-4">
            <div class="card">
                <img src="${dpto.src}" class="card-img-top" alt="Imagen del departamento"/>
            <div class="card-body">
                <h5 class="card-title">${dpto.nombre}</h5>
                <p class="card-text">${dpto.descripcion}</p>
                <p><i class="fas fa-map-marker-alt"></i> ${dpto.ubicacion}</p>
                <p>
                <i class="fas fa-bed"></i> ${dpto.habitaciones} Habitaciones |
                <i class="fas fa-bath"></i> ${dpto.banos} Baños </p>
                <p><i class="fas fa-dollar-sign"></i> ${dpto.costo}</p>
                ${fumar}
                ${mascotas}
            </div>
            </div>
        </div>
    `
}

prop_venta.innerHTML = htmlVentas

