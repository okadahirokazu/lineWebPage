// AngularJSアプリオブジェクト（全ページからアクセス可能）
var app = angular.module('myApp', ['onsen.directives']);

// アプリ初期処理
app.init = function(){
	app.data = {};	// アプリ内項目データをセット
	app.views = {};	// アプリ内共通オブジェクト
	app.start();	// AngularJSアプリ開始
};

// AngularJSアプリとして起動
app.start = function(){
	// AngularJSアプリの開始
	angular.bootstrap(document, ['myApp']);
};
