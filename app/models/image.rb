class Image < ActiveRecord::Base

	has_attached_file :img, default_url: "gir.jpg"
	validates_attachment_content_type :img, content_type: /\Aimage\/.*\Z/
	belongs_to :user
	belongs_to :album
	has_many :comments

	def comments_by_parent
		comments_by_parent = Hash.new { |hash, key| hash[key] = [] }

		self.comments.includes(:user).each do |comment|
			comments_by_parent[comment.parent_comment_id] << comment
		end

		comments_by_parent
	end
end
