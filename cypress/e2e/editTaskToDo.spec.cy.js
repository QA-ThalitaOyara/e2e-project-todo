import taskPage from "./create";
import editTaskpage from "./editTask";

describe("Edit tasks on To Do page", () => {
    
  beforeEach(() => {
    cy.visit("/index.html");
    editTaskpage.accessEditForm()
  });

  it("Cancel task edition", () => {
    editTaskpage.editText('Edition task ID:');
    editTaskpage.cancelEdition();
  });

  it.only("Edit a task", () => {

    editTaskpage.editText('Edition task ID:');
    editTaskpage.takeTextEdited()
    editTaskpage.saveEdition()
    editTaskpage.validateEditedTask()
    
  });
});
