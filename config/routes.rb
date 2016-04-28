Rails.application.routes.draw do
	root to: 'static_pages#root'
	namespace :api, defaults: {format: :json} do
		resources :users, only: [:new, :create, :show]
		resources :images, except: [:new, :edit] do
			resources :comments, only: [:index, :create, :destroy]
		end
		resource :session, only: [:new, :show, :create, :destroy]
		resources :albums, except: [:new, :edit]
    resources :searches, only: [:index]
	end

	get "auth/facebook/callback", to: "omniauth#facebook"
	get "*unmatched_route", to: "static_pages#root"

end
