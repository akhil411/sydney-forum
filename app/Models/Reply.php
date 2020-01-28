<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    protected $table = 'replies';

    public function user()
    {
        return $this->hasOne('App\Models\User', 'id', 'user_id');
    }
}