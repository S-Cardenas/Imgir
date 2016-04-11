# Imgir

[Imgir][heroku]

[heroku]: http://imgir.herokuapp.com

Technical Details

When Imgir displays images in their own show page, it has to be able to account for images of different dimensions all fitting within a reasonably-sized box. In order to do this, it has to figure out whether the image is larger or smaller than the frame, and then scale it down if it is larger. But of course, wider images need to scale differently than taller images, so I needed to use javascript to calculate whether I should shrink based on width or height. I found that the best way to do this was to use the Dom that the image constituted to get the dimensions, and then compare its width to its height.

componentDidMount: function() {
	ReactDOM.findDOMNode(this.refs.image);
},


determineClassName: function () {
	var node = ReactDOM.findDOMNode(this.refs.image);
	if (node.height > 600 || node.width > 500) {
		if ((node.height/node.width) >= 600/500) {
				this.setState({classname: 'image-show-item-tall'});
		} else {
			this.setState({classname: 'image-show-item-wide'});
		}
	}
},

render: function() {
	return (

		<img className={this.state.classname}
			onLoad={this.determineClassName}
			src={this.props.image} ref="image" />

	);
}

The state then determines which classname I use for the given image, which allows me use CSS to scale them properly. I could then put this new component into the image_show component that would display an individual image. If the image was smaller than the frame, it was centered and put against a black background, as is true with Imgur.

Features

- Users can sign in/sign up with either a custom username and password or their Facebook account.
- The homepage shows all of the user-uploaded images.
- Users can upload their own images.
- Users can also edit their images to give them a title/descripton, make them public, and destroy them.
- Users can comment on other people's public images and also reply to those comments.
- Users can view other people's images with the titles and descriptions, provided they are public.


To-do

- [] Implement an upvote/downvote system, which will also affect image/comment sorting
- [] Infinite scroll for the index.
- [] Albums which can hold images and display in sequence.
- [] PG search.
- [] Tags for images.
