Rails.application.routes.draw do
  resources :users, defaults: { format: :json }
  post "api/users/signup" => "users#signup", as: :user_signup
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check
  post "/auth/:provider/callback" => "sessions#create"
  get "/auth/failure" => "sessions#failure"
  get "/signout" => "sessions#destroy", :as => :signout
  get "/api/users/current" => "sessions#is_logged_in?"
  post "/login", to: "sessions#login"
  post "/api/messages/send" => "messages#send_message", as: :send_message
  get "api/messages/index" => "messages#index", as: :messages
  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in application.html.erb)
  # get "manifest" => "rails/pwa#manifest", as: :pwa_manifest
  # get "service-worker" => "rails/pwa#service_worker", as: :pwa_service_worker

  # Defines the root path route ("/")
  # root "posts#index"
end
