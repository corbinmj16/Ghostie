<?php

use App\Http\Controllers\PostController;
use App\Models\Post;
use Inertia\Inertia;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use Illuminate\Http\Request;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    // get api token
    /**
     * curl -X POST "https://accounts.spotify.com/api/token" \
     * -H "Content-Type: application/x-www-form-urlencoded" \
     * -d "grant_type=client_credentials&client_id=your-client-id&client_secret=your-client-secret"
     */
    $resp = Http::asForm()->post('https://accounts.spotify.com/api/token', [
        'grant_type' => 'client_credentials',
        'client_id' => env('SPOTIFY_CLIENT_ID'),
        'client_secret' => env('SPOTIFY_CLIENT_SECRET')
    ]);

    $access = $resp->collect();
    $access_token = $access['access_token'];
    // send request for ghost runners podcast with api token
    /**
     * curl --request GET \
     * --url https://api.spotify.com/v1/shows/0If7vnDjICI8gRTHrSuAGa \
     * --header 'Authorization: Bearer 1POdFZRZbvb...qqillRxMr2z'
     */
    $show = Http::withHeader('Authorization', "Bearer {$access_token}")->get("https://api.spotify.com/v1/shows/0If7vnDjICI8gRTHrSuAGa");
    $posts = Post::query()
        ->where('show_id', '=', $show['id'])
        ->with(['user', 'comments'])
        ->latest()
        ->get();

    return Inertia::render('Dashboard', [
        'show' => $show->json(),
        'posts' => $posts
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->controller(PostController::class)->group(function () {
    Route::post('/post', 'store');
    Route::delete('/post/{post}', 'destroy');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
