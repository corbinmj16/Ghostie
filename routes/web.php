<?php

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
        'client_id' => '678788cfca4249048800ebd3a13fa3ae',
        'client_secret' => '066373a6b7394855a9e2c4c67015167e'
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
        ->orderBy('created_at', 'desc')
        ->get();

    return Inertia::render('Dashboard', [
        'show' => $show->json(),
        'posts' => $posts
    ]);
})->middleware(['auth', 'verified'])->name('dashboard');

Route::post('/post', function (Request $request) {
    $v = $request->validate([
        'body' => 'required',
        'show_id' => 'required',
    ]);

    $request->user()->posts()->create($v);
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
