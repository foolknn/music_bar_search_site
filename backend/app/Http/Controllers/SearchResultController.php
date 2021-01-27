<?php

namespace App\Http\Controllers;

use App\Models\EntSearchParams as ModelsEntSearchParams;
use Illuminate\Http\Request;

class SearchResultController extends Controller
{
  /**
   * Create a new controller instance.
   *
   * @return void
   */
  // public function __construct()
  // {
  //   $this->middleware('auth');
  // }

  /**
   * Show the application dashboard.
   *
   * @return \Illuminate\Contracts\Support\Renderable
   */

  private static $token = '8bccc364ccb3713c';

  public function getSearchParm()
  {
    return view('site/result');
  }

  /** 検索結果を取得
    * @return object
   */

  public static function getResult(Request $request)
  {
    $uri = "http://webservice.recruit.co.jp/hotpepper/gourmet/v1/";
    $accessKey = self::$token;
    $format = "json";
    $entSearchParams = new ModelsEntSearchParams();
    $entSearchParams->area = $request->input('area');
    $entSearchParams->freeWord = $request->input('freeWord')." 音楽";
    $entSearchParams->isShow = $request->input('isShow') === null ? false : $request->input('isShow');
    $entSearchParams->isBand = $request->input('isBand') === null ? false : $request->input('isBand');

    $url = sprintf("%s?service_area=%s&keyword=%s&show=%s&band=%s&karaoke=%s&format=%s&key=%s", 
    $uri, 
    $entSearchParams->area, 
    $entSearchParams->freeWord, 
    $entSearchParams->isShow, 
    $entSearchParams->isBand, 
    false, 
    $format, 
    $accessKey);
    $json = @file_get_contents($url);
    $obj = json_decode($json);
    
    return response()->json($obj, 200);
  }
}
