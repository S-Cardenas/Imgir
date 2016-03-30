json.extract!(
	image,
	:id, :title, :user_id, :album_id, :private
)
json.user image.user
