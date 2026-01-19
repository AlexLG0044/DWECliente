<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Categoria;

class CategoriaController extends Controller
{
    public function peliculas($id)
    {
        $categoria = Categoria::with('peliculas')->findOrFail($id);
        return response()->json($categoria->peliculas);
    }
}
