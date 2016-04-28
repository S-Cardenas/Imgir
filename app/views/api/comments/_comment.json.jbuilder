json.extract!(
	comment,
	:id, :body, :user_id, :image_id, :created_at
)

if show_user ||= false
	json.user do
		json.partial!('api/users/user', user: comment.user, show_images: false)
	end
end

comments_by_parent ||= false
if comments_by_parent
	json.childComments do
		json.array!(comments_by_parent[comment.id]) do |child_comment|
			json.partial!('api/comments/comment', comment: child_comment, show_user: true, comments_by_parent: comments_by_parent, show_image: false)
		end
	end
end

if show_image ||= false
  json.image do
    json.partial!('api/images/image', image: comment.image, show_user: false, show_comments: false)
  end
end
