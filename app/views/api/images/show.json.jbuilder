json.comment_count @image.comments.count
json.partial!('api/images/image', image: @image, show_user: true, show_comments: true)
