f = File.open('text.txt', 'w')
old_out = $stdout
$stdout = f
a = 10 ; p a
f.close
