module Api::V1
  class ApiController < ApplicationController
    private
    def pagination_meta(obj)
      Hash.new.tap do |page|
        page[:pageSize] = page[:per_page] = params[:per_page].to_i if params[:per_page]
        page[:current] = page[:page] = obj.current_page
        page[:next_page] = obj.next_page
        page[:prev_page] = obj.prev_page
        page[:first_page] = obj.first_page?
        page[:last_page] = obj.last_page?
        page[:total_page] = obj.total_pages
        page[:total] = page[:total_count] = obj.total_count
      end
    end

    def request_uuid
      request.headers["uuid"]
    end

    def request_location
      latitude = request.headers["latitude"].to_f
      longitude = request.headers["longitude"].to_f
      if current_user && current_user.latitude && current_user.longitude
        latitude = current_user.latitude
        longitude = current_user.longitude
      end

      {
        lat: latitude,
        lon: longitude
      }
    end
  end
end
