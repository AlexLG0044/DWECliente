<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Peliculas - Portada</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM" crossorigin="anonymous">
    <link rel = "stylesheet" href = "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css">
    <style>
        .pelicula-card {
            transition: transform 0.2s;
        }

        .pelicula-card:hover {
            transform: scale(1.05);
        }

        .pelicula-img {
            width: 100%;
            height: 400px;
            object-fit: cover;
        }

        .categoria-badge {
            position: absolute;
            top: 10px;
            right: 10px;
            z-index: 10;
        }
    </style>
</head>

<body class="bg-light">
    <nav class = "navbar navbar-dark bg-dark">
        <div class = "container-fluid">
            <a class = "navbar-brand" href = "/">
                <i class = "bi bi-film"></i>Catálogo de Peliculas
            </a>
            <div>
                <a href = "/admin/categorias" class = "btn btn-outline-light btn-sm me-2">
                    <i class = "bi bi-tags"></i> Categorías
                </a>
                <a href = "/admin/peliculas" class = "btn btn-outline-light btn-sm">
                    <i class = "bi bi-gear"></i> Películas
                </a>
            </div>
        </div>
    </nav>

    <div class="container my-5">
        <!-- Selector de Categoria -->
        <div class="row mb-4">
            <div class="col-md-12">
                <div class="card shadow">
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-md-3">
                                <h5 class="mb-0">
                                    <i class="bi bi-funnel"></i> Filtrar por categoria:
                                </h5>
                            </div>
                            <div class="col-md-9">
                                <select class="form-select form-select-lg" id="categoriaSelect"
                                    >
                                    <option value="">Todas las categorias</option>
                                    @foreach ($categorias as $categoria)
                                        <option value="{{ $categoria->id }}">
                                            {{ $categoria->nombre }}
                                        </option>
                                    @endforeach
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Área de Películas -->
        <div id="areaPeliculas">
        </div>

        <div class="text-center py-5 d-none" id="cargandoPeliculas">
            <div class="spinner-border text-primary" role="status" style="width: 3rem; height: 3rem;">
                <span class="visually-hidden">Cargando...</span>
            </div>
            <p class="mt-3 text-muted">Cargando películas...</p>
        </div>
    </div>
    <footer class="bg-dark text-white text-center py-3 mt-5">
        <p class="mb-0">
            &copy; 2025 Catálogo de Películas - Ejemplo didáctico de AJAX con Fetch API
        </p>
    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
    // Cargar todas las películas al iniciar
    document.addEventListener('DOMContentLoaded', () => {
        cargarTodasPeliculas();
    });

    document.getElementById('categoriaSelect').addEventListener('change', () => {
        cargarPeliculasPorCategoria();
    });

    function mostrarCargando() {
        document.getElementById('cargandoPeliculas').classList.remove('d-none');
        document.getElementById('areaPeliculas').innerHTML = '';
    }

    function ocultarCargando() {
        document.getElementById('cargandoPeliculas').classList.add('d-none');
    }

    // Función para cargar todas las películas
    async function cargarTodasPeliculas() {
        try {
            mostrarCargando();

            const response = await fetch('/api/peliculas');

            if (!response.ok) {
                throw new Error('Error al cargar las peliculas');
            }

            const peliculas = await response.json();
            mostrarPeliculas(peliculas, 'Todas las peliculas');

        } catch (error) {
            console.error('Error:', error);
            mostrarError('No se pudieron cargar las peliculas');
        } finally {
            ocultarCargando();
        }
    }
    // Función para cargar películas por categoría
async function cargarPeliculasPorCategoria() {
    const categoriaId = document.getElementById('categoriaSelect').value;

    if (!categoriaId) {
        cargarTodasPeliculas();
        return;
    }

    try {
        mostrarCargando();
        const response = await fetch(`/api/categorias/${categoriaId}/peliculas`);

        if (!response.ok) {
            throw new Error('Error al cargar las peliculas de la categoria');
        }

        const peliculas = await response.json();
        const categoriaTexto = document.getElementById('categoriaSelect').selectedOptions[0].text;
        mostrarPeliculas(peliculas, `Peliculas de ${categoriaTexto}`);
    } catch (error) {
        console.error('Error:', error);
        mostrarError('No se pudieron cargar las peliculas de la categoria');
    } finally {
        ocultarCargando();
    }
}
    // Función para mostrar películas en tarjetas
function mostrarPeliculas(peliculas, titulo) {
    const areaPeliculas = document.getElementById('areaPeliculas');

    if (peliculas.length === 0) {
        areaPeliculas.innerHTML = `
            <div class="alert alert-info text-center" role="alert">
                <i class="bi bi-info-circle fs-1"></i>
                <h4 class="mt-3">No hay peliculas en esta categoria</h4>
                <p>Seleccione otra categoria o añada nuevas peliculas desde el panel de administración.</p>
            </div>
        `;
        return;
    }

    let html = `
        <div class="mb-4">
            <h2 class="text-center">
                <i class="bi bi-film"></i> ${titulo}
                <span class="badge bg-primary">${peliculas.length}</span>
            </h2>
        </div>
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
    `;

    peliculas.forEach(pelicula => {
        const imagenUrl = pelicula.imagen || 'https://placehold.co/300x400?text=Sin+Imagen';
        const categoriaNombre = pelicula.categoria ? pelicula.categoria.nombre : 'Sin categoria';
        html += `
            <div class="col">
                <div class="card h-100 shadow pelicula-card">
                    <div class="position-relative">
                        <span class="badge bg-info categoria-badge">${categoriaNombre}</span>
                        <img src="${imagenUrl}"
                            class="card-img-top pelicula-img"
                            alt="${pelicula.nombre}"
                            onerror="this.src='https://placehold.co/300x400?text=Error+al+cargar'">
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${pelicula.nombre}</h5>
                        <div class="mt-auto">
                            ${
                                pelicula.url_imdb
                                    ? `<a href="${pelicula.url_imdb}" target="_blank" class="btn btn-warning w-100">
                                        <i class="bi bi-link-45deg"></i> Ver en IMDB
                                    </a>`
                                    : `<button class="btn btn-secondary w-100" disabled>
                                        <i class="bi bi-x-circle"></i> Sin enlace IMDB
                                    </button>`
                            }
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    html += `</div>`;
    areaPeliculas.innerHTML = html;
}
    // Función para mostrar errores
function mostrarError(mensaje) {
    const areaPeliculas = document.getElementById('areaPeliculas');

    areaPeliculas.innerHTML = `
        <div class="alert alert-danger text-center" role="alert">
            <i class="bi bi-exclamation-triangle fs-1"></i>
            <h4 class="mt-3">Error</h4>
            <p>${mensaje}</p>
            <button class="btn btn-danger" onclick="cargarTodasPeliculas()">
                <i class="bi bi-arrow-clockwise"></i> Reintentar
            </button>
        </div>
    `;
}



</script>









</body>

</html>
