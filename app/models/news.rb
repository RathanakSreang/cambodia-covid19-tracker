class News
  attr_accessor :news_list

  def initialize(response)
    @news_list = []
    response["records"].each do |record|
      news = record["fields"].transform_keys(&:downcase)
      next unless news["title"] && news["type"] && (news["description"] || news["link"])

      @news_list << news
    end
  end

  def to_json
    {
      news_list: @news_list
    }
  end
end
