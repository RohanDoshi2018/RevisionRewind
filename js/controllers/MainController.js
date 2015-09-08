app.controller('MainController', ['$scope', function($scope) { 
	var dmp = new diff_match_patch();

	$scope.draft = "";
	$scope.draftDeltas = "{}";

	// run on each key click in textbox
	$scope.onKeyUp = function() {
			var a = $scope.draft;
			var b = $("#input").val();
			if (a != b) {
				var delta = {};
				var timestamp = new Date().getTime();
				delta[timestamp] = dmp.diff_toDelta(dmp.diff_main(a, b));
				console.log(dmp.diff_main(a, b));
				console.log(dmp.diff_prettyHtml(dmp.diff_main(a, b)));
				appendToDeltaFile(delta);
				$scope.draft = b;
			}
	};

	// record and save new delta changes
	function appendToDeltaFile(delta) {
		var oldDeltas = JSON.parse( $scope.draftDeltas );
		var newDeltas = $.extend(oldDeltas, delta);
		$scope.draftDeltas = JSON.stringify(newDeltas);
	}

	// get playback of writing thus far
	$scope.play = function() {
		// add code
	};



}]);