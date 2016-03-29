class SessionsController < ApplicationController
	def new
		render :new
	end

	def create
		@user = User.find_by_credentials(
		params[:user][:username],
		 params[:user][:password]
		 )
		login_user!
	end

	def destroy
		logout_user!
	end
end
