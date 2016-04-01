json.extract!(
	image,
	:id, :title, :description, :user_id, :album_id, :private
)
json.image_url asset_path(image.img.url)
json.user image.user
