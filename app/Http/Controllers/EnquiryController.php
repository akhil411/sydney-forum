<?php

namespace App\Http\Controllers;

use App\Models\Enquiry;
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
        $enquiry = Enquiry::where('user_id', Auth::user()->id)->get();

        return $enquiry;
    }
}
