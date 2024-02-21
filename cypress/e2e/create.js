class taskPage {
  static createTask() {
    const tasks = [
      "My first automated task 01",
      "My first automated task 02",
      "My first automated task 03",
    ];

    for (const task of tasks) {
      cy.get("#todo-input").type(task);
      cy.get("#todo-form > .form-control > button").click();
    }
  }

  static validateTask() {
    const tasks = [
      "My first automated task 01",
      "My first automated task 02",
      "My first automated task 03",
    ];
    for (const validateCreatedTask of tasks) {
      cy.get(".todo").should("contain", validateCreatedTask);
    }
  }

  static clickButton(action){
    cy.get(`.${action}-todo`).first().click()
  }

  static validateEditForm() {
    cy.get('#edit-form p').should('have.text','Edit your task:')
  }

  static accessEditForm(){

    this.createTask()
    this.validateTask()
    this.clickButton('edit')
    this.validateEditForm()
    
  }
}

export default taskPage;
