json.extract!(
	image,
	:id, :title, :description, :user_id, :album_id, :private
)
json.image_url asset_path(image.img.url)
if show_user
	json.user do
		json.partial!('api/users/user', user: image.user, show_images: false)
	end
end
