context("Actions", () => {
  it("Should login successfully when given the correct credentials", () => {
    cy.visit("https://gjirafa50.com/");

    //cy.contains("Kërko produkte").click()
    cy.get("#search_input2580").type("maus{enter}");
    cy.scrollTo("right", { duration: 2000 });

    cy.scrollTo("top");
    cy.get("#search_input2580").type(" logitech {enter}");
    cy.scrollTo("right", { duration: 2000 });
    cy.contains("Maus Logitech G102 Lightsync, vjollcë").click();
    
    //cy.get("#det_img_14616960c73edab23cd_0").click()
    //cy.scrollTo('0, 1000')
    //cy.get(".ty-btn__primary").click()
    cy.contains("Shto në shportë")
      .should("exist", { timeout: 10000 })
      .scrollIntoView()
      .click();

    
    cy.get(".ty-float-right").get('.ty-product-notification__buttons').contains("Bëje porosinë").click()
    
    cy.contains("Maus Logitech G102 Lightsync, vjollcë").should("exist");
    cy.get(".ty-cart-statistic__total").contains("Gjithsej çmimi").should("exist");
    cy.get(".ty-price").contains("26.55").should("exist");

   

  
    //cy.contains("Vazhdo te pagesa").click({force: true});
    

    //cy.get(".ty-value-changer__input").contains("1").should("exist")





    
  });
});
