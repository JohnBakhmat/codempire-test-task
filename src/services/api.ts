import axios from 'axios'


const apiInstance = axios.create({
	baseURL: "https://api.covid19api.com/",
	headers: {
		'Content-Type': 'application/json',
		"X-Access-Token": ""
	},
	timeout: 5000,
})

export const getSummary = (callback?: Function) => {
	apiInstance.get('summary')
		.then((response) => {
			callback && callback(response.data.Countries)
		})
		.catch((error) => console.error(error))
}
export default apiInstance;