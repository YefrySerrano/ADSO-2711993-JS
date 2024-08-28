<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contactos;
use Illuminate\Support\Facades\Validator;

class contactosController extends Controller
{
    //
    public function index()
    {
        $contactos  = Contactos::all();
        if($contactos->isEmpty()){
            $data = [
                'message' => 'No se encontraron contactos',
                'status' => 200
            ];
            return response()->json($data,200);
        } 
    return response()->json($contactos,200);    
    }
    public function store(Request $request){
        $validator = Validator::make($request->all(), [
            'nombre' => 'required|max:15',
            'direccion' => 'required|max:25',
            'telefono' => 'required|digits:10',
            'correo' => 'required|email|unique:contactos',
        ]);
        if ($validator->fails()) {
            $data =[
                'message' => 'Error en la validacion de datos ',
                'errors'=>$validator->errors(),
                'status' => 400
            ];
            return response()->json($data,400);
        }
        $contacto = Contactos::create([
            'nombre' => $request->nombre,
            'direccion' => $request->direccion,
            'telefono' => $request->telefono,
            'correo' => $request->correo,
            
        ]);
        if(!$contacto){
            $data = [
                'message' => 'Error al crear resgitro',
               'status' => 500
            ];
            return response()->json($data,500);
        }
        $data =[
            'contacto' => $contacto,
            'message' => 'Registro creado exitosamente',
           'status' => 201
        ];
        return response()->json($data,201);           
    
    }


}
