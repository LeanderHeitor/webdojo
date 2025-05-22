describe("Formulário de Consultoria", () => {
  it("Deve solicitar consultoria individual", () => {
    cy.start();
    cy.submitLoginForm("papito@webdojo.com", "katana123");
    cy.goTo("Formulários", "Consultoria");
    //texto
    cy.get('input[placeholder="Digite seu nome completo"]').type(
      "Fernando Papito"
    );
    cy.get('input[placeholder="Digite seu email"]').type("papito@teste.com.br");

    //telefone
    cy.get('input[placeholder="(00) 00000-0000"]')
      .type("11 99999-1000")
      .should("have.value", "(11) 99999-1000");

    //usando select e parent
    cy.contains("label", "Tipo de Consultoria")
      .parent()
      .find("select")
      .select("inCompany")
      .select("Individual");

    //radio button, check
    cy.contains("label", "Pessoa Jurídica")
      .find("input")
      .check()
      .should("be.checked");

    cy.contains("label", "Pessoa Física")
      .find("input")
      .should("be.not.checked");

    cy.contains("label", "Pessoa Física")
      .find("input")
      .check()
      .should("be.checked");

    cy.contains("label", "Pessoa Jurídica")
      .find("input")
      .should("be.not.checked");

    cy.contains("label", "CPF")
      .parent()
      .find("input")
      .type("93896613073")
      .should("have.value", "938.966.130-73");

    //checkbox

    const discoveryChannels = [
      "Instagram",
      "LinkedIn",
      "Udemy",
      "YouTube",
      "Indicação de Amigo",
    ];

    discoveryChannels.forEach((channel) => {
      cy.contains("label", channel).find("input").check().should("be.checked");
    });

    //arquivo
    cy.get('input[type="file"]').selectFile("./cypress/fixtures/1.pdf", {
      force: true,
    });

    //textarea
    cy.get(
      'textarea[placeholder="Descreva mais detalhes sobre sua necessidade"]'
    ).type(
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    );

    const techs = [
      "Cypress",
      "Selenium",
      "Playwright",
      "WebdriverIO",
      "Robot Framework",
    ];
    techs.forEach((tech) => {
      cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
        .type(tech)
        .type("{enter}");

      cy.contains("label", "Tecnologias")
        .parent()
        .contains("span", tech)
        .should("be.visible");
    });

    cy.contains("label", "termos de uso")
      .find("input")
      .check()
      .should("be.checked");

    cy.contains("button", "Enviar formulário").click();

    cy.get(".modal", { timeout: 7000})
      .should("be.visible")
      .find(".modal-content")
      .should("be.visible")
      .and(
        "have.text",
        "Sua solicitação de consultoria foi enviada com sucesso! Em breve, nossa equipe entrará em contato através do email fornecido."
      );
  });
  it("Deve verificar os campos obrigatórios", () => {
    cy.start();
    cy.submitLoginForm("papito@webdojo.com", "katana123");
    cy.goTo("Formulários", "Consultoria");

    cy.contains("button", "Enviar formulário").click();

    cy.contains("label", "Nome Completo")
      .parent()
      .find("p")
      .should("be.visible")
      .and("have.class", "text-red-400")
      .and("have.css", "color", "rgb(248, 113, 113)");

    cy.contains("label", "Email")
      .parent()
      .find("p")
      .should("be.visible")
      .and("have.class", "text-red-400")
      .and("have.css", "color", "rgb(248, 113, 113)");

    cy.contains("label", "termos de uso")
      .parent()
      .find("p")
      .should("be.visible")
      .and("have.class", "text-red-400")
      .and("have.css", "color", "rgb(248, 113, 113)");
  });
});
