import Race from "../Races/Race"

describe("Race", () => {
  it("espera que exita a classe race", () => {
    const race = new Race()
    expect(race).toBeDefined()
  })
})