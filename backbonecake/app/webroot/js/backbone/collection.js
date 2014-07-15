var Blog = Blog || {};
Blog.test = Blog.test || {};

Blog.test.collection= (function(){
    return{
     /*   blogList: Backbone.Collection.extend({
            model:Blog.test.model.listBlog,
            url:'blog/listBlog'
        }),*/
        bloglisting: Backbone.Collection.extend()

    };
})();