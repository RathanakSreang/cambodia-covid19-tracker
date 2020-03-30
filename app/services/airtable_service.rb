require "net/http"
require "uri"

class AirtableService
  class Error < RuntimeError; end
  attr_accessor :api_key, :app_key

  def initialize
    @api_key = ENV["AIR_TABLE_API_KEY"]
    @app_key = ENV["AIR_TABLE_APP_KEY"]
  end

  def load_cases_records
    Dashboard.new(fetch_data("Cases%20Recorded"))
  end

  def load_usefull_links
    Links.new(fetch_data("Useful%20Links"))
  end

  def load_contacts
    Contacts.new(fetch_data("Contacts"))
  end

  def load_news_list
    News.new(fetch_data("News"))
  end

  private
  def fetch_data(table_name)
    url = "https://api.airtable.com/v0/#{app_key}/#{table_name}?view=Grid%20view"
    key = url
    val = $redis.get(key)
    return parse_to_json(val) if val.present?

    resp = get_request(url, request_headers)
    # save to redis
    $redis.set(key, resp.body)
    $redis.expire(key, 5.minutes)
    $redis.set("last_fetch_at", DateTime.current)

    parse_to_json resp.body
  end

  def get_request(url, headers = {})
    uri = URI.parse(url)
    http = net_http(uri)

    req = build_request(:get, uri, headers)
    http.request(req)
  end

  def build_request(method, uri, headers = {})
    if method == :post
      req = Net::HTTP::Post.new(uri.request_uri)
    else
      req = Net::HTTP::Get.new(uri.request_uri)
    end

    basic_auth = headers.delete(:basic_auth)
    headers.each { |key, value| req[key] = value }
    req.basic_auth(basic_auth[:username], basic_auth[:password]) if basic_auth
    req
  end

  def net_http(uri)
    http = Net::HTTP.new(uri.host, uri.port)
    http.use_ssl = true
    http.verify_mode = OpenSSL::SSL::VERIFY_PEER
    http
  end

  def request_headers
    {
      "Authorization" => "Bearer #{api_key}",
      "Content-Type" => "application/json"
    }
  end

  def parse_to_json content
    content.empty? ? {} : JSON.parse(content)
  end
end
