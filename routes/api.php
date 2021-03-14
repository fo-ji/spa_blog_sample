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
    // ユーザー登録
    Route::post('/register', 'Api\AuthController@register');
    // ユーザーログイン
    Route::post('/login', 'Api\AuthController@login');
});

Route::group(['middleware' => 'auth:api'], function() {
    // 認証済みのユーザーの取得
    Route::get('/user', function(Request $request) {
        return $request->user();
    });
});
