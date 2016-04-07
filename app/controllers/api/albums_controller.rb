class Api::AlbumsController < ApplicationController

	def create
		@album = current_user.albums.new(album_params)
		if @album.save
			render :show
		else
			render json: {errors: @album.errors.full_messages}, status: 422
		end
	end

	def update
		@album = current_user.albums.find(params[:id])
		if @album.update(album_params)
			render :show
		else
			render json: {errors: @album.errors.full_messages}, status: 422
		end
	end

	def destroy
		@album = Album.find(params[:id])
		if @album.destroy
			render :index
		else
			render json: {errors: @album.errors.full_messages}, status: 422
		end
	end

	private

	def album_params
		params.require(:album).permit(:title, :description)
	end

end
