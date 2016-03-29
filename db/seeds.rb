# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
user1 = User.create!(username: "Stephawn", password: "123456")
user3 = User.create!(username: "Conneither", password: "123456")
user4 = User.create!(username: "GothamsHero", password: "123456")

image1 = Image.create!(title: "stupid cat gif", user_id: 1, private: false)
image2 = Image.create!(title: "another stupid cat gif", user_id: 1, private: true)
image3 = Image.create!(title: "a very intelligent cat jpeg", user_id: 3, private: false)
