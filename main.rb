
require 'rubygems'
require 'sinatra'

get "/" do
	haml :index
end

post "/eval" do
	output = eval(params["code"])
	haml :output, :locals => { :output => output }
end