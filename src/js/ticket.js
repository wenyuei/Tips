require.config({
		paths:{
			'jQuery':'../libs/jquery'
		}
		// shim:{ 
		// 	'pack':{
		// 		deps:['min','jQuery'],
		// 		exports:'DateInput'
		// 	}
				
		// }

});
require(['jQuery'],function(a){
	console.log($);
});
	