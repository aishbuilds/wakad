
require 'rubygems'
require 'sinatra'
require 'shotgun'

get "/" do
	haml :index
end

post "/eval" do
	open('code.rb', 'w') do |f|
		f.puts "f = File.open('text.txt', 'w')"
		f.puts "old_out = $stdout"
		f.puts "$stdout = f"
		f.puts params["code"]
		f.puts "f.close"
	end
	output = load 'code.rb'

	output_file = "text.txt"
	file = File.open(output_file, "r")
	contents = file.read
	
	haml :output, :locals => { :output => contents }
end

get '/presentation' do
	File.read(File.join('views', 'presentation.html'))
end