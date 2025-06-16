// Habilitar que se despliegue la lista de los subsectores para la agroindustria cuando se seleccione como sector productivo AGROINDUSTRIA
document.getElementById('sector_productivo').addEventListener('change', function () {
    if (this.value === 'agroindustria') {
        document.getElementById('agro_subsector').style.display = 'block';
    } else {
            document.getElementById('agro_subsector').style.display = 'none';
    }
});

// Habilitar que se despliegue la lista de los subsectores para la manufactura cuando se seleccione como sector productivo MANUFACTURAS
document.getElementById('sector_productivo').addEventListener('change', function () {
    if (this.value === 'manufacturas') {
        document.getElementById('manufactura_subsector').style.display = 'block';
    } else {
            document.getElementById('manufactura_subsector').style.display = 'none';
    }
});

// Habilitar que se despliegue la lista de los subsectores para servicios cuando se seleccione como sector productivo SERVICIOS
document.getElementById('sector_productivo').addEventListener('change', function () {
    if (this.value === 'servicios') {
        document.getElementById('servicios_subsector').style.display = 'block';
    } else {
            document.getElementById('servicios_subsector').style.display = 'none';
    }
});

// Habilitar que se despliegue la lista de los subsectores para conocimiento cuando se seleccione como sector productivo CONOCIMIENTO E INNOVACIÓN
document.getElementById('sector_productivo').addEventListener('change', function () {
    if (this.value === 'conocimiento') {
        document.getElementById('conocimiento_subsector').style.display = 'block';
    } else {
            document.getElementById('conocimiento_subsector').style.display = 'none';
    }
});

// Proceso de recolectar la información colocada en el formulario y al darle click en el botón Registrar para luego mostrarla en pantalla
document.querySelector('.contact-form2').addEventListener('submit', function (e) {
    e.preventDefault();

    // Obtener valores
    const razonSocial = document.getElementById('razon_social').value;
    const sector = document.getElementById('sector_productivo').value;
    let subsector = '';
    if (sector === 'agroindustria') {
        subsector = document.getElementById('agro_subsector_select').value;
    } else if (sector === 'manufacturas') {
        subsector = document.getElementById('manufactura_subsector_select').value;
    } else if (sector === 'servicios') {
        subsector = document.getElementById('servicios_subsector_select').value;
    } else if (sector === 'conocimiento') {
        subsector = document.getElementById('conocimiento_subsector_select').value;
    }
    const nombre = document.getElementById('name').value;
    const telefono = document.getElementById('phone').value;
    const email = document.getElementById('email').value;

    // Crear la tarjeta
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
        <h4>${razonSocial}</h4>
        <p><strong>Sector Productivo:</strong> ${sector}</p>
        <p><strong>Tipo de Emprendimiento:</strong> ${subsector}</p>
        <p><strong>Representante Legal:</strong> ${nombre}</p>
        <p><strong>Teléfono de Contacto:</strong> ${telefono}</p>
        <p><strong>Correo electrónico:</strong> ${email}</p>
    `;

    // Aplicar color de fondo según sector
    if (sector === 'agroindustria') {
        card.style.backgroundColor = 'palegreen';
    } else if (sector === 'manufacturas') {
        card.style.backgroundColor = 'lemonchiffon';
    } else if (sector === 'servicios') {
        card.style.backgroundColor = 'lightblue';
    } else if (sector === 'conocimiento') {
        card.style.backgroundColor = 'lavender';
    }

    // Agregar la tarjeta al contenedor
    document.getElementById('cards-container').appendChild(card);

    // Limpiar el formulario
    e.target.reset();

    // Ocultar subsectors
    document.getElementById('agro_subsector').style.display = 'none';
    document.getElementById('manufactura_subsector').style.display = 'none';
    document.getElementById('servicios_subsector').style.display = 'none';
    document.getElementById('conocimiento_subsector').style.display = 'none';
});
