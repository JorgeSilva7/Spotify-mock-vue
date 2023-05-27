const getArtist = (id) => ({
	external_urls: {
		spotify: "http://www.spotify.cl",
	},
	followers: {
		href: "http://www.spotify.cl",
		total: 50,
	},
	genres: ["Prog rock", "Grunge"],
	href: "http://www.spotify.cl",
	id,
	images: [
		{
			url: "https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228",
			height: 300,
			width: 300,
		},
	],
	popularity: 20,
	type: "artist",
	uri: "http://www.spotify.cl",
	name: `Artista ${id}`,
});

export default getArtist;
