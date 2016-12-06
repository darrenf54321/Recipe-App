Template.RecipeSingle.onCreated(function(){
  var self = this;
  self.autorun(function() {
    var id = Flowrouter.getParam('id');
    self.subscribe('singleRecipes', id);
  });
});

Template.RecipeSingle.helpers({
  recipe: ()=> {
    var id = Flowrouter.getParam('id');
    return Recipes.findOne({_id: id});
  }
});
