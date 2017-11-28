// AngularJSアプリオブジェクト（全ページからアクセス可能）
var app = angular.module('myApp', ['onsen.directives']);

// アプリ初期処理
app.init = function(){
	// Nodeモジュール
	// 必要な場合セット
	// 独自モジュール
	app.util = util;
	// アプリ内項目データをセット
	app.data = {};
	// アプリ内共通オブジェクト
	app.views = {};
	// AngularJSアプリ開始
	app.start();
};

// AngularJSアプリとして起動
app.start = function(){
	// AngularJSアプリの開始
	angular.bootstrap(document, ['myApp']);
};
