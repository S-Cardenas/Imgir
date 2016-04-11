#Imgir

[Imgir][heroku]

[heroku]: http://imgir.herokuapp.com

###Landing Page

![welcome]

###Image Show Page

![image_show]

###Technical Details

- When Imgir displays images in their own show page, it has to be able to account for images of different dimensions all fitting within a reasonably-sized box. In order to do this, it has to figure out whether the image is larger or smaller than the frame, and then scale it down if it is larger. But of course, wider images need to scale differently than taller images, so I needed to use javascript to calculate whether I should shrink based on width or height. I found that the best way to do this was to use the Dom that the image constituted to get the dimensions, and then compare its width to its height.

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

- If you look at an image show page, comments for that image should display below it, but they have to be clear as to what they're replying to. Whereas many will reply to the image itself, there are several that will reply to the comments themselves but still need to be attached to the image. This is accomplished using an optional parent_comment_id column that, when not null, will nest the comments. I used a recursively called component that would find all child comments for a given comment and make them part of its display. The potential for a new reply form had to append itself to that, but actually be called through a method at the top level, so that only one form could appear at a time.

		getInitialState: function() {
			return {
				comments: CommentStore.all(), replyComment: null
			};
		},

		Here, the reply form is introduced as a state that will change when you click the button to reply. It then takes an id and sets it as the comment with a form to be rendered and rerenders.

		toggleForm: function (comment) {
			return function (e) {
				this.setState({
					replyComment:comment.id
				});
			}.bind(this);

		},

		replyForm: function (comment) {
			if (this.state.replyComment === comment.id) {
				return(
				<form className='comment-form'
				onSubmit={this.executeSubmit.bind(this, close)}>
					<CommentForm parent={comment} onOutsideClick={this._onOutsideClick}/>
				</form>
				);
			} else {
				return null;
			}
		},

		_onOutsideClick: function (e) {
			var set = true;
			for (var i = 0; i < e.path.length; i++) {
				if (e.path[i].className === "comment-form-fields group") {
					set = false;
				}
			}
			if (set) {
				this.setState({replyComment:null});
			}
		},


	These functions handle the actual comment form that shows up and get rid of it if you click elsewhere.

		render: function() {
			var comments = this.state.comments.map( function (comment) {

				return (
					<div key={comment.id}>
						<Comment comment={comment} params={this.props.params} 		
						addForm={this.toggleForm} replyForm={this.replyForm}/>
					</div>
				);
			}.bind(this));
			return (
				<div>
					<form className='comment-form' onSubmit={this.executeSubmit.bind(this, null)}>
						<CommentForm />
					</form>
					<div className='comment-counter'>
						{comments.length} parent comments
					</div>
					{comments}
				</div>
			);
		}

	I then have the comments index render each comment, passing down the form toggle and reply form so that it can access the state changes even in the comment itself.

			render: function() {
			var childComments;
			var comment = this.props.comment;
			if (this.props.comment.childComments) {
				childComments = this.props.comment.childComments.map( function (child) {
					return(
						<div key={child.id}>
							<Comment comment={child} addForm={this.props.addForm}
							replyForm={this.props.replyForm} />
						</div>
						);
				}.bind(this));
			}
			var userShowUrl = "/users/" + comment.user.id;
			return (
				<div className='full-comment'>
					<div className='comment-item'  >
						<div className='comment-user-and-reply group'>
							<div className='comment-user comment-link'>
								<Link to={userShowUrl} >{comment.user.username}</Link>
							</div>
							<div>
								{moment(comment.created_at).fromNow()}
							</div>
							<div className='reply comment-link' onClick={this.props.addForm(comment)}>
								reply
							</div>
						</div>
						{comment.body}
					</div>
					{this.props.replyForm(comment)}
					{childComments}
				</div>
			);
		}

	And finally, the comments pass these props down to their child comments, rendering the child comments after themselves, and display the reply form in the appropriate place if the state matches their comment id. This way, we have a comment form that appears in the right spot when called, can actually add the comment in the right place, and goes away if you click outside of it.
__
### Features

- Users can sign in/sign up with either a custom username and password or their Facebook account.
- The homepage shows all of the user-uploaded images.
- Users can upload their own images.
- Users can also edit their images to give them a title/descripton, make them public, and destroy them.
- Users can comment on other people's public images and also reply to those comments.
- Users can view other people's images with the titles and descriptions, provided they are public.


###To-do

- [ ] Implement an upvote/downvote system, which will also affect image/comment sorting
- [ ] Infinite scroll for the index.
- [ ] Albums which can hold images and display in sequence.
- [ ] PG search.
- [ ] Tags for images.


[welcome]: ./app/assets/images/imgir_landing_page.png
[image_show]: ./app/assets/images/imgir_image_show.png
