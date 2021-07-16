function formatDataForPostRequest(runtime) {
	let data = {
		name : runtime.objects.input_username.getFirstInstance().text,
		score : runtime.globalVars.pontos
	}
	runtime.globalVars.dataPostAjax = JSON.stringify(data)
}