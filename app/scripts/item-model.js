var Item = Backbone.Model.extend({});

var ItemsCollection = Backbone.Collection.extend({

	model: Item,

	url: 'https://openapi.etsy.com/v2/listings/active.js?&fields=title,price,listing_id&includes=Images&api_key='.api key.'&limit=10&callback=?',

	parse: function(response) {
    return response.results;
  }

});



// parse will allow us to grab a single object out of the large
// etsy api object which has a response property which is an array of objects. 