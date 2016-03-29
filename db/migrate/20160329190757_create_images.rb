class CreateImages < ActiveRecord::Migration
  def change
    create_table :images do |t|
			t.string :title
			t.integer :user_id
			t.integer :album_id
			t.boolean :private, default: true

      t.timestamps null: false
    end
  end
end
