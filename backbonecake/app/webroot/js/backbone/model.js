var Blog = Blog || {};
Blog.test = Blog.test || {};
Blog.test.model = (function(){
    return{
      listBlog : Backbone.Model.extend({
          url:'blog/listBlog'
      }),
      saveBlog : Backbone.Model.extend({
          url : 'saveBlog'
      })
    };
})();