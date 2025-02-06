<?php

use Illuminate\Support\Facades\Route;
use Modules\CarStickers\App\Http\Controllers\CarStickersController;

Route::middleware(['auth'])->group(function () {
        // List all car stickers
    Route::get('/carstickers', [CarStickersController::class, 'index'])
         ->name('carstickers.index');

    // Show the form for creating a new car sticker
    Route::get('carstickers/create', [CarStickersController::class, 'create'])
         ->name('carstickers.create');

    // Store a new car sticker
    Route::post('carstickers', [CarStickersController::class, 'store'])
         ->name('carstickers.store');

    // Display a specific car sticker
    Route::get('carstickers/{carsticker}', [CarStickersController::class, 'show'])
         ->name('carstickers.show');

    // Show the form for editing a specific car sticker
    Route::get('carstickers/{carsticker}/edit', [CarStickersController::class, 'edit'])
         ->name('carstickers.edit');

    // Update a specific car sticker
    Route::put('carstickers/{carsticker}', [CarStickersController::class, 'update'])
         ->name('carstickers.update');

    // Delete a specific car sticker
    Route::delete('carstickers/{carsticker}', [CarStickersController::class, 'destroy'])
         ->name('carstickers.destroy');
});
