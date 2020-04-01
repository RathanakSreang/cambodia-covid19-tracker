#!/usr/bin/env puma

directory '/home/deployer/production/cambodia-covid19-tracker'
rackup "/home/deployer/production/cambodia-covid19-tracker/config.ru"
environment 'production'

tag 'covid19'

pidfile "/home/deployer/production/cambodia-covid19-tracker/tmp/pids/puma.pid"
state_path "/home/deployer/production/cambodia-covid19-tracker/tmp/pids/puma.state"
stdout_redirect '/home/deployer/production/cambodia-covid19-tracker/log/puma_access.log', '/home/deployer/production/cambodia-covid19-tracker/log/puma_error.log', true


threads 0,16

bind 'unix:///home/deployer/production/cambodia-covid19-tracker/tmp/sockets/puma.sock'

workers 0


prune_bundler


on_restart do
  puts 'Refreshing Gemfile'
  ENV["BUNDLE_GEMFILE"] = ""
end
