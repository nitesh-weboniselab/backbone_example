var Blog = Blog || {};
Blog.test = Blog.test || {};

Blog.test.router = (function(){
    return{
        AppRouter:Backbone.Router.extend({
            routes:{
                '':'index',
                'add/blog':'newBlog'
            },
            initialize:function(){

            },
            index:function(){
                this.blogList = new Blog.test.model.listBlog();

                this.blogListView = new Blog.test.View.blogListView({
                    model:this.blogList,
                    el: $('#message'),
                    parent: this

                });
                this.blogList.fetch();
            },
            newBlog:function(){
                this.blogadd = new Blog.test.model.saveBlog();
                this.blogAddView = new Blog.test.View.blogAddView({
                    model:this.blogadd,
                    parent:this
                });
            }
        })

    };
})();
var app = new Blog.test.router.AppRouter();
Backbone.history.start();