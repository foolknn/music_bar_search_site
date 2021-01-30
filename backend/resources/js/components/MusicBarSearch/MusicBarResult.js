import React, { useState, useEffect, Component } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import axiosBase from "../../axiosSetting"

const MusicBarResult = () => {

	const [searchResult,setSearchResult] = useState([]);

	const axios = axiosBase();

	useEffect(
		(req, res, next) => {
			axios
				.get("/api/getResult")
				.then((res) => {
					console.log(res)
				})
				.catch((error) => {
					console.log(error);
				});
		},
		[searchResult, setSearchResult]
	);

	return (
		<>

		</>
	);
};

export default MusicBarResult;
// ReactDOM.render(<MusicBarResult />, document.getElementById("app"));

