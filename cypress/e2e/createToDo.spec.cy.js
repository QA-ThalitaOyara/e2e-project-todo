import taskPage from "./create";

describe("Create tasks on To Do page", () => {
  beforeEach(() => {
    cy.visit("/index.html");
  });
  it("Access page validation", () => {
    cy.get("h1").should("have.text", "First Todo");
  });

  it("Create a new task", () => {
    taskPage.createTask()
  });

  it("Validate if the task was created", () => {
    taskPage.createTask()
    taskPage.validateTask()
  });
  it('Access Edit Form', () => {
    taskPage.createTask()
    taskPage.validateTask()
    taskPage.clickButton('edit')
    taskPage.validateEditForm()

  });
});
