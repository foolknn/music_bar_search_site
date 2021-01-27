<?php

namespace App\Http\Controllers;

use App\Models\EntSearchParams as ModelsEntSearchParams;
use Illuminate\Http\Request;

class TopPageController extends Controller
{

  private static $token = '8bccc364ccb3713c';

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
  
  public function index()
  {

    $pref = $this->getPref();

    return view('site/home');
    
  }

  /**
     * 都道府県リストを取得
     * @return object
     */

  public static function getPref()
  {
    $uri = "https://webservice.recruit.co.jp/hotpepper/service_area/v1/";
    $accessKey = self::$token;
    $format = "json";

    $url = sprintf("%s?format=%s&key=%s", $uri, $format, $accessKey);
    $json = @file_get_contents($url);
    $obj = json_decode($json);
    
    return response()->json($obj, 200);
  }

  /**
   * ジャンルを取得
   * @return object
   */

  public static function getGenre()
  {
    $uri = "http://webservice.recruit.co.jp/hotpepper/genre/v1/";
    $accessKey = self::$token;
    $format = "json";

    $url = sprintf("%s?format=%s&key=%s", $uri, $format, $accessKey);
    $json = @file_get_contents($url);
    $obj = json_decode($json);

    return response()->json($obj, 200);
  }

}
