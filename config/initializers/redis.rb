require "redis-namespace"

$redis = Redis::Namespace.new("khmer-covid-19", redis: Redis.new)
