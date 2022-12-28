import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "../components/pages/SignUpPage";

const RouterComponent = () => {
	return (
		<Routes>
			<Route path="/sign-up" element={<SignUpPage />} />
		</Routes>
	);
};

export default RouterComponent;
