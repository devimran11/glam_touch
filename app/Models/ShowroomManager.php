<?php

namespace App\Models;

use Exception;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class ShowroomManager  extends Authenticatable
{
    use Notifiable;
    protected $guard = 'manager';


}
