class Contacts
  attr_accessor :contacts

  def initialize(response)
    @contacts = []
    response["records"].each do |record|
      contact = record["fields"].transform_keys(&:downcase)
      next unless contact["name"] && (contact["links"] || contact["phones"])

      data = contact["phones"].to_s.split(",").map do|phone|
        next unless phone.strip

        {text: phone, type: "phone"}
      end.compact
      data += contact["links"].to_s.split(",").map do|link|
        next unless link.strip
        {text: link, type: "link"}
      end.compact
      @contacts << {name: contact["name"], data: data}
    end
  end

  def to_json
    {
      contacts: contacts,
    }
  end
end
