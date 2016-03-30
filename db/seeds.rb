
user1 = User.create!(username: "Stephawn", password: "1234567")
user2 = User.create!(username: "LeiAufBro", password: "1234567")
user3 = User.create!(username: "Conneither", password: "1234567")
user4 = User.create!(username: "GothamsHero", password: "1234567")

image1 = Image.create!(title: "stupid cat gif", user_id: 1, private: false, description: "Look at how stupid this cat is. What a stupid gif.")
image2 = Image.create!(title: "another stupid cat gif", user_id: 1, private: true, description: "I am not the most creative when it comes to cat uploads.")
image3 = Image.create!(title: "a very intelligent cat jpeg", user_id: 3, private: false, description: "Look at how smart this cat is. What a brilliant jpeg.")
