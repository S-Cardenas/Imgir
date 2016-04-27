json.extract!(
	user,
	:id, :username, :password_digest
)

if show_images ||= false
	json.images do
		json.array!(user.images) do |image|
			json.partial!('api/images/image', image: image, show_user: false)
		end
	end
end

if show_comments ||= false
  json.comments do
    json.array!(user.comments) do |comment|
      json.partial!('api/comments/comment', comment: comment, show_user: true, show_image: true)
    end
  end
end
