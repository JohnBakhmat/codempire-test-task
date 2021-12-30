
it("Visits home page", () => {
	cy.visit('http://localhost:3000/')
})

describe("Shows data", () => {
	it("Has Ukraine", () => {
		cy.get("td").contains("Ukraine")
	})

	it("Has Albania", () => {
		cy.get("td").contains("Albania")
	})

	it("Has Belgium", () => {
		cy.get("td").contains("Belgium")
	})
})

describe("Search is working", () => {
	it("Search Japan", () => {
		cy.get("#search").type("Japan")
		cy.get("td").contains("Japan")
		cy.get("#search").clear()
	})
	it("Search Latvia", () => {
		cy.get("#search").type("Latv")
		cy.get("td").contains("Latvia")
		cy.get("#search").clear()
	})

	it("Search something wrong", () => {
		cy.get("#search").type("abc")
		cy.get("td").should('not.exist');
		cy.get("#search").clear()
	})
})

describe("Modal can be opened", () => {
	it("Show info about Morocco", () => {
		cy.get("td").contains("Morocco").click()
		cy.get("#modal").contains("Morocco")
		cy.get("#modal").contains("Total Deaths")
		cy.get("#modal").contains("Total Confirmed")
		cy.get("#modal").contains("Total Recovered")

	})
})