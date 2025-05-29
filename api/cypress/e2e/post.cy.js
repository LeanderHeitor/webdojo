
describe("POST /api/users/register", () => {
  it("Deve cadastrar um novo usuário", () => {
    const user = {
      name: "Wolverine",
      email: "logan@xmen,com",
      password: "pwd123",
    };

    cy.task("deleteUser", user.email); // Limpa o usuário antes do teste
    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq("User successfully registered.");
      //talvez resolva problema dos testes unitarios guilherne?
      expect(response.body.user.id).to.match(/^[-]?\d+$/); //verifica se id é inteiro
      expect(response.body.user.name).to.eq(user.name);
      expect(response.body.user.email).to.eq(user.email);
    });
  });
  it("Não deve cadastrar com email duplicado", () => {
    const user = {
      name: "Cyclops",
      email: "scott@xmen.com",
      password: "pwd123",
    };
    cy.task("deleteUser", user.email);

    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(201);
    });
    cy.postUser(user).then((response) => {
      expect(response.status).to.eq(409);
      expect(response.body.error).to.eq("Email address is already registered.");
    });
  });
  it('Campo "name" deve ser obrigatório', () => {
    const user = {
      email: "storm@teste.com.br",
      password: "pwd123",
    };
   cy.postUser(user).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.eq("The \"name\" field is required.");
    });
  });
  it('Campo "email" deve ser obrigatório', () => {
    const user = {
      name: "Jean Grey",
      password: "pwd123",
    };
   cy.postUser(user).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.eq("The \"email\" field is required.");
    });
  });
  it('Campo "senha" deve ser obrigatório', () => {
    const user = {
      name: "Charles Xavier",
      email: "xavier@xmen.com",
    };
   cy.postUser(user).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.eq("The \"password\" field is required.");
    });
  });
  it('Não deve passar quando o JSON está mal formatado', () => {
    const user = `{
      name: "Magneto",
      email: "erik@xmen.com"
      password: "pwd123"
    }`
   cy.postUser(user).then((response) => {
      expect(response.status).to.eq(400);
      expect(response.body.error).to.eq("Invalid JSON format.");
    });
  });
});
