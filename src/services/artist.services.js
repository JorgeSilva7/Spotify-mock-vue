import axios from "axios";

const BASE_URL = "https://api.spotify.com/v1";

function getArtist(id) {
	return axios
		.get(`${BASE_URL}/artists/${id}`)
		.then((response) => response.data);
}

export { getArtist };
