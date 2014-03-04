var ItemView = Backbone.View.extend({

	className: 'item-view',
	createTemplate: _.template($('#item-template').text()),

	initialize: function(){
		$('.content').append(this.el)
		this.render();
	},

	render: function(){

		this.$el.html(this.createTemplate(this.model))

	}
});