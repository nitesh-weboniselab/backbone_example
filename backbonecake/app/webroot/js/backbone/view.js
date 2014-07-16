var Blog = Blog || {};
Blog.test = Blog.test || {};

Blog.test.View = (function(){
    return{
        blogListView : Backbone.View.extend({
            tagName:'ul',
            initialize:function(opt){
                this.parent=opt.parent
              this.collection =new Blog.test.collection.bloglisting(this.model);
                this.render();
            },

            render:function(){
                _.each(this.collection.models, function(blog){
                    this.blogListItemView = new Blog.test.View.blogListItemView({
                       model:blog
                    });

                    this.$el.append(this.blogListItemView.render().el);
               });
                $('#message').html(this.el);
            }
        }),


        blogListItemView: Backbone.View.extend({
            tagName:"li",
            template:_.template('<a href="#<%= id %>"> <%= name %> </a>'),

            render:function(){
                console.log(this.model);
                this.$el.append(this.template());
                return this;
            }
        }),

       blogAddView: Backbone.View.extend({
            tagName:'div',

        initialize:function (){
            this.render();
            },

            render:function(){
                this.$el.html(['<input type="text" id="name" size=20 placeholder="Blog Name"/>' ,
                    '<br/>',
                    '<input type="text" id="blogContent" size=20 placeholder="Blog Content"> ' ,
                    '<button class="save">Save</button>'].join(''));
                $('#message').html(this.el);
                return this;
            },
           events: {
               "click button":"SaveBlog"
           },
            SaveBlog:function(e){
                this.model.save({
                    name:$('#name').val(),
                    content:$('#blogContent').val()
                });

            }
        })
    };
})();