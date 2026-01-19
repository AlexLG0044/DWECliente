<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Categoria;
use App\Models\Pelicula;

class PeliculasSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //Crear categorias
        $accion = Categoria::create(['nombre' => 'Acción']);
        $comedia = Categoria::create(['nombre' => 'Comedia']);
        $drama = Categoria::create(['nombre' => 'Drama']);
        $terror = Categoria::create(['nombre' => 'Terror']);
        $cienciaFiccion = Categoria::create(['nombre' => 'Ciencia Ficción']);
        $animacion = Categoria::create(['nombre' => 'Animación']);

        //Crear peliculas de ejemplo
        $peliculas = [
    // Acción
    [
        'nombre' => 'Mad Max: Fury Road',
        'categoria_id' => $accion->id,
        'imagen' => 'https://media.themoviedb.org/t/p/w300_and_h450_face/fnY0VRsb31A5RLVCBjuR6EFUlo2.jpg',
        'url_imdb' => 'https://www.imdb.com/title/tt1392190/'
    ],
    [
        'nombre' => 'John Wick',
        'categoria_id' => $accion->id,
        'imagen' => 'https://media.themoviedb.org/t/p/w300_and_h450_face/tDl5ac1VJwMRvlgINDCsDCqg9CE.jpg',
        'url_imdb' => 'https://www.imdb.com/title/tt2911666/'
    ],
    [
        'nombre' => 'Die Hard',
        'categoria_id' => $accion->id,
        'imagen' => 'https://media.themoviedb.org/t/p/w300_and_h450_face/m54tK4wKjc1w2dp7QInG0munGao.jpg',
        'url_imdb' => 'https://www.imdb.com/title/tt0095016/'
    ],

    // Comedia
    [
        'nombre' => 'Superbad',
        'categoria_id' => $comedia->id,
        'imagen' => 'https://media.themoviedb.org/t/p/w94_and_h141_face/ftUDFRYywWzajElI2RT9NIno2PS.jpg',
        'url_imdb' => 'https://www.imdb.com/title/tt0829482/'
    ],
    [
        'nombre' => 'The Hangover',
        'categoria_id' => $comedia->id,
        'imagen' => 'https://media.themoviedb.org/t/p/w94_and_h141_face/rqeim09TdaflSvPNVnCTBjUHlKu.jpg',
        'url_imdb' => 'https://www.imdb.com/title/tt1119646/'
    ],
    [
        'nombre' => 'Step Brothers',
        'categoria_id' => $comedia->id,
        'imagen' => 'https://media.themoviedb.org/t/p/w300_and_h450_face/jmiZebStqOpHlKinDP5keHCLRXQ.jpg',
        'url_imdb' => 'https://www.imdb.com/title/tt0838283/'
    ],
    // Drama
    [
        'nombre' => 'The Shawshank Redemption',
        'categoria_id' => $drama->id,
        'imagen' => 'https://media.themoviedb.org/t/p/w300_and_h450_face/uRRTV7p6l2ivtODWJVVAMRrwTn2.jpg',
        'url_imdb' => 'https://www.imdb.com/title/tt0111161/'
    ],
    [
        'nombre' => 'Forrest Gump',
        'categoria_id' => $drama->id,
        'imagen' => 'https://media.themoviedb.org/t/p/w94_and_h141_face/oiqKEhEfxl9knzWXvWecJKN3aj6.jpg',
        'url_imdb' => 'https://www.imdb.com/title/tt0109830/'
    ],
    [
        'nombre' => 'Fight Club',
        'categoria_id' => $drama->id,
        'imagen' => 'https://media.themoviedb.org/t/p/w94_and_h141_face/sgTAWJFaB2kBvdQxRGabYFiQqEK.jpg',
        'url_imdb' => 'https://www.imdb.com/title/tt0137523/'
    ],
    // Terror
    [
        'nombre' => 'The Conjuring',
        'categoria_id' => $terror->id,
        'imagen' => 'https://media.themoviedb.org/t/p/w94_and_h141_face/sKuHxkCogdk6YWzTyXYPoo9qd9n.jpg',
        'url_imdb' => 'https://www.imdb.com/title/tt1457767/'
    ],
    [
        'nombre' => 'Get Out',
        'categoria_id' => $terror->id,
        'imagen' => 'https://media.themoviedb.org/t/p/w94_and_h141_face/xiMoqa0bmjuyuXYqKGwrTSJL8nI.jpg',
        'url_imdb' => 'https://www.imdb.com/title/tt5052448/'
    ],
    [
        'nombre' => 'A Quiet Place',
        'categoria_id' => $terror->id,
        'imagen' => 'https://media.themoviedb.org/t/p/w94_and_h141_face/5pairI20KJs1SEa4Z8yAsPR779m.jpg',
        'url_imdb' => 'https://www.imdb.com/title/tt6644200/'
    ],
    // Ciencia Ficción
    [
        'nombre' => 'Inception',
        'categoria_id' => $cienciaFiccion->id,
        'imagen' => 'https://media.themoviedb.org/t/p/w94_and_h141_face/tXQvtRWfkUUnWJAn2tN3jERIUG.jpg',
        'url_imdb' => 'https://www.imdb.com/title/tt1375666/'
    ],
    [
        'nombre' => 'The Matrix',
        'categoria_id' => $cienciaFiccion->id,
        'imagen' => 'https://media.themoviedb.org/t/p/w94_and_h141_face/ejmTPNAkgZaVJ4AI9zb9SehAYU0.jpg',
        'url_imdb' => 'https://www.imdb.com/title/tt0133093/'
    ],
    [
        'nombre' => 'Interstellar',
        'categoria_id' => $cienciaFiccion->id,
        'imagen' => 'https://media.themoviedb.org/t/p/w94_and_h141_face/fbUwSqYIP0isCiJXey3staY3DNn.jpg',
        'url_imdb' => 'https://www.imdb.com/title/tt0816692/'
    ],
    // Animación
    [
        'nombre' => 'Toy Story',
        'categoria_id' => $animacion->id,
        'imagen' => 'https://media.themoviedb.org/t/p/w94_and_h141_face/y59d8PjuFSgJJN4VRS7jDoRgSM9.jpg',
        'url_imdb' => 'https://www.imdb.com/title/tt0114709/'
    ],
    [
        'nombre' => 'Finding Nemo',
        'categoria_id' => $animacion->id,
        'imagen' => 'https://media.themoviedb.org/t/p/w94_and_h141_face/jPhak722pNGxQIXSEfeWIUqBrO5.jpg',
        'url_imdb' => 'https://www.imdb.com/title/tt0266543/'
    ],
    [
        'nombre' => 'The Lion King',
        'categoria_id' => $animacion->id,
        'imagen' => 'https://media.themoviedb.org/t/p/w94_and_h141_face/b0MxU37dNmMwKtoPVYPKOZSIrIn.jpg',
        'url_imdb' => 'https://www.imdb.com/title/tt0110357/'
    ],
];

        foreach ($peliculas as $pelicula) {
            Pelicula::create($pelicula);
        }
        $this->command->info('Categorias y peliculas creadas con exito!');
    }
}
