<?php

use Illuminate\Support\Facades\Route;
use Modules\IncidentManagement\App\Http\Controllers\IncidentManagementController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::middleware(['auth'])->group(function () {    // Define the routes manually for each controller action
    Route::get('/incidentmanagement', [IncidentManagementController::class, 'index'])->name('incidentmanagement.index');
    Route::get('incidentmanagement/create', [IncidentManagementController::class, 'create'])->name('incidentmanagement.create');
    Route::post('incidentmanagement', [IncidentManagementController::class, 'store'])->name('incidentmanagement.store');
    Route::get('incidentmanagement/{incident}', [IncidentManagementController::class, 'show'])->name('incidentmanagement.show');
    Route::get('incidentmanagement/{incident}/edit', [IncidentManagementController::class, 'edit'])->name('incidentmanagement.edit');
    Route::put('incidentmanagement/{incident}', [IncidentManagementController::class, 'update'])->name('incidentmanagement.update');
    Route::delete('incidentmanagement/{incident}', [IncidentManagementController::class, 'destroy'])->name('incidentmanagement.destroy');
});
