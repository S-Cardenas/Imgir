User.destroy_all

user1 = User.create!(username: "Stephawn", password: "1234567")
user2 = User.create!(username: "LeiAufBro", password: "1234567")
user3 = User.create!(username: "Conneither", password: "1234567")
user4 = User.create!(username: "GothamsHero", password: "1234567")

Image.destroy_all

image1 = Image.create!(title: "stupid cat gif", user_id: user1.id, private: false, description: "Look at how stupid this cat is. What a stupid gif.")
image2 = Image.create!(title: "another stupid cat gif", user_id: user1.id, private: true, description: "I am not the most creative when it comes to cat uploads.", img: File.open("app/assets/images/gir_dog_suit_halfway.png"))
image3 = Image.create!(title: "a very intelligent cat jpeg", user_id: user3.id, private: false, description: "Look at how smart this cat is. What a brilliant jpeg.", img: File.open("app/assets/images/gir_with_pig.png"))
