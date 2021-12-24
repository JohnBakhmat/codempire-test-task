export default class Country {
	public id: string
	public Name: string
	public TotalConfirmed: number
	public TotalDeaths: number
	public TotalRecoverd: number

	constructor(id: string, name: string, totalConfirmed: number, totalDeaths: number, totalRecovered: number) {
		this.id = id
		this.Name = name
		this.TotalConfirmed = totalConfirmed
		this.TotalDeaths = totalDeaths
		this.TotalRecoverd = totalRecovered
	}
}