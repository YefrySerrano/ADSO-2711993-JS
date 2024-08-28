<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\contactosController;


Route::get('/user', [contactosController::class, 'index']);

Route::post('/agregar', [contactosController::class, 'store']);

Route::get('/show/{id}', [contactosController::class, 'show']);

Route::delete('/borrar/{id}', [contactosController::class, 'eliminar']);

Route::put('/actualizar/{id}', [contactosController::class, 'actualizar']);

//----------------------------------------------------------------

Route::get('/usuarios', function (Request $request) {
    return "Bienvenidos a mi API REST en LARAVEL 11";
});

Route::get('/usuarios/{id}', function (Request $request) {
    return "Consultando un solo usuario";
});

Route::post('/usuarios', function (Request $request) {
    return "Creando usuarios";
});

Route::put('/usuarios/{id}', function (Request $request, $id) {
    return "Actualizando usuario: $id";
});

Route::delete('/usuarios/{id}', function (Request $request, $id) {
    return "Eliminando usuario: $id";
});