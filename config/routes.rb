Rails.application.routes.draw do
  scope module: 'api' do
    namespace :v1 do
      get "dashboard", to: "dashboard#dashboard"
      get "links", to: "dashboard#links"
      get "contacts", to: "dashboard#contacts"
      get "news_list", to: "dashboard#news_list"
      get "news_detail", to: "dashboard#news_detail"
    end
  end
end
