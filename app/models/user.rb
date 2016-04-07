class User < ActiveRecord::Base
	validates :username, presence: true
	validates :username, uniqueness: true
	validate :secure_account
	validates :password, length: { minimum: 7, allow_nil: true }
	after_initialize :ensure_session_token
	attr_reader :password

	has_many(:images)
	has_many(:albums)

	def self.find_by_credentials(username, password)
		user = User.find_by(username: username)
		return user if user && user.is_password?(password)
		nil
	end

	def self.find_or_create_by_auth_hash(auth_hash)
		provider = auth_hash[:provider]
		uid = auth_hash[:uid]

		user = User.find_by(provider: provider, uid: uid)
		return user if user
		User.create(
			provider: provider,
			uid: uid,
			username: "#{auth_hash[:extra][:raw_info][:name]}" + "_" "#{auth_hash[:extra][:raw_info][:email]}" + "#{SecureRandom::base64(4)}"
		)
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

	def secure_account
		unless self.password_digest || self.uid
			errors[:base] << "You need either a password or a UID for an account"
		end
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
