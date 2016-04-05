json.extract!(
	user,
	:username, :password_digest
)


json.images user.images
