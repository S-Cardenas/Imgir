# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160427200421) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "albums", force: :cascade do |t|
    t.integer  "user_id"
    t.string   "title",       null: false
    t.string   "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
  end

  create_table "comments", force: :cascade do |t|
    t.string   "body",              null: false
    t.integer  "user_id"
    t.integer  "image_id"
    t.integer  "parent_comment_id"
    t.datetime "created_at",        null: false
    t.datetime "updated_at",        null: false
  end

  add_index "comments", ["image_id"], name: "index_comments_on_image_id", using: :btree
  add_index "comments", ["user_id"], name: "index_comments_on_user_id", using: :btree

  create_table "images", force: :cascade do |t|
    t.string   "title"
    t.integer  "user_id"
    t.integer  "album_id"
    t.boolean  "private",          default: true
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.string   "description"
    t.string   "img_file_name"
    t.string   "img_content_type"
    t.integer  "img_file_size"
    t.datetime "img_updated_at"
  end

  create_table "pg_search_documents", force: :cascade do |t|
    t.text     "content"
    t.integer  "searchable_id"
    t.string   "searchable_type"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
  end

  add_index "pg_search_documents", ["searchable_type", "searchable_id"], name: "index_pg_search_documents_on_searchable_type_and_searchable_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest"
    t.string   "session_token"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.string   "uid"
    t.string   "provider"
  end

  add_index "users", ["username"], name: "index_users_on_username", unique: true, using: :btree

end
