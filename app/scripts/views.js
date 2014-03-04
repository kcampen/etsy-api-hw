// code from class
var ItemsView = Backbone.View.extend({

	initialize: function(options) {

	}
});
// we didnt actually need the ItemsView for this project. if you click on stuff 
// maybe we need the second view.
// we could just have an event that when either painting is clicked it shows price and
// we would not need another view.
// but if we use this view it would have to have knowledge of its sibling view
// views should be aware of parent but not sibling. 

// with this view we have one view that shows two models.
var RowView = Backbone.View.extend({

	className = 'item-row',

	itemTemplate: _.template($('#item-template').text()),

	initialize: function(options) {
		this.models = options.models 
		// we are writing this after we wrote rowView in equalArray
		// now we write template? 

		$('.quiz-wrapper').append(this.el);
		this.render();
	},

	render: function(options) {
		var shuffled = _.sample(this.models, this.models.length)
		var that = this;
		_.each(shuffled, function(item){
		this.$el.append(this.itemTemplate(item.attributes));
		// 						was 	this.models[0] changed to item
		// inside each this. doesnt work so you have to say this=that

		})
		// instead of appending we could have instanciated a new view.
		// or you could append addClass of price. 
		// we use the 0 b/c the models is an array
		// also we dont need a lot of images or it will slow everything down. 

	}

});

// main.js

var cheapItems = new ItemsCollection();
cheapItems.url += "&tags=art,painting&min_price=40&max_price=100";
					// hardcoding url. can also put in jquery keyword or whatever
					// after you add in a click function
var expensiveItems = new ItemsCollection();
expensiveItems.url += "&tags=art,painting&min_price=1000&max_price=5000".trim();

cheapItems.fetch();
expensiveItems.fetch();
// these two things are the same thing. we havent changed the url. and they dont finish
// fetching until after we need them.

var readyCollections = 0

cheapItems.fetch().then(function(){readyCollections += 1})
expensiveItems.fetch().then(function(){readyCollections += 1})
// these two things happen at the same time. fetching 2 things at the same time.

var collectionReadyLoop = setInterval(function(){  //this is a function literal
	// we created a variable its return value is the return loop. 
	// we had to create this var b/c if we just used "if(readyCollections..." the browser
	// would blaze through this. we have to keep checking the loop.
	if (readyCollections === 2) {
		renderRows();
		clearInterval(collectionReadyLoop);
		// we have to clear the loop to make it stop
	}
	// call setInterval with the perens invokes the function with the function as an arg.
}, 50)
// 50 = every 50 milliseconds. how long between runs. it might take longer than 50ms.
// all of this allows you to fetch lots of data async. 


function equalizeArrays(first, second){

}
// dont write this in real life.
function renderRows(){
	console.log('both are finished');
	// this below is where the magic happens. maybe take it out of main.js
	// maybe wrap it in router or collection
								//  condition operator				if true				if false
	var sampleAmount = cheapItems.length < expensiveItems.length ? cheapItems.length : expensiveItems.length

	var quizArray = _.zip( _.sample(cheapItems.models, sampleAmount), 
							_.sample(expensiveItems.model, sampleAmount));

	_.each(quizArray, function(row){
		// row is just param name. nothing special. just what it is.
		new RowView({models: row});
		// no magic el models. will have to go in and do this.models. 
		// calling modelS with s because it keeps array in tact. arrays are handy becuase
		// they are a set of data. 

	})

	// we need to zip the sample and get the max length

}

// The : up there - turnarary is flow control. its an if else 
// this is the only use of the ? but : has many operations in js.
// overloaded colon.


// html

<script type="text/template" id="item-template">
 <img src="<%= Images[0].url_fullxfull %>">
</script>
