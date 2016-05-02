class Comment < ActiveRecord::Base
  include PgSearch
  multisearchable against: [:body]

	validates :body, :user_id, :image_id, presence: true;

	belongs_to :image
	belongs_to :user
	has_many(
		:child_comments,
		class_name: 'Comment',
		primary_key: :id,
		foreign_key: :parent_comment_id,
    dependent: :destroy
	)

	belongs_to(
		:parent_comment,
		class_name: 'Comment',
		primary_key: :id,
		foreign_key: :parent_comment_id
	)
end
