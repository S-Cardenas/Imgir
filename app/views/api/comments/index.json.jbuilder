json.array!(@comments) do |comment|
	unless comment.parent_comment_id
		json.partial!('api/comments/comment', comment: comment, show_user: true, comments_by_parent: @image.comments_by_parent)
	end
end
