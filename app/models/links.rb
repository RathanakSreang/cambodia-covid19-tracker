class Links
  attr_accessor :links
  def initialize(response)
    @links = []
    response["records"].each do |record|
      link = record["fields"].transform_keys(&:downcase)
      next unless link["title"] && link["link"]

      @links << link
    end
  end

  def to_json
    {
      links: links,
    }
  end
end
