class AddProviderAndUidToUsers < ActiveRecord::Migration
  def change
		add_column :users, :uid, :string
		add_column :users, :provider, :string
		change_column :users, :password_digest, :string, null: true

  end
end
