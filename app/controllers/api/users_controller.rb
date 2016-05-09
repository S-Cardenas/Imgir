class Api::UsersController < ApplicationController
	def new
		@user = User.new
		render :new
	end

	def create
		@user = User.new(user_params)
		if @user.username == "Guest"
			@user.username = User.create_guest_username
      @user.images.new(
        title: "Sample image",
        description: "A sample image to work with",
        private: true
        )
      @user.images.new(
        title: "Another sample image",
        description: "Another sample image to work with",
        private: true,
        img: File.open("app/assets/images/gir_lying_down.jpg")
      )
		end
		if @user.save
			login!(@user)
			render json: @user
		else
			flash[:errors] = @user.errors.full_messages
			render :new
		end
	end

	def show
		@user = User.find(params[:id])
		render :show
	end

	private

	def user_params
		params.require(:user).permit(:username, :password)
	end
end
