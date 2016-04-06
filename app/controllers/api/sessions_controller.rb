class Api::SessionsController < ApplicationController
	def new
		render :new
	end

	def create
		@user = User.find_by_credentials(
		params[:user][:username],
		 params[:user][:password]
		 )
		 if @user
			login!(@user)
			render json: @user
		else
			render json: { message: "Invalid credentials" }, status: 401
		end
	end

	def show
		if logged_in?
			render json: current_user
		else
			render json: nil
		end
	end

	def destroy
		logout_user!
		render json: {}
	end
end
