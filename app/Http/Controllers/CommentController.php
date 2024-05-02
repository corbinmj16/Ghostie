<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreCommentRequest;
use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
    public function store(StoreCommentRequest $request)
    {
        $data = $request->validated();

        $request->user()->comments()->create($data);
    }

    public function destroy(Request $request, Comment $comment)
    {
        if ($request->user()->cannot('delete', $comment)) {
            abort(403);
        }

        $comment->delete();

        return redirect()->back();
    }
}
