class Image < ActiveRecord::Base

	has_attached_file :img, default_url: "gir.jpg"
	validates_attachment_content_type :img, content_type: /\Aimage\/.*\Z/
	belongs_to (:user)
end
