// ---- DOM ELEMENT SELECTION & OOP RENDERING -----  \\
// Validation


// autobind decorator
function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    },
  };
  return adjDescriptor;
}

//ProjectInput Class
class ProjectInput {
  templateElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    this.templateElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    const importedNode = document.importNode(
      this.templateElement.content,
      true
    );
    this.element = importedNode.firstElementChild as HTMLFormElement;
    this.element.id = "user-input";

    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.configure();
    this.attach();
  }

  private gatherUserInput(): [string, string, number] | void {
    const enteredTitle = this.titleInputElement.value;
    const enteredDescription = this.descriptionInputElement.value;
    const enteredPeople = this.peopleInputElement.value;

    if (
      validate({value: enteredTitle, required: true, minLength: 5}) &&
      validate({value: enteredDescription, required: true, minLength: 5}) &&
      validate({value: enteredPeople, required: true, minLength: 5})
    ) {
      alert("Invalid input, please try again!");
      return;
    } else {
      return [enteredTitle, enteredDescription, +enteredPeople];
    }
  }

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.gatherUserInput();
    if (Array.isArray(userInput)) {
      const [title, desc, people] = userInput;
      console.log(title, desc, people);
      this.clearInputs();
    }
  }

  private configure() {
    this.element.addEventListener("submit", this.submitHandler);
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const prjInput = new ProjectInput();

// -------- INTERACTING WITH DOM ELEMENTS ---------  \\
// line 39 added to identify element id
// line 24-26 added new elements
// line 41-49 attach id to elements
// line 60 configure method

// ---- CREATING & USING AN AUTOBIND DECORATOR ----  \\
// line 2 added autobind function

// ------------- FETCHING USER INPUT --------------  \\
// line 55 gatherUserInput function
// line 56 if check for valid input

// - CREATING A RE-USABLE VALIDATION FUNCTIONALITY -  \\


// ----------- RENDERING PROJECT LISTS ------------  \\
// --- MANAGING APPLICATION STATE w SINGLETONS ----  \\
// --------- MORE CLASSES & CUSTOM TYPES ----------  \\
// --------- FILTERING PROJECT WITH ENUMS ---------  \\
// -------- ADDING INHERITANCE & GENERICS ---------  \\
// ---- RENDERING PROJECTS ITEMS WITH A CLASS -----  \\
// ---------------- USING A GETTER ----------------  \\
