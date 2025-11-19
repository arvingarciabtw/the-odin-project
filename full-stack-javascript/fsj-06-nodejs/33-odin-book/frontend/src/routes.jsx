import App from "./App";
import Error from "./components/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import SignUpForm from "./components/SignUpForm";

const routes = [
	{
		path: "/",
		element: <App />,
		errorElement: <Error />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "/sign-up", element: <SignUpForm /> },
			{
				element: <ProtectedRoute />,
				children: [],
			},
		],
	},
];

export default routes;
