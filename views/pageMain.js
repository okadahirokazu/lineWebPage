app.controller('pageMainController', function($scope, $http, $q){
	app.views.pageMain = $scope;
	var feedlyToken = 'AyS32sGDP5pMN-6HhrG7nronvrw54_CUxV7wTlrfCAmTdGQ3NUvnFEBxr0urDuZFJjfIjXB5iFFfyvGj_e2j1nurR1A0za4887_DBUWpUjimwlKw6zMcy11hAv6P6rZGHxLGvwuM-2ETHhe-4_Q11g9iHJZqJAIr3p8yAZk7HnJmP2_lksSBTSf7g1UUOJ6Vk-nfQH3pKnOsD956z_I6e5c8jfE3BoU:feedlydev';
	init();

	// 初期処理
	function init(){

		$scope.categoryList = [];

		getCategories();

	}

	// Feedlyで設定したカテゴリーを取得
	function getCategories(){
		// localhost以外のアクセス制限あるから取り敢えずの間はダミーデータを表示
		var array = [];
		array.push('AWS');
		array.push('Marketing');
		array.push('ガジェット');
		array.push('大阪');
		array.push('子育て');
		array.push('神戸');

		for(var i = 0; i < array.length; i++){
			var category = {
				id: i,
				label: array[i]
			};
			$scope.categoryList.push(category);
		}





		// $.ajax({
		// 	url: 'https://cloud.feedly.com/v3/categories',
		// 	type: 'GET',
		// 	beforeSend: function(xhr) {
		// 		xhr.setRequestHeader('Authorization', 'OAuth ' + feedlyToken);
		// 	},
		// 	// OK
		// 	success: function(data) {
		// 		console.log(data);
		// 		for(var i = 0; i < data.length; i++){
		// 			$scope.categoryList.push(data[i].label)
		// 		}
		// 	},
		// 	// NG
		// 	error: function (err) {
		// 		console.log(err);
		// 	}
		// });
	}
});
