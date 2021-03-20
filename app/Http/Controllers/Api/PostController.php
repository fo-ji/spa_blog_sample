<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Post;
use App\Read;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Log;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        $user = $request->user();

        $reads = Read::where('user_id', $user->id)->get();
        $postIds = [];
        foreach ($reads as $read) {
            $postIds[] = $read->post_id;
        }

        $posts = [];

        $unreadPosts = Post::whereNotIn('id', $postIds)->get();
        foreach ($unreadPosts as $post) {
            $post->read = false;
            $posts[] = $post;
        }

        $readPosts = Post::whereIn('id', $postIds)->get();
        foreach ($readPosts as $post) {
            $post->read = true;
            $posts[] = $post;
        }

        // [TODO]並び替え必要

        return $posts;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $post = new Post;

        $post->title = $request->title;
        $post->content = $request->content;
        $post->user_id = Auth::id();

        $post->save();

        return $post;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function detail($resourceId)
    {
        $post = Post::where('id', $resourceId)->first();

        return $post;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function read(Request $request, $resourceId)
    {
        $user = $request->user();

        $registeredRead = Read::where([
            ['user_id', $user->id],
            ['post_id', $resourceId]
        ])->first();

        if (isset($registeredRead)) {
            return;
        } else {
            $read = new Read;
            $read->user_id = $user->id;
            $read->post_id = $resourceId;
            $read->save();
        }
    }
}
