var MainRouter = Backbone.Router.extend({

	routes: {
		'list' : 'showList',
		'list/:keyword' : 'showAll',
		'items/:id' : 'showItem'
		
	},
	initialize: function(){
		console.log('greetings');
		this.items = new ItemsCollection();

		console.log('what',this.items)
		this.items.on('add', function(item){
			new ListView({model: item});
		});
	},

	
	showAll: function(keyword){

		this.items.url += ('&keywords=' + keyword);


		this.items.fetch();

	},

	showItem: function(id){
		$('.content').html('');

		if (this.items.get('id')) {
			var focusItem = this.items.get(id);
			new ItemView({model: focusItem});
		} else {
			this.items.fetch({
				success: function(collection){
					console.log('what', collection)
					var focusItem = collection.get(id);
					console.log('id is',id)
					console.log('focusItem is ', focusItem)
					new ItemView({model: focusItem});
				}
			})
		}

	}


});




