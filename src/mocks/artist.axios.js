import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import getArtistMock from "./artist";

const BASE_URL = "https://api.spotify.com/v1";

const mock = new MockAdapter(axios);

// Get artist endpoint without id because this mock work with all ids
const getArtist = `${BASE_URL}/artists/`;

const arrayOfArtistToMock = ["1", "2", "other-id", "3"];

//Mock for getArtist 200 success (true)
arrayOfArtistToMock.forEach((artist) =>
	mock.onGet(`${getArtist}${artist}`).reply(200, getArtistMock(artist))
);

//Any other requests returns 401 because they aren't mocked

export default mock;
