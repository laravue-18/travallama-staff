<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    public function index(){
        return inertia('Permissions/Index', [
            'roles' => Role::all(),
            'permissions' => Permission::all()
        ]);
    }

    public function storeRole(){
        $role = Role::create(['name' => Request::get('name')]);

        return Redirect::back()->with('success', 'New Role Added.');
    }

    public function store(){
        Permission::create(['name' => Request::get('name')]);

        return Redirect::back()->with('success', 'New Permission Added.');
    }
}
