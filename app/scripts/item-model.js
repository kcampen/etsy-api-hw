var Item = Backbone.Model.extend({})

var ItemsCollection = Backbone.Collection.extend({

	model: Item,

	url: 'https://openapi.etsy.com/v2/listings/active.js?callback=?&fields=title,price&includes=Images&'api_key'&limit=10',

	parse: function(response) {
    return response.results;
  }

})