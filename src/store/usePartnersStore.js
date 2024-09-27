import { defineStore } from "pinia";

export const usePartnersStore = defineStore("partners", {
	state: () => ({
		userPartner: {
			partnerName: "",
			userAppearance: ["", "", "", ""],
			userTraits: ["", "", "", ""],
		},
		photoUrl: "",
	}),
	getters: {
		addAge: (state) => state.age + 2,
	},
	actions: {
		setPartners(newToken) {
			this.token = newToken;
		},
	},
	persist: true,
});
