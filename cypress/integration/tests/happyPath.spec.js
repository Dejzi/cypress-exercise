context("Actions", () => {
  it("Should add product by search", () => {
    cy.visit("https://gjirafa50.com/");

    //Select one specific mouse by clicking on it and add it to the cart
    cy.get("#search_input2580").type("maus logitech{enter}");

    cy.contains("Maus Logitech G102 Lightsync, vjollcë")
      .scrollIntoView({ duration: 2000 })
      .click();
    cy.contains("Shto në shportë")
      .should("exist")
      .scrollIntoView({ duration: 2000 })
      .click();

    //Assert that product was added to cart
    cy.contains("Produkti u shtua në shportë").should("exist");
    cy.contains("Ju keni 1 produkt(e) në shportën tuaj").should("exist");

    cy.contains("Kthehu tek produktet").should("exist").click();
  });

  it("Should add product by menu", () => {
    //Search from the menu bar
    cy.get(".ty-menu__item-link").contains("Aksesorë").click();
    cy.get(".ty-subcategories__item")
      .contains("Kufje")
      .scrollIntoView()
      .click();

    cy.contains("Kufje Philips SHP1900")
      .scrollIntoView({ duration: 2000 })
      .click();

    cy.contains("Shto në shportë")
      .should("exist")
      .scrollIntoView({ duration: 2000 })
      .click();

    //Assert that product was added to cart
    cy.contains("Produkti u shtua në shportë").should("exist");
    cy.contains("Ju keni 2 produkt(e) në shportën tuaj").should("exist");

    cy.get(".ty-btn__primary")
      .contains("Bëje porosinë")
      .should("exist")
      .click();

    //Assert that all selected products were added to the cart
    cy.contains("Përmbajtjet e shportës").should("exist");
    cy.contains("Maus Logitech G102 Lightsync, vjollcë").should("exist");
    cy.contains("Kufje Philips SHP1900").should("exist");
  });
});
