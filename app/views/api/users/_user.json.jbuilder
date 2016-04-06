json.extract!(
	user,
	:id, :username, :password_digest
)

if show_images
	json.images do
		json.array!(user.images) do |image|
			json.partial!('api/images/image', image: image, show_user: false)
		end
	end
end
