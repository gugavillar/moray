/// <reference types="cypress" />

describe('Moray test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  afterEach(() => {
    cy.wait(2000)
  })

  it('User click on zoom in button', () => {
    const a = cy.get('a.leaflet-control-zoom-in')
    expect(a.click())
  })

  it('User click on zoom out button', () => {
    const a = cy.get('a.leaflet-control-zoom-out')
    expect(a.click())
  })

  it('Should have 4 neighborhoods in map', () => {
    const neighborhoods = cy.get('path.leaflet-interactive')
    expect(neighborhoods.should('have.length', 4))
  })

  it('User hover on neighborhood and see tooltip', () => {
    cy.get('path.leaflet-interactive').eq(3).trigger('mouseover')
    const tooltip = cy.get('div.leaflet-tooltip')
    expect(tooltip).exist
  })

  it('User click on neighborhood to see more data in drawer', () => {
    cy.get('path.leaflet-interactive').eq(1).click()
    const drawer = cy.get('div.-translate-x-0')
    expect(drawer.should('have.class', '-translate-x-0'))
  })

  it('User see in drawer a population chart', () => {
    cy.get('path.leaflet-interactive').eq(2).click()
    const chart = cy.get('div.recharts-wrapper')
    expect(chart.should('be.visible'))
  })

  it('User close drawer when click on close button', () => {
    cy.get('path.leaflet-interactive').eq(3).click()
    cy.get('button.absolute').click()
    const drawer = cy.get('div.-translate-x-full')
    expect(drawer.should('have.class', '-translate-x-full'))
  })

  it('User close drawer when click on outside', () => {
    cy.get('path.leaflet-interactive').eq(3).click()
    cy.wait(1000)
    cy.get('.size-full').click()
    const drawer = cy.get('div.-translate-x-full')
    expect(drawer.should('have.class', '-translate-x-full'))
  })
})
