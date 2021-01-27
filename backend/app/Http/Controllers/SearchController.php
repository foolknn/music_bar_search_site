<?php

namespace App\Http\Controllers;

use App\Models\EntSearchParams as ModelsEntSearchParams;
use Illuminate\Http\Request;

class SearchController extends Controller
{
  /**
   * Create a new controller instance.
   *
   * @return void
   */
  public function __construct()
  {
    $this->middleware('auth');
  }

  /**
   * Show the application dashboard.
   *
   * @return \Illuminate\Contracts\Support\Renderable
   */
  public function getSearchParm(Request $request)
  {

    $entSearchParams = new ModelsEntSearchParams();
    $entSearchParams->area = $request->input('area');
    $entSearchParams->name = $request->input('name');
    $entSearchParams->date = $request->input('date');
    $entSearchParams->time = $request->input('time');
    $entSearchParams->count = $request->input('count');

    return $entSearchParams;
  }

  
}
