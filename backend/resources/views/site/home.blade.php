@extends('template.template')

@section('title')

@section('sidebar')

<p>ここはメインのサイドバーに追加される</p>
@endsection
    <!-- Masthead-->
    <header class="masthead">
        <div class="container">
            <!-- <div class="masthead-subheading">Welcome To Our Studio!</div> -->
            <div class="masthead-heading text-uppercase">MusicBar Navi</div>
            <div class="masthead-subheading">音楽好きのための音楽を聞くことができる飲食店を探すことができるサービスです</div>
            <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
        </div>
    </header>

@section('content')
<div id='app'>
  <script src="{{ mix('js/mbs.js') }}"></script>
</div>
@endsection