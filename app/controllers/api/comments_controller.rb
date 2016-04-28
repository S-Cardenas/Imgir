class Api::CommentsController < ApplicationController

	def index
		@comments = Comment.where("image_id = ?", params[:image_id]).order(created_at: :desc)
		@image = Image.find(params[:image_id])
		render :index
	end

	def create
    unless current_user
      render json: { message: "Go log in." }, status: 401
    end
		@comment = current_user.comments.new(comment_params)
		@comment.image_id = params[:image_id]
		if @comment.save
			render :show
		else
			render json: {errors: @comment.errors.full_messages}, status: 422
		end
	end


	def destroy
		@comment = Comment.find_by(params[:id])
		@comment.destroy!
		render :show
	end

	private

	def comment_params
		params.require(:comment).permit(:body, :parent_comment_id)
	end


end
