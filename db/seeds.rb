User.destroy_all

user1 = User.create!(username: "Stephawn", password: "1234567")
user2 = User.create!(username: "LeiAufBro", password: "1234567")
user3 = User.create!(username: "Conneither", password: "1234567")
user4 = User.create!(username: "GothamsHero", password: "1234567")
user5 = User.create!(username: "TheBaws25", password: "1234567")
user6 = User.create!(username: "BetterInvader", password: "1234567")
user7 = User.create!(username: "EdwardFirstOrderRoolz", password: "1234567")
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

image9 = Image.create!(title:"Bloaty's Pizza Hog, the restaurant", user_id: user7.id, private: false, description: "What a fine establishment. Did you know you can get pizza for only 39 cents there? I wonder why it's so cheap. All the kids seem to like it too. It's fun for the whole family. Except anyone with a weak immune system. Then it's less fun. Eduardo out.", img: File.open("app/assets/images/bloatys.jpg"))

image10 = Image.create!(title:"Bloaty Himself", user_id: user7.id, private: false, description: "Just look at that face", img: File.open("app/assets/images/bloatys_pizza_hog_thumb.jpg"))

image11 = Image.create!(title:"Bloaty's Hot Bod", user_id: user7.id, private: false, description: "Dat butt.", img: File.open("app/assets/images/bloatys_pizza_hog_full.jpg"))

image12 = Image.create!(title:"Best Buds", user_id: user2.id, private: false, description: "Adorable.", img: File.open("app/assets/images/gaz_angry_at_gir.png"))

image13 = Image.create!(title:"I am Gotham's Reckoning", user_id: user6.id, private: false, description: "Oh, you think the darkness is your ally. But you merely adopted the darkness. I was born in it, molded by it. I didn't see the light until I was already a man, by then it was nothing to me but BLINDING. The shadows betray you, because they belong to me!", img: File.open("app/assets/images/tak.jpg"))

image14 = Image.create!(title:"President Man for President", user_id: user5.id, private: false, description: "If you don't like politics, there's always this guy.", img: File.open("app/assets/images/president_man_by_greasedupdeafguy.jpg"))

image15 = Image.create!(title:"Mimi the SIR", user_id: user7.id, private: true, description: "The best of SIRs. Way better than GIR.", img: File.open("app/aseets/images/sir_mimi.png"))



Comment.destroy_all

comment1 = Comment.create!(body:"No, it's stupid.", user_id: user2.id, image_id: image7.id, parent_comment_id: nil)

comment2 = Comment.create!(body:"I think it's ok", user_id: user1.id, image_id: image7.id, parent_comment_id: comment1.id)

comment3 = Comment.create!(body:"Look at how tall they are!", user_id: user9000.id, image_id: image7.id, parent_comment_id: nil)

comment4 = Comment.create!(body:"ITT:Idiots", user_id: user2.id, image_id: image7.id, parent_comment_id: nil)

comment5 = Comment.create!(body:"AWW LOOKIT GIR", user_id: user9000.id, image_id: image1.id, parent_comment_id: nil)

comment6 = Comment.create!(body:"I love his little feet!", user_id: user1.id, image_id: image1.id, parent_comment_id: comment5.id)

comment7 = Comment.create!(body:"And his tongue! El-oh-el.", user_id: user5.id, image_id: image1.id, parent_comment_id: comment6.id)

comment8 = Comment.create!(body:"Invader Zim is stupid and for nerds.", user_id: user4.id, image_id: image1.id, parent_comment_id: nil)

comment10 = Comment.create!(body:"What a beautiful creature", user_id: user7.id, image_id: image11.id, parent_comment_id: nil)

comment9 = Comment.create!(body:"You are incorrect.", user_id: user6.id, image_id: image1.id, parent_comment_id: comment10.id)

comment11 = Comment.create!(body:"#Pres4POTUS", user_id: user6.id, image_id: image14.id, parent_comment_id: nil)

comment12 = Comment.create!(body:"I really agree with his policies.", user_id: user7.id, image_id: image14.id, parent_comment_id: nil)

comment13 = Comment.create!(body:"You must be the dumbest", user_id: user9000.id, image_id: image14.id, parent_comment_id: comment12.id)

comment13 = Comment.create!(body:"No you are. Clearly commiting the Augustus Fallacy. Lol learn2Argue stupid.", user_id: user7.id, image_id: image14.id, parent_comment_id: comment13.id)
