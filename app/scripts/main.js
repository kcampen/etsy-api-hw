console.log('r a w w r');

$(document).ready(function(){

	router = new MainRouter();

	Backbone.history.start();

var items = new ItemsCollection();
	
$('.js-search-btn').on('click', function(){

	var keywords = $('.js-search-input').val();
	
	 window.location.hash = 'list/' + keywords;
	 
	console.log(keywords);
	$('.js-search-input').val('');
});		

$('.js-list-view').on('click', function(){
	var id = this.model.get('listing_id');

	window.location.hash = 'items/' + id;
	console.log(id);
})
	
});

 // window.location.hash = 'list/:keyword';< not correct. must add outside of string
// on the click function the input value will be captured and renamed as 'keywords'
// then the location.hash will = 'list/' plus that new variable keywords
// this will change the url. the router's job is to listen to changes in the url
// once the change to the url is made the router will react to those changes
// and those changes to the url are in the showItems method of the router
// which then fetches data from the api and then renders it into the page.
// 5 things happen at once. 1) on the click function you capture the input val
// 2) you turn that val into a var keywords 3) you then add that var keywords
// to the url. 4)the router is listening to changes in the url and then sees the change
// and reacts to that 5) after reacting to this change the router renders the new infoh






