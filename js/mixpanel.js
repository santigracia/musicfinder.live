// This function executes when a user loads the sign up page
function signupPageViewed() {
	mixpanel.track('signupPageViewed',
		{"$current_url": "https://www.musicfinder.live/signup.html"}
	);
}

// This function executes after a user successfully signs up
// The "user" object contains the following properties: name, email, favorite_genre, plan, id
// e.g. calling user.id will return the user's id
function accountCreated(user) {
	mixpanel.alias(user.email);
	mixpanel.people.set({
		'name': user.name,
		'email': user.email,
		'favorite_genre': user.favorite_genre,
		'plan': user.plan,
		'id': user.id
	});
}

// This function executes when a user successfully logs in
// The "user" object contains the following properties: name, email, favorite_genre, plan, id
// e.g. calling user.id will return the user's id
function login(user) {
	mixpanel.identify(user.email);
}

// This function executes every time a song is played
// The "song" object contains the following properties: title, artist, genre, duration
// e.g. calling song.title will return the song's title
function songPlayed(song) {
	mixpanel.track('songPlayed', {
		'title' : song.title,
		'artist' : song.artist,
		'genre' : song.genre,
		'duration' : song.duration
	});
}

// This function executes every time a song is purchased
// The "song" object contains the following properties: title, artist, genre, duration, price
// e.g. calling song.title will return the song's title
function songPurchased(song) {
	    mixpanel.people.track_charge(song.price);
		mixpanel.track('songPurchased', {
		'title' : song.title,
		'artist' : song.artist,
		'genre' : song.genre,
		'duration' : song.duration,
		'price' : song.price
	});
}

// This function executes when a user upgrades from a Free plan to a Premium plan
function planUpgraded() {
	mixpanel.track('planUpgraded');
	mixpanel.people.set({
		'plan': 'Premium',
	});
}

// This function executes when a user downgrades from a Premium plan to a Free plan
function planDowngraded() {
	mixpanel.track('planDowngraded');
		mixpanel.people.set({
		'plan': 'Free',
	});
}
