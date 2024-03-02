import taskPage from "./create";

function randomNumber() {
  const number = Cypress._.random(1, 100);
  return number;
}
class editTaskpage {
  static accessEditForm() {
    taskPage.createTask();
    taskPage.validateTask();
    taskPage.clickButton("edit");
  }

  static cancelTaskEdition() {
    this.editText("Edition task ID:");
    this.cancelEdition();
  }

  /** minor commands */
  static editText(text) {
    cy.get("#edit-input")
      .clear()
      .type(text + `${randomNumber()}`);
  }

  static saveEdition() {
    cy.get("#save-edit-btn").click();
  }

  static cancelEdition() {
    cy.get("#cancel-edit-btn").click();
  }
  static validateEditedTask() {
    this.takeTextEdited().then((newText) => {
        cy.get('#todo-list').should('contain', newText)
    })

  }
  static takeTextEdited() {
    return cy.get("#edit-input").invoke('val');
  }
}

export default editTaskpage;
