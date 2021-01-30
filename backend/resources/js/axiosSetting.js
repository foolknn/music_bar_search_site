import axiosBase from "axios";

const axiosRequest = () => {

	const axios = axiosBase.create({
		baseURL: "http://localhost:80",
		headers: {
			Authorization:
				"Bearer" +
				"pgVXIoLWX2CxlK1Y3K5bJy6cqEG5rcWOL6D9uwkaqu0fDIYyuvpf42K17TSi",
			"Content-Type": "application/json",
			"X-Requested-With": "XMLHttpRequest",
		},
		responseType: "json",
	});

	return axios

};

export default axiosRequest;