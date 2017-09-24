Rails.application.routes.draw do
  devise_for :users, controllers: { sessions: 'users/sessions', registrations: 'users/registrations' }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: "procesos_electorales#index"
  resources :users

  post 'api/authenticate', to: 'api/authentication#create', email: 'email', password: 'password'
end
