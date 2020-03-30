class Contacts
  attr_accessor :contacts

  def initialize(response)
    @contacts = []
    response["records"].each do |record|
      contact = record["fields"].transform_keys(&:downcase)
      next unless contact["name"] && (contact["links"] || contact["phones"])

      data = contact["phones"].split(",").map do|phone|
        {text: phone, type: "phone"}
      end
      data += contact["links"].split(",").map do|phone|
        {text: phone, type: "link"}
      end
      @contacts << {name: contact["name"], data: data}
    end
  end

  def to_json
    {
      contacts: contacts,
    }
  end
end
