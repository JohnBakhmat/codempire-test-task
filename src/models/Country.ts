export default class Country {
	public Name: string
	public TotalConfirmed: number
	public TotalDeaths: number
	public TotalRecoverd: number

	constructor(name: string, totalConfirmed: number, totalDeaths: number, totalRecovered: number) {
		this.Name = name
		this.TotalConfirmed = totalConfirmed
		this.TotalDeaths = totalDeaths
		this.TotalRecoverd = totalRecovered
	}
}