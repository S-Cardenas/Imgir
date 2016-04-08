class Api::ImagesController < ApplicationController

	def index
		@images = Image
			.includes(:user)
			.where("private = false OR user_id = ?", current_user.id).order(created_at: :desc)
		render :index
	end

	def show
		@image = Image.find(params[:id])
		render :show
	end

	def create
		@image = current_user.images.new(image_params)
		if @image.save
			render :show
		else
			render json: {errors: @image.errors.full_messages}, status: 422
		end
	end

	def update
		@image = current_user.images.find(params[:id])
		if @image.update(image_params)
			render :show
		else
			render json: {errors: @image.errors.full_messages}, status: 422
		end
	end

	def destroy
		@image = current_user.images.find(params[:id])
		if @image.destroy
			render :index
		else
			render json: {errors: @image.errors.full_messages}, status: 422
		end
	end

	private

	def image_params
		params.require(:image).permit(:title, :description, :private, :img)
	end
end
