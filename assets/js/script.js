const propiedades_venta = [
    {
    nombre: 'Departamento con vista a la cordillera',
    src: 'https://a0.muscache.com/im/pictures/miso/Hosting-858917523964978087/original/d509c6cc-3d04-4cf4-804e-f7bfb9278596.jpeg?im_w=1200',
    descripcion: 'Situado en uno de los edificios más altos de Chile en Las Condes - Santiago, ofrece el entorno perfecto para una experiencia única en el piso 37.',
    ubicacion: 'Las Condes',
    habitaciones: 2,
    banos: 2,
    costo: 140000000,
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
    costo: 144000000,
    smoke: false,
    pets: true
    },
    {
    nombre: 'Loft Vista Sky',
    src: 'https://a0.muscache.com/im/pictures/48c6dd68-2fc8-4f60-9002-1389740469ea.jpg?im_w=960',
    descripcion: 'Departamento duplex con terraza privada y vista privilegiada del skyline de la ciudad.',
    ubicacion: 'Santiago centro',
    habitaciones: 1,
    banos: 1,
    costo: 58000000,
    smoke: false,
    pets: true
    }
    ];



let htmlVentas = ''

for(let dpto of propiedades_venta){
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
                <p class="text-danger">
                <i class="fas fa-smoking-ban"></i> No se permite fumar</p>
                <p class="text-success">
                <i class="fas fa-paw"></i> Mascotas permitidas</p>
            </div>
            </div>
        </div>
    `
}

const prop_venta = document.querySelector('#prop_venta');
prop_venta.innerHTML = htmlVentas