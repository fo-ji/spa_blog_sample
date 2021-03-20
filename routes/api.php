<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::group(['middleware' => 'api'], function() {
    Route::post('/register', 'Api\AuthController@register');
    Route::post('/login', 'Api\AuthController@login');
});

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('/user', function(Request $request) {
        return $request->user();
    });
    Route::post('/logout', 'Api\AuthController@logout');
    Route::get('/posts', 'Api\PostController@index');
    Route::get('/post/{resourceId}', 'Api\PostController@detail');
    Route::post('/post/create', 'Api\PostController@create');
    Route::post('/post/{resourceId}/read', 'Api\PostController@read');
});
