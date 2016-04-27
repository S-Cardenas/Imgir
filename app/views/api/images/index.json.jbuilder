json.array!(@images) do |image|
	json.partial!('api/images/image', image: image, show_user: true, show_comments: false)
end
