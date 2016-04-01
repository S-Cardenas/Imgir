Rails.application.routes.draw do
	root to: 'static_pages#root'
	resources :users, only: [:new, :create]
	namespace :api, defaults: {format: :json} do
		resources :images
		resource :session, only: [:new, :show, :create, :destroy]
	end

	get "*unmatched_route", to: "static_pages#root"
end
