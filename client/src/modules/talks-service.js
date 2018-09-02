import Talk from "../models/talk";

export default {
	namespaced: true,
	state: {
		talks: [],
		currentTalk: {},
	},
	getters: {
		getTalksByUserId: (state) => (userId) => {
			return state.talks.filter(talk => talk.properties.userId === userId);
		},
		getTalkById: (state) => (id) => {
			return state.talks.find(talk => talk.id === id) || {
				properties: {
					title: "Loading...",
					type: "",
					talkPhotoUrl: "",
					description: "Loading..."
				},
			};
		},
	},
	mutations: {
		updateTalks(state, talks) {
			state.talks = talks;
		},
		setCurrentTalk(state, talk) {
			state.currentTalk = talk;
		},
	},
	actions: {
		async createTalk({ dispatch, commit, rootState }, talk) {
			dispatch("services/loading/pushLoading", {}, { root: true });
			let success = true;
			try {
				success = await talk.create(rootState.services.user.token);
			} catch (error) {
				success = false;
			} finally {
				dispatch("services/loading/popLoading", {}, { root: true });
			}
			return success;
		},
		async setTalk({ dispatch, commit }, talk) {
			dispatch("services/loading/pushLoading", {}, { root: true });
			let success = true;
			try {
				success = await talk.update();
			} catch (error) {
				success = false;
			} finally {
				commit("setCurrentTalk", talk.properties);
				dispatch("services/loading/popLoading", {}, { root: true });
			}
			return success;
		},
		async fetchTalks({ commit, dispatch }) {
			dispatch("services/loading/pushLoading", {}, { root: true });
			let talks = await Talk.fetchAll("talk");
			talks = talks.map(talk => new Talk(talk));
			commit("updateTalks", talks);
			dispatch("services/loading/popLoading", {}, { root: true });
		},
	},
};
