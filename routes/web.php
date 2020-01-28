<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', 'MainController@index')->name('main');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::post('/enquiry/post_enquiry', array (
    'as' => 'enquiry.post_enquiry',
    'uses' => 'EnquiryController@postEnquiry'
));

Route::get('/enquiry/get_enquiry', array (
    'as' => 'enquiry.get_enquiry',
    'uses' => 'EnquiryController@getEnquiry'
));

Route::get('/enquiry/get_enquiries', array (
    'as' => 'enquiry.get_enquiries',
    'uses' => 'EnquiryController@getEnquiries'
));

Route::get('/enquiry/{id}', array (
    'as' => 'enquiry.show',
    'uses' => 'EnquiryController@show'
));

Route::post('/reply/post_reply', array (
    'as' => 'reply.post_reply',
    'uses' => 'ReplyController@postReply'
));

Route::get('/reply/get_reply/{id}', array (
    'as' => 'reply.get_reply',
    'uses' => 'ReplyController@getReply'
));
