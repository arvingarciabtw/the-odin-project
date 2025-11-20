import App from "./App";
import Error from "./components/Error";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./components/Home";
import SignUpForm from "./components/SignUpForm";
import PostsPage from "./components/PostsPage";
import UsersPage from "./components/UsersPage";
import ProfilePage from "./components/ProfilePage";
import CreatePost from "./components/CreatePost";

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
				children: [
					{ path: "/posts", element: <PostsPage /> },
					{ path: "/users", element: <UsersPage /> },
					{ path: "/profile", element: <ProfilePage /> },
					{ path: "/create-post", element: <CreatePost /> },
				],
			},
		],
	},
];

export default routes;
