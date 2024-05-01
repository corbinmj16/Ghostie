<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePostRequest;
use App\Models\Post;
use Illuminate\Http\Request;

class PostController extends Controller
{
    public function store(StorePostRequest $request)
    {
        $v = $request->validated();

        $request->user()->posts()->create($v);
    }

    public function destroy(Request $request, Post $post)
    {
        // Authorize then delete
        if ($request->user()->cannot('delete', $post)) {
            abort(403);
        }

        $post->delete();

        return redirect()->back();
    }
}
