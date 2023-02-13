<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Request;
use Illuminate\Support\Facades\URL;
use Illuminate\Validation\Rules;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

// use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Users/Index', [
            'filters' => Request::all('search', 'role', 'trashed'),
            'users' => User::all()
        ]);
    }

    public function create(){
        return Inertia::render('Users/Create');
    }

    public function store(){
        Request::validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => Request::get('name'),
            'email' => Request::get('email'),
            'password' => Hash::make(Request::get('password')),
        ]);

        return Redirect::route('users')->with('success', 'User created.');
    }

    public function edit(User $user){
        return Inertia::render('Users/Edit', [
            'user' => $user
        ]);
    }

    public function update(User $user)
    {
        Request::validate([
            'name' => ['required', 'max:50'],
            'email' => ['required', 'max:50', 'email', Rule::unique('admins')->ignore($user->id)],
            'password' => ['nullable'],
        ]);

        $user->update(Request::only('name', 'email'));

        if (Request::get('password')) {
            $user->update(['password' => Hash::make(Request::get('password'))]);
        }

        return Redirect::back()->with('success', 'User updated.');
    }

    public function destroy(User $user)
    {
        $user->delete();

        return Redirect::route('users')->with('success', 'User deleted.');
    }
}
