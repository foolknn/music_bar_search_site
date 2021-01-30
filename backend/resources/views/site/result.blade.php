@extends('template.template')

@section('title')

@section('sidebar')

<p>ここはメインのサイドバーに追加される</p>
@endsection
    <header class="masthead-noImage">
        <div class="container">
        </div>
    </header>
@section('content')
<div id='app'>
  <script src="{{ mix('js/mbr.js') }}"></script>
</div>
@endsection