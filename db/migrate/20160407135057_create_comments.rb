class CreateComments < ActiveRecord::Migration
  def change
    create_table :comments do |t|
			t.string :body, null: false
			t.integer :user_id, index: true
			t.integer :image_id, index: true
			t.integer :parent_comment_id

      t.timestamps null: false
    end
  end
end
