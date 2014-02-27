var ListView = Backbone.View.extend({

	createTemplate: _.template($('#list-template').text()),

	initialize: function(){
		$('.item-list').append(this.el);

		this.render();
	},

	render: function(){
		console.log('hey', this.model.attributes)
		var renderTemplate = this.createTemplate(this.model.attributes);
		console.log('renderTemplate is', renderTemplate)
		this.$el.html(renderTemplate);

	}
})