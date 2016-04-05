Rails.application.routes.draw do
	root to: 'static_pages#root'
	namespace :api, defaults: {format: :json} do
		resources :users, only: [:new, :create, :show]
		resources :images
		resource :session, only: [:new, :show, :create, :destroy]
	end

	get "*unmatched_route", to: "static_pages#root"
end
