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
    'as' => 'enquiry.post_enquiry',
    'uses' => 'EnquiryController@getEnquiry'
));
