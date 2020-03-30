class Dashboard
  attr_accessor :summary, :provinces

  def initialize(response)
    @provinces = []
    confirmed = 0
    active = 0
    recovered = 0
    dead = 0
    response["records"].each do |record|
      province = record["fields"].transform_keys(&:downcase)
      @provinces << province
      confirmed += province["confirmed"].to_i
      active += province["active"].to_i
      recovered += province["recovered"].to_i
      dead += province["dead"].to_i
    end

    @summary = {confirmed: confirmed, active: active, recovered: recovered, dead: dead}
  end

  def to_json
    {
      summary: summary,
      provinces: provinces,
    }
  end
end
