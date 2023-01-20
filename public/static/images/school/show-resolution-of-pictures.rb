#! /usr/bin/ruby

require 'RMagick'

Dir.glob("*.{jpg,png,gif}") do |file|
  image = Magick::Image.read(file).first
  puts "#{file} is #{image.columns}x#{image.rows}"
end

