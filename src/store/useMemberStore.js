import { defineStore } from "pinia";

export const useMemberStore = defineStore("member", {
	state: () => ({
		userData: {
			account: { title: "帳號", value: "", disable: true },
			userName: { title: "會員名稱", value: "", disable: false },
			birth: { title: "生日", value: "", disable: false },
			location: { title: "聯絡地址", value: "", disable: false },
			phone: { title: "聯絡電話", value: "", disable: false },
			createAt: { title: "創建日期", value: "", disable: true },
		},
		token: "",
		photoData: {
			photo: "",
			photoType: "",
		},
	}),
	getters: {
		addAge: (state) => state.age + 2,
	},
	actions: {
		setToken(newToken) {
			console.log("token");
			this.token = newToken;
		},
	},
	persist: true,
});
