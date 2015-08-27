
require 'rubygems'
require 'sinatra'
require "execjs"

get "/" do
	haml :index
end

post "/eval" do
	# puts params["code"]
	output = eval(params["code"])
	haml :output, :locals => { :output => output }
end