@extends('layouts.app')

@section('content')
<div class="container">
    <div id="enquiry" data-id="{{ $id }}" data-auth="{{ auth::user() }}" data-enquiry='@json($enquiry)'></div>
</div>
@endsection