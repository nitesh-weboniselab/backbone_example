var Blog = Blog || {};
Blog.test = Blog.test || {};

Blog.test.collection= (function(){
    return{
       blogList: Backbone.Collection.extend(),
        bloglisting: Backbone.Collection.extend()

    };
})();