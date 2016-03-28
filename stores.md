# Flux Stores

### ImageStore

Holds all persisted image data.

##### Actions:
- `receiveImageLink`
- `receiveImageUpload`
- `removeImage`

##### Listeners:
- `ImageList` (passes to `ImageListItem` via props)

### ImageFormStore

Holds un-persisted image data to send to the API.

##### Actions:
- `receiveImageFormParams`

##### Listeners:
- `ImageForm`

### AlbumStore

Holds all persisted album data.

##### Actions:
- `receiveAllAlbums`
- `receiveAlbum`
- `removeAlbum`

##### Listeners:
- `Albums`

### SearchStore

Holds search parameters to send to the API.

##### Actions:
- `receiveSearchParams`

##### Listeners:
- `SearchIndex`

### SearchSuggestionStore

Holds typeahead suggestions for search.

##### Actions:
- `receiveSearchSuggestions`

##### Listeners:
- `SearchSuggestions`
