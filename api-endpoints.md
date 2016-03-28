# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `GET /users/:id`
  - displays user with comment and submission history.
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Images

- `GET /api/images`
  - Notes index/search
  - accepts `tag_name` query param to list images by tag
- `POST /api/images`
- `GET /api/images/:id`
- `PATCH /api/images/:id`
- `DELETE /api/images/:id`

### Albums

- `GET /api/albums`
- `POST /api/albums`
- `GET /api/albums/:id`
- `PATCH /api/albums/:id`
- `DELETE /api/albums/:id`
- `GET /api/albums/:id/notes`
  - index of all images for an album

### Tags

- An image's tags will be included in the image show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/notes/:image_id/tags`: add tag to note by name
- `DELETE /api/notes/:image_id/tags/:tag_name`: remove tag from image by
  name


  Might add on message function if time.
