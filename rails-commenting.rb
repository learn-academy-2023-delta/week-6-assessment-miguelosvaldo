# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)// Below is the controller, which is resposible for user interactions.
class BlogPostsController < ApplicationController
  def index
    # ---2) Below Blogs model is assigned to posts. Which are fetched by the index method.
    @posts = BlogPost.all
  end

  # ---3) Below in the show method, BlogPost looks for a certain instance by using a param of a certain id and assigned it to posts.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) Below a new user object is being made and assigned to the post instance.
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) A new user object is being created, will use blog_post_params to find necesssary paramenters. 
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) Here we an object that can be edited, finding it by the id.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)//Below certain updates will occur depending on the params past through
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)//Below it is a route helper, that will redirect after deleting a post
      redirect_to blog_posts_path
    end
  end

  # ---9) // This is a string parameter, it will provide extra security 
  private
  def blog_post_params
    # ---10)//if any parameters are missing, there will be errors turned on
    params.require(:blog_post).permit(:title, :content)
  end
end
