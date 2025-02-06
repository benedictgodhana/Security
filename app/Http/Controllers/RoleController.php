<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;


class RoleController extends Controller
{
    public function create()
    {
        // Fetch permissions for selection
        return Inertia::render('Roles/RolesAdd', [
        ]);
    }
}
