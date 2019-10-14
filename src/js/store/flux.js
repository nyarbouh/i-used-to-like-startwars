const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			favorites: [
				{
					name: "one"
				},
				{
					name: "two"
				}
			]
		},
		actions: {
			addToFavorites: element => {
				let store = getStore();
				const temp = store.favorites.concat([element]);
				setStore({
					favorites: temp
				});
			}
		}
	};
};

export default getState;
