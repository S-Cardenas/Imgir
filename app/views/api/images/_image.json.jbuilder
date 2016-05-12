json.extract!(
	image,
	:id, :title, :description, :user_id, :album_id, :private
)

if resize == "index"
  json.image_url asset_path(image.img.url(:index))
elsif resize == "comment"
  json.image_url asset_path(image.img.url(:comment))
else
  json.image_url asset_path(image.img.url)
end

if show_user ||= false
	json.user do
		json.partial!('api/users/user', user: image.user, show_images: false, show_comments: false)
	end
end

if show_comments ||= false
  json.comments do
  	json.array!(image.comments_by_parent[nil]) do |top_level_comment|
  		json.partial!('api/comments/comment', comment: top_level_comment, show_user: true, comments_by_parent: image.comments_by_parent, show_image: false)
  	end
  end
end
