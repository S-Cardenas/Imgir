json.extract!(
	image,
	:id, :title, :description, :user_id, :album_id, :private
)
json.user image.user
