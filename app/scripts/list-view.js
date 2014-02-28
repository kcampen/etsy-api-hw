var ListView = Backbone.View.extend({


	createTemplate: _.template($('#list-template').text()),

	initialize: function(){

		$('.content').append(this.el);
		
		this.render();
	},

	render: function(){
		var renderTemplate = this.createTemplate(this.model.attributes);
		
		this.$el.html(renderTemplate);

	}
})


// var SearchView = Backbone.View.extend({
// 	tagName: 'a',

// 	searchNewTemplate: _.template($('#list-template').text()),

// 	initialize: function(){
// 		$('.item-list').append(this.el);

// 		this.render();
// 	},

// 	render: function(){
// 		this.$el.html(renderTemplate);
// 	},

	// searchResults: function(){
	// 	if (keywords) {

	// 	this.items.url = 'https://openapi.etsy.com/v2/listings/active.js?callback=?&fields=title,price,'+ keywords '&includes=Images&api_key=ja3tb7xftao8fo07ltq8iiza&limit=10'
	// 	}
	// },


