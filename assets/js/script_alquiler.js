const propiedades_arriendo = [
    {
    nombre: 'Refugio de montaña',
    src: 'https://a0.muscache.com/im/pictures/3902b702-c2b8-4f61-93c1-f12f7e35ed2f.jpg?im_w=1200',
    descripcion: 'Nuestro Glamping es una nueva forma de Hospedaje, similar al camping tradicional pero con muchas mas comodidades.',
    ubicacion: 'San José de Maipo',
    habitaciones: 1,
    banos: 1.5,
    costo: '50.000',
    smoke: true,
    pets: true
    },
    {
    nombre: 'Refugio costero TEVO',
    src: 'https://a0.muscache.com/im/pictures/miso/Hosting-848778629015762082/original/a959d348-95c4-4f44-bc1a-aa4b1d1459f0.jpeg?im_w=1200',
    descripcion: 'Acogedor refugio, de diseño único. Ideal para escapar del viento costero característico de la zona y disfrutar de templados valles, quebradas y naturaleza.',
    ubicacion: 'La Vega de Pupuya',
    habitaciones: 2,
    banos: 1,
    costo: '97.900',
    smoke: true,
    pets: false
    },
    {
    nombre: 'Cabaña Tinquilco',
    src: 'https://a0.muscache.com/im/pictures/2e9a3f14-509d-4376-a906-5075c5131a6d.jpg?im_w=1200',
    descripcion: 'El entorno es encantador porque está a los pies de uno de los Parques mas hermosos del país.',
    ubicacion: 'Pucón',
    habitaciones: 1,
    banos: 1,
    costo: '65.000',
    smoke: false,
    pets: true
    },
    {
    nombre: 'La mejor experiencia de relajo frente al mar',
    src: 'https://a0.muscache.com/im/pictures/miso/Hosting-742547102591686897/original/bb5f14a3-1b33-4a74-85ed-679007769c33.jpeg?im_w=960',
    descripcion: 'El balcón es la estrella del departamento, con bellos detalles que harán que quieras sentarte por horas a ver el mar.',
    ubicacion: 'Puchuncavi',
    habitaciones: 2,
    banos: 2,
    costo: '54.000',
    smoke: false,
    pets: false
    },
    {
    nombre: 'Cabañas en casas de pilotes',
    src: 'https://a0.muscache.com/im/pictures/0443de6a-8a50-4b3b-9878-bf5c5217fae0.jpg?im_w=960',
    descripcion: 'El único sonido de fondo es el mar y la naturaleza.',
    ubicacion: 'Lipimavida',
    habitaciones: 2,
    banos: 1,
    costo: '45.500',
    smoke: true,
    pets: false
    },
    {
    nombre: 'Casa Luz, en la playa!',
    src: 'https://a0.muscache.com/im/pictures/miso/Hosting-53001224/original/a4b085ff-9dfd-4059-9b40-8c36d042d4bf.jpeg?im_w=960',
    descripcion: 'Una casa preciosa,  hecha con mucho amor, en la playa misma, patitas en la arena. A 50 pasos del mar. ',
    ubicacion: 'Las Mostazas, Guanaqueros',
    habitaciones: 3,
    banos: 2,
    costo: '240.000',
    smoke: false,
    pets: true
    }
];

const prop_arriendo = document.querySelector('#prop_arriendo');

let htmlArriendo = ''

for(let dpto of propiedades_arriendo) {
    
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

    htmlArriendo+= `
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

prop_arriendo.innerHTML = htmlArriendo

