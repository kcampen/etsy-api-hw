var MainRouter = Backbone.Router.extend({

	routes: {
		'list' : 'showList',
		'list/:keyword' : 'showItems'
		
	},

	initialize: function(){
		console.log('greetings');
		this.items = new ItemsCollection;
		this.items.on('add', function(item){
			new ListView({model: item})
		})
	},

	
	showItems: function(keyword){
		$('.content').html('');

		this.items.url += ('&keywords=' + keyword)


		this.items.fetch();

	}

})




