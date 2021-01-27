import React, { useState, useEffect, Component } from "react";
import ReactDOM from "react-dom";
import axiosBase from "axios";
import {useForm} from "react-hook-form";

const MusicBarSearch = () => {
	const [prefList, setPrefList] = useState([]);
	const [optionsList, setOptionList] = useState([]);
	const [selectPref, setSelectPref] = useState("SS01");
	const [freeWord, setFreeWord] = useState("");
	const { search, handleSubmit, watch, error } = useForm();
	const onSubmit = () => {
		//TODO aタグでパラメーターを渡し検索結果ページを表示する
		console.log(selectPref,freeWord);
	};

	
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

	useEffect(
		(req, res, next) => {
			axios
				.get("/api/getPref")
				.then((res) => {
					setPrefList(res.data.results.service_area);
					setOptionList(
						res.data.results.service_area.map((pref) => {
							return (
								<option key={pref.code} value={pref.code}>
									{pref.name}
								</option>
							);
						})
					);
				})
				.catch((error) => {
					console.log(error);
				});
			},
		[prefList, setPrefList]
	);

	return (
		<>
			{prefList.length >= 1 && (
				<>
					<form onSubmit={handleSubmit(onSubmit)} >
						<select
							ref={search}
							name="pref"
							value={selectPref}
							onChange={(e) => {
								setSelectPref(e.target.value);
							}}
						>
							{optionsList}
						</select>
						<input name={"freeWord"} ref={search} onChange={(e) => {setFreeWord(e.target.value)}} value={freeWord}/>
						<input type="submit" />
					</form>
				</>
			)}
		</>
	);
};

// export default MusicBarSearch;
ReactDOM.render(<MusicBarSearch />, document.getElementById("app"));

