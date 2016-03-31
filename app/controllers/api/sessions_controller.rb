class Api::SessionsController < ApplicationController
	def new
		render :new
	end

	def create
		@user = User.find_by_credentials(
		params[:user][:username],
		 params[:user][:password]
		 )
		login_user!
		render json: @user
	end

	def show
		if logged_in?
			render json: current_user
		else
			render json: { message: "Not logged in" }, status: 401
		end
	end

	def destroy
		logout_user!
		render json: {}
	end
end
