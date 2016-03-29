class User < ActiveRecord::Base
	validates :username, :password_digest, presence: true
	validates :username, uniqueness: true
	validates :password, length: { minimum: 7, allow_nil: true }
	after_initialize :ensure_session_token
	attr_reader :password

	has_many(:images)

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
		return user if user && user.is_password?(password)
		nil
	end

	def password=(pword)
		self.password_digest = BCrypt::Password.create(pword)
	end

	def is_password?(pword)
		BCrypt::Password.new(password_digest).is_password?(pword)
	end

	def ensure_session_token
		self.session_token ||= get_session_token
	end

	def reset_session_token!
		self.session_token = get_session_token
		self.save!
	end

	private

	def get_session_token
		token = SecureRandom::base64(16)
		while User.exists?(session_token: token)
			token = SecureRandom::base64(16)
		end
		token
	end

end
