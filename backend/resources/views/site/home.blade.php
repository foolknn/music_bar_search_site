@extends('template.template')

@section('title')

@section('sidebar')

<p>ここはメインのサイドバーに追加される</p>
@endsection

@section('content')
<div id='app'>
  <script src="{{ mix('js/mbs.js') }}"></script>
</div>
@endsection