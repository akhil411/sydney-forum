<?php

namespace App\Http\Controllers;

use App\Models\Reply;
use App\Http\Resources\ReplyResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ReplyController extends Controller
{
    public function postReply(Request $request)
    {
        $reply = new Reply;

        $reply->reply = $request->reply;
        $reply->enquiry_id = $request->enquiry_id;
        $reply->user_id = Auth::user()->id;

        $reply->save();
    }
   
    public function getReply($id)
    {
        $replies = Reply::with('user')->where('enquiry_id', $id)->orderBy('id', 'desc')->get();

        return ReplyResource::collection($replies);
    }
}