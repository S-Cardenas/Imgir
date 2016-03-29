class Api::ImagesController < ApplicationController
	# before_action :require_logged_in

	def index
		@images = Image.all
		render :index
	end
end
