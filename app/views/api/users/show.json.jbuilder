if current_user == @user
  show_images = true
  show_comments = false
else
  show_images = false
  show_comments = true
end

json.partial!('api/users/user', user: @user, show_images: show_images, show_comments: show_comments)
