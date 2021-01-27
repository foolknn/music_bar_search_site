<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class EntSearchParams extends Model
{
    use HasFactory;
    public $area;
    public $name;
    public $time;
    public $date;
    public $count;
}
