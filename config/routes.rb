Rails.application.routes.draw do
  scope module: 'api' do
    namespace :v1 do
      get "dashboard", to: "dashboard#dashboard"
      get "links", to: "dashboard#links"
      get "contacts", to: "dashboard#contacts"
    end
  end
end
