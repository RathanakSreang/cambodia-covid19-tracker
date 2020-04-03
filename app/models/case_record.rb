class CaseRecord
  attr_accessor :summary, :provinces, :last_fetch_at

  def initialize(response)
    @provinces = []
    total_confirmed = 0
    total_new_confirmed = 0
    total_active = 0
    total_recovered = 0
    total_new_recovered = 0
    total_dead = 0
    total_new_dead = 0

    response["records"].each do |record|
      province = record["fields"].transform_keys(&:downcase)
      confirmed = province["confirmed"].to_i
      active = province["active"].to_i
      recovered = province["recovered"].to_i
      dead = province["dead"].to_i

      new_confirmed = province["new_confirmed"].to_i
      new_recovered = province["new_recovered"].to_i
      new_dead = province["new_dead"].to_i

      total_confirmed += confirmed
      total_active += active
      total_recovered += recovered
      total_dead += dead

      total_new_confirmed += new_confirmed
      total_new_recovered += new_recovered
      total_new_dead += new_dead

      @provinces << {
        province_en: province["province_en"],
        province: province["province"],
        confirmed: confirmed,
        active: active,
        recovered: recovered,
        dead: dead,
        new_confirmed: new_confirmed,
        new_recovered: new_recovered,
        new_dead: new_dead
      }
    end

    @summary = {
      confirmed: total_confirmed,
      active: total_active,
      recovered: total_recovered,
      dead: total_dead,
      new_confirmed: total_new_confirmed,
      new_recovered: total_new_recovered,
      new_dead: total_new_dead
    }
    @last_fetch_at = $redis.get("last_fetch_at")
  end

  def to_json
    {
      summary: summary,
      provinces: provinces,
      last_fetch_at: last_fetch_at
    }
  end
end
