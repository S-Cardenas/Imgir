# FresherNote

[Heroku link][heroku] **NB:** This should be a link to your production site

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

FresherNote is a web application inspired by Evernote built using Ruby on Rails
and React.js. FresherNote allows users to:

<!-- This is a Markdown checklist. Use it to keep track of your
progress. Put an x between the brackets for a checkmark: [x] -->

- [X] Create an account
- [X] Log in / Log out
- [ ] Create, read, edit, and delete notes
- [ ] Organize notes within Notebooks
- [ ] Tag notes with multiple tags
- [ ] Apply complex styling to notes while editing

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./wireframes
[components]: ./components.md
[stores]: ./stores.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [X] create new project
- [X] create `User` model
- [X] authentication
- [X] user signup/signin pages
- [X] blank landing page after signin
- [X] other pages redirect until signin

### Phase 2: Image Model and API with basic index. (1.5 days)

**Objective:** Images can be created, invidually viewed, have their options edited and be destroyed through the API and the homepage has current images.

- [X] create `Image` model
- [X] seed the database with a small amount of test data
- [ ] CRUD API for images (`ImagesController`)
- [ ] jBuilder views for images with a basic index.
- [X] setup Webpack & Flux scaffold
- [ ] test making images using the API
- [ ] setup index to display images without titles that link to their show pages
### Phase 3: Add Albums (0.5 days)

**Objective:** Images can be uploaded as albums and put together with other images. Albums are accessible on the front page by displaying their first image.

- [ ] Create `Album` model
- [ ] Do CRUD for `Album`
-	[ ] Seed database with Albums for testing
- [ ] Use jBuilder views to allow users to more easily view collections of images
- [ ] Test creating, editing, and destroying albums.

### Phase 4: Set up React/Flux to allow users to more easily interact with images and albums (1 day)

**Objective** Frontend UI allows for users to easily create, update, and destroy images or albums.

- implement each image component, building out the flux loop as needed.
- [ ] `Homepage`
- [ ] `HomepageItem`
- [ ] `ImageForm`
- [ ] `ImagePage`
- [ ] test each component by creating images. Functionality should not change, only the frontend.

### Phase 5: Start Styling (0.5 days)

**Objective:** Existing pages (including singup/signin) will look good.

- [ ] format homepage to show the collection of images in way that is intuitive and easy to view.
- [ ] add navbar with both authentication and image creation.
- [ ] add basic colors & styles


### Phase 6: Comments (1 day)

**Objective:** Allow users to add comments to images and albums and upvote or downvote both images and comments.

- [ ] create `Comment` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching comments for an image or album
  - [ ] adding or removing comments on images
	-	[ ] sorting comments by popularity
- [ ] create a show submission/comment history view for users
- [ ] Style comments and history

### Phase 7: Advance Homepage Frontend (1 day)

**objective:** Complete the homepage

- [ ] add the sidebar to the homepage with recent popular images (high net upvotes)
- [ ] allow for infinite scroll through recent images.
- [ ] finish styling homepage

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor views and CSS to make it more cohesive
- [ ] Build React Authentication.

### Bonus Features (TBD)
- [ ] Tags on images
- [ ] A search function for both images by title and users by username.
- [ ] Additional sorting methods for images, such as both recent and popular
- [ ] Multiple sessions

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
