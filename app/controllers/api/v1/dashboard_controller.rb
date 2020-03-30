module Api::V1
  class DashboardController < ApiController
    def dashboard
      render json: airtable_service.load_cases_records.to_json
    end

    def links
      render json: airtable_service.load_usefull_links.to_json
    end

    def contacts
      render json: airtable_service.load_contacts.to_json
    end

    def news_list
      render json: airtable_service.load_news_list.to_json
    end

    def news_detail
      render json: {news_detail: []}
    end

    private

    def airtable_service
      @airtable_service ||= AirtableService.new
    end
  end
end
