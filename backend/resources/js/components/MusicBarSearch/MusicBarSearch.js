import React, { useState, useEffect, Component } from "react";
import ReactDOM from "react-dom";
import { useForm } from "react-hook-form";
import axiosBase from "../../axiosSetting"
import MusicBarResult from "./MusicBarResult"

const MusicBarSearch = () => {
	const [prefList, setPrefList] = useState([]);
	const [optionsList, setOptionList] = useState([]);
	const [selectPref, setSelectPref] = useState("SS01");
	const [freeWord, setFreeWord] = useState("");
	const { search, handleSubmit, watch, error } = useForm();
	const axios = axiosBase();
	const onSubmit = () => {
		return <a href="site/result"></a>
	};

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
			<>
				<form onSubmit={handleSubmit(onSubmit)} >
					<div class="input-group">
						<div class="form-outline">
							{prefList.length > 0 &&
								<select
									class="form-select"
									ref={search}
									name="pref"
									value={selectPref}
									onChange={(e) => {
										setSelectPref(e.target.value);
									}}
								>
									{optionsList}
								</select>
							}
						</div>
						<div class="form-outline">
							<input id="search-input" type="search" id="form2" name={"freeWord"} ref={search} onChange={(e) => { setFreeWord(e.target.value) }} value={freeWord} />

						</div>
						<button id="search-button" type="submit" class="btn btn-primary">
							<i class="fas fa-search"></i>
						</button>
					</div>
				</form>
			</>
		</>
	);
};

// export default MusicBarSearch;
ReactDOM.render(<MusicBarSearch />, document.getElementById("app"));

