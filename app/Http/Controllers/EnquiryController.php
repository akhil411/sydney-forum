<?php

namespace App\Http\Controllers;

use App\Models\Enquiry;
use App\Http\Resources\EnquiryListResource;
use App\Http\Resources\EnquiryResource;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class EnquiryController extends Controller
{
    public function postEnquiry(Request $request)
    {
        $enquiry = new Enquiry;

        $enquiry->subject = $request->subject;
        $enquiry->description = $request->description;
        $enquiry->user_id = Auth::user()->id;

        $enquiry->save();
    }
    public function getEnquiry()
    {
        $enquiry = Enquiry::with('user')->where('user_id', Auth::user()->id)->orderBy('id', 'desc')->get();

        return EnquiryListResource::collection($enquiry);
    }

    public function show($id)
    {
        $enquiry = Enquiry::with('user')->where('id', $id)->first();

        $enquiryItem = new EnquiryResource($enquiry);

        return view('enquiry', [
            'id'        => $id,
            'enquiry'   => $enquiryItem,
        ]);
    }
}
