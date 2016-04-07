User.destroy_all

user1 = User.create!(username: "Stephawn", password: "1234567")
user2 = User.create!(username: "LeiAufBro", password: "1234567")
user3 = User.create!(username: "Conneither", password: "1234567")
user4 = User.create!(username: "GothamsHero", password: "1234567")
user5 = User.create!(username: "TheBaws25", password: "1234567")
user9000 = User.create!(username: "Guest", password: "1234567")

Image.destroy_all

image1 = Image.create!(title: "dogsuit GIR", user_id: user1.id, private: false, description: "Look at how stupid this dog suit is. What a stupid suit.")

image2 = Image.create!(title: "GIR with half of his dog suit on", user_id: user1.id, private: true, description: "I am not the most creative when it comes to uploads.", img: File.open("app/assets/images/gir_dog_suit_halfway.png"))

image3 = Image.create!(title: "GIR with a Pig", user_id: user3.id, private: false, description: "From episode 3406234056239672, where GIR finds a pig.", img: File.open("app/assets/images/gir_with_pig.png"))

image4 = Image.create!(title:"GIR and Zim share a laugh", user_id: user4.id, private: false, description: "A rare moment of mirth shared between an alien and his robotic minion.", img: File.open("app/assets/images/Zim_and_gir_laughing_together.png"))

image5 = Image.create!(title:"Serious mode GIR", user_id: user2.id, private: false, description: "GIR as he looks when he gets serious about something. Often not to much effect.", img: File.open("app/assets/images/Duty_Mode_GIR.png"))

image6 = Image.create!(title:"Dib", user_id: user9000.id, private: false, description: "The hero of our times. Who could I be, uploading this? You'll never find out, Zim!", img: File.open("app/assets/images/Dib.jpg"))

image7 = Image.create!(title:"Advanced", user_id: user5.id, private: false, description: "The Almighty Tallest simply have a better understanding of things than some pleb like Zim.", img: File.open("app/assets/images/almight_tallest.jpeg"))

image8 = Image.create!(title:"Poop Dog", user_id: user1.id, private: false, description: "Curse you poop dog!", img: File.open("app/assets/images/poop_dog.jpg"))
