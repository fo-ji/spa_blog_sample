<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use App\Http\Requests\UserCreateRequest;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use \Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Auth;
// use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Log;

class AuthController extends Controller
{
    // use AuthenticatesUsers;

    public function register(Request $request)
    {
        /** @var Illuminate\Validation\Validator $validator */
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'email' => 'required|email',
            'role' => 'required',
            'password' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->messages(), Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        return User::create([
            'name' =>  $request->name,
            'email' => $request->email,
            'role' => $request->role,
            'password' => Hash::make($request->password),
            'api_token' => str_random(60),
        ]);
    }

    public function login(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if ($user && Hash::check($request->password, $user->password)) {
            $user->api_token = str_random(60);
            $user->update();
            Auth::login($user);
            return $user;
        } else {
            return response()->json(['status' => 'fail'], 401);
        }
    }

    public function logout(Request $request)
    {
        $user = Auth::user();
        Log::Info($user);
        $user->api_token = null;
        $user->update();

        // // [TODO]ログアウト処理
        // Auth::logout();

        return $user; 
    }
}
