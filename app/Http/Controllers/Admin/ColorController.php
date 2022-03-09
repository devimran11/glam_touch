<?php

namespace App\Http\Controllers\Admin;

use App\Models\Color;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ColorController extends Controller
{
     public function index()
    {
        $colors = Color::orderBy('id', 'DESC')->get();
        return response()->json([
            'colors' => $colors,
            'status' => 'SUCCESS'
        ]);
    }


    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $this->validate($request, [
            'name' => 'required|unique:colors',
        ]);

        $color = new Color();
        $color->name = $request->name;
        $color->save();
        return response()->json([
            'status' => 'SUCCESS',
            'message' => 'color added successfully'
        ]);

    }


    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        $color=Color::findOrFailOrFail($id);
        return response()->json([
            'color' => $color ,
        ]);
    }



    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'name' => 'required|unique:colors,name,'.$id,
        ]);
        $color = Color::findOrFailOrFail($id);
        $color->name = $request->name;
        if ($color->save()) {
            return response()->json([
                'status' => 'SUCCESS',
                'message' => 'color changed'
            ]);
        }
    }




    public function destroy($id)
    {
        //
    }


    public function active($id){

        $color = Color::findOrFail($id);
        $color->status = 1;
        $color->save();
        return response()->json([
            'status' => 'SUCCESS',
            'message' => 'color activated successfully'
        ]);

    }

    public function deActive($id){

        $color = Color::findOrFail($id);
        $color->status = 0;
        $color->save();
        return response()->json([
            'status' => 'SUCCESS',
            'message' => 'color de-active successfully'
        ]);

    }




}
