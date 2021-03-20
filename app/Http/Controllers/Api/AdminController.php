<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Read;
use App\User;
use Log;

class AdminController extends Controller
{
    public function logs(Request $request, $resourceId)
    {
        $reads = Read::where('post_id', $resourceId)->get();

        if (isset($reads)) {
            foreach ($reads as $read) {
                $user = User::find($read->user_id);
                $read->user_name = $user->name;
            }

            return $reads;
        }
    }
}
