var MainRouter = Backbone.Router.extend({

	routes: {
		'list' : 'showList',
		'list/:keyword' : 'showAll',
		'list/:id' : 'showItem'
		
	},
	initialize: function(){
		console.log('greetings');
		this.items = new ItemsCollection();
		this.items.on('add', function(item){
			new ListView({model: item});
		});
	},

	
	showAll: function(keyword){
		$('.content').html('');

		this.items.url += ('&keywords=' + keyword);


		this.items.fetch();

	},

	showItem: function(id){
		console.log('showItem')
		var focusItem = items.find(function(item){
			return this.item.get('listing_id') === id;
		});

		new ItemView({model: focusItem});

	}

});




