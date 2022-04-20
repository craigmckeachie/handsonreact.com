---
id: 13-Forms
title: Forms
sidebar_label: Forms
slug: /forms
---

## Controlled Components

In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input.

For example, if you type in a text input the value property of the element holds what you typed (controls it).

In React, mutable state is typically kept in the state property of components, and only updated with setState().

We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a **controlled component**.

### Controlled **Function** Components

Below is an example of what a controlled component would like like in a function component.

1. Delete the current code in `main.js`.
2. Add the following code to `main.js`

```js
function ExampleForm() {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form>
      <input type="text" value={value} onChange={handleChange} />
      <pre>{JSON.stringify(value)}</pre>
    </form>
  );
}

ReactDOM.render(<ExampleForm />, document.getElementById("root"));
```

3. Refresh your browser
4. Type some text in the `input`
5. Notice that this text immediately shows in `state` because we have written to set the value and onChange properties to read and write from the parent component's surrounding state.
6. Update `handleChange` as follows

```diff
  const handleChange = (event) => {
    setValue(event.target.value
+    .toUpperCase()
    );
  };
```

7. Refresh the browser
8. Type some text in the `input`
9. We can now more clearly see we are controlling the value by storing it in the component's state.
10. Remove the `toUpperCase()` call
11. To further understand controlled components: Comment out the implementation of `handleChange` and notice that when you type in the input nothing happens.

```diff
  const handleChange = (event) => {
-    setValue(event.target.value);
  };
```

12. Uncomment the `handleChange` implementation and verify it is working again.

### Controlled **Class** Components

Below is an example of what a controlled component would look like in a class component.

```js
class ExampleForm extends React.Component {
  state = {
    value: "",
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <pre>{JSON.stringify(this.state)}</pre>
      </form>
    );
  }
}

ReactDOM.render(<ExampleForm />, document.getElementById("root"));
```

## Submitting

Handling the submission of the form using the same concepts we learning previously in the events section.

1. Modify the code to prevent the default browser behavior of submitting the form data to the server and instead log the form data to the `console`.

### Function Component Example

```js
function LoginForm() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Sign In</button>
    </form>
  );
}

ReactDOM.render(<LoginForm />, document.getElementById("root"));
```

### Class Component Example

```js
class LoginForm extends React.Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button type="submit">Sign In</button>
      </form>
    );
  }
}

ReactDOM.render(<LoginForm />, document.getElementById("root"));
```

## Controlling other Types of HTML Form Elements

The following example of a contact us form demonstrates how controlling other HTML form fields such as: `<select>`, `textarea`, and `<input type='checkbox'>` is very similar to how we work with an `<input>`.

### Function Component Example

```js
function ContactUsForm() {
  const [department, setDepartment] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [agreedToTerms, setAgreedToTerms] = React.useState(false);

  function handleSubmit(event) {
    event.preventDefault();

    console.log("submitting", stateToString());
  }

  function stateToString() {
    return JSON.stringify(
      {
        department,
        message,
        agreedToTerms,
      },
      null,
      " "
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <select
        name="department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">Select...</option>
        <option value="hr">Human Resources</option>
        <option value="pr">Public Relations</option>
        <option value="support">Support</option>
      </select>
      <br />
      <br />
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        cols="30"
        rows="10"
      />
      <br />
      <input
        type="checkbox"
        name="agreedToTerms"
        checked={agreedToTerms}
        onChange={(e) => setAgreedToTerms(e.target.checked)}
      />
      I agree to the terms and conditions.
      <br />
      <button>Send</button>
    </form>
  );
}

ReactDOM.render(<ContactUsForm />, document.getElementById("root"));
```

### Class Component Example

```js
class ContactUsForm extends React.Component {
  state = {
    department: "",
    message: "",
    agreedToTerms: false,
  };

  handleChange = (event) => {
    const { type, name, value, checked } = event.target;
    const updatedValue = type === "checkbox" ? checked : value;
    this.setState({ [name]: updatedValue });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select
          name="department"
          value={this.state.department}
          onChange={this.handleChange}
        >
          <option value="">Select...</option>
          <option value="hr">Human Resources</option>
          <option value="pr">Public Relations</option>
          <option value="support">Support</option>
        </select>
        <br />
        <br />
        <textarea
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
          cols="30"
          rows="10"
        />
        <br />
        <input
          type="checkbox"
          name="agreedToTerms"
          checked={this.state.agreedToTerms}
          onChange={this.handleChange}
        />
        I agree to the terms and conditions.
        <br />
        <button>Send</button>
        <pre>{JSON.stringify(this.state, null, " ")}</pre>
      </form>
    );
  }
}

ReactDOM.render(<ContactUsForm />, document.getElementById("root"));
```

Notice that although these HTML form fields set their value differently:

- `<textarea>value goes here</textarea>`
- The option with `selected` is selected.
  ```html
  <select name="department">
    <option value="">Select...</option>
    <option value="hr">Human Resources</option>
    <option selected value="pr">Public Relations</option>
    <option value="support">Support</option>
  </select>
  ```
- `<input type='checkbox' checked=checked>`

These have all been standardized to be set using the value property when using React.

## Validation

- Validation of forms is something you can do in plain vanilla JavaScript.
- Validating user input is not even discussed in the React documentation.
- There are no specific features in React for validating forms.
- React leaves this to job for external libraries.
- Currently, the most popular React form validation library is [Formik](https://jaredpalmer.com/formik/).
- Here is a discussion on reddit of whether a [Form Library is Necessary in React](https://www.reddit.com/r/reactjs/comments/5u66ce/necessary_to_use_a_form_library_in_react/)

To help you decide whether a library would be helpful in your use case, it can be helpful to manually implement form validation at first in your React application.

Below is an example of some basic validation implemented in our Contact Us form.

### Validation (with Function Component & Hooks)

1. Create the file `styles.css`
2. Add the following styles:

#### styles.css

```css
.alert {
  padding: 20px;
  background-color: #f44336;
  color: white;
  width: 50%;
}
```

#### index.html

```diff
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Demos</title>
+    <link rel="stylesheet" href="/styles.css" />
  </head>
...
```

#### main.js

```js
function ContactUsForm() {
  const [department, setDepartment] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [agreedToTerms, setAgreedToTerms] = React.useState(false);
  const [departmentError, setDepartmentError] = React.useState(null);
  const [messageError, setMessageError] = React.useState(null);
  const [agreedToTermsError, setAgreedToTermsError] = React.useState(null);

  function handleSubmit(event) {
    event.preventDefault();

    const isValid = !departmentError && !messageError && !agreedToTermsError;
    if (!isValid) {
      return;
    }
    console.log("submitting", stateToString());
  }

  React.useEffect(() => {
    validate();
  }, [department, message, agreedToTerms]);

  function validate() {
    setDepartmentError(null);
    setMessageError(null);
    setAgreedToTermsError(null);
    if (department === "") {
      setDepartmentError("Department is required.");
    }
    if (message === "") {
      setMessageError("Message is required.");
    }
    if (agreedToTerms === false) {
      setAgreedToTermsError("You must agree to the terms and conditions.");
    }
  }

  function stateToString() {
    return JSON.stringify(
      {
        department,
        message,
        agreedToTerms,
        departmentError,
        messageError,
        agreedToTermsError,
      },
      null,
      " "
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <select
        name="department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">Select...</option>
        <option value="hr">Human Resources</option>
        <option value="pr">Public Relations</option>
        <option value="support">Support</option>
      </select>
      <br />
      {departmentError && <p className="alert">{departmentError}</p>}
      <br />
      <textarea
        name="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        cols="30"
        rows="10"
      />
      <br />
      {messageError && <p className="alert">{messageError}</p>}
      <input
        type="checkbox"
        name="agreedToTerms"
        checked={agreedToTerms}
        onChange={(e) => setAgreedToTerms(e.target.checked)}
      />
      I agree to the terms and conditions.
      <br />
      {agreedToTermsError && <p className="alert">{agreedToTermsError}</p>}
      <button>Send</button>
    </form>
  );
}

ReactDOM.render(<ContactUsForm />, document.getElementById("root"));
```

Some things to notice in the code above:

- Validation messages are themselves local component state.
- The validations are called when the form is submitted.
- The && operator is used to conditionally display the error messages.
  - The && operator is ideal in this case since there is no else case.

### Validation (in a Class Component)

#### main.js

```js
class ContactUsForm extends React.Component {
  state = {
    department: "",
    message: "",
    agreedToTerms: false,
    departmentValidationMessage: null,
    messageValidationMessage: null,
    agreedToTermsValidationMessage: null,
  };

  handleChange = (event) => {
    const { type, name, value, checked } = event.target;
    const updatedValue = type === "checkbox" ? checked : value;
    this.setState({ [name]: updatedValue });
  };

  handleBlur = (event) => {
    this.validate();
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.validate();
    if (!this.isValid()) {
      return;
    }
    console.log(this.state);
  };

  isValid = () => {
    const {
      departmentValidationMessage,
      messageValidationMessage,
      agreedToTermsValidationMessage,
    } = this.state;
    return (
      departmentValidationMessage === null &&
      messageValidationMessage === null &&
      agreedToTermsValidationMessage === null
    );
  };

  validate() {
    const { department, message, agreedToTerms } = this.state;
    this.setState({
      departmentValidationMessage: null,
      messageValidationMessage: null,
      agreedToTermsValidationMessage: null,
    });
    if (!department) {
      this.setState({ departmentValidationMessage: "Department is required." });
    }
    if (!message) {
      this.setState({ messageValidationMessage: "A message is required." });
    }
    if (agreedToTerms === false) {
      this.setState({
        agreedToTermsValidationMessage:
          "You must agree to the terms and conditions.",
      });
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select
          name="department"
          value={this.state.department}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        >
          <option value="">Select...</option>
          <option value="hr">Human Resources</option>
          <option value="pr">Public Relations</option>
          <option value="support">Support</option>
        </select>
        <br />
        {this.state.departmentValidationMessage && (
          <p className="alert">{this.state.departmentValidationMessage}</p>
        )}
        <br />
        <textarea
          name="message"
          value={this.state.message}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
          cols="30"
          rows="10"
        />
        <br />
        {this.state.messageValidationMessage && (
          <p className="alert">{this.state.messageValidationMessage}</p>
        )}
        <input
          type="checkbox"
          name="agreedToTerms"
          checked={this.state.agreedToTerms}
          onChange={this.handleChange}
          onBlur={this.handleBlur}
        />
        I agree to the terms and conditions.
        <br />
        {this.state.agreedToTermsValidationMessage && (
          <p className="alert">{this.state.agreedToTermsValidationMessage}</p>
        )}
        <button>Send</button>
        <pre>{JSON.stringify(this.state, null, " ")}</pre>
      </form>
    );
  }
}

ReactDOM.render(<ContactUsForm />, document.getElementById("root"));
```

## Uncontrolled Components

In most cases, React recommends using `controlled components` to implement forms. In a controlled component, form data is handled by a React component. The alternative is `uncontrolled components`, where form data is handled by the `DOM` itself.

### Refs

When writing an `uncontrolled component` you use a `ref` to get form values from the DOM directly instead of writing an event handler for every state update.

### Function Component Example

```js
function ExampleForm() {
  const input = React.useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(input.current);
    console.log(input.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={input} />
      <button>Submit</button>
    </form>
  );
}
ReactDOM.render(<ExampleForm />, document.getElementById("root"));
```

#### Setting defaultValue

Try initializing the value property on the input.

1. Modify the code to set the `value` property
   ```diff
    <form onSubmit={handleSubmit}>
        <input
   +       value="initial value"
          type="text" ref={input} />
        <button>Submit</button>
    </form>
   ```
2. Refresh the page
3. This warning is displayed and the input will be read-only:
   ```
   Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
   ```
4. As the warning explains change the code to use defaultValue
   ```diff
   <form onSubmit={handleSubmit}>
       <input
   +       defaultValue="initial value"
         type="text" ref={input} />
       <button>Submit</button>
   </form>
   ```
5. Refresh the page
6. The warning goes away

> - Use `defaultValue` to initialize `uncontrolled components`
> - Use `value` to initialize `controlled components`

### Class Component Example

```js
class ExampleForm extends React.Component {
  input = React.createRef();

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.input.current);
    console.log(this.input.current.value);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={this.input} />
        <button>Submit</button>
      </form>
    );
  }
}
ReactDOM.render(<ExampleForm />, document.getElementById("root"));
```

### File Input Example

In HTML, an `<input type="file">` lets the user choose one or more files from their device storage to be uploaded to a server or manipulated by JavaScript via the File API.

```html
<input type="file" />
```

In React, an `<input type="file" />` is always an uncontrolled component because its value can only be set by a user, and not programmatically.

You should use the File API to interact with the files. The following example shows how to create a ref to the DOM node to access file(s) in a submit handler:

#### Function Component Example

```js
const { useRef } = React;

function FileInput() {
  const fileInput = useRef() as React.MutableRefObject<HTMLInputElement>;

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(fileInput.current);
    if (!fileInput) return;
    alert(`Selected file - ${fileInput.current!.files![0].name}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Upload file:
        <input type="file" ref={fileInput} />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

ReactDOM.render(<FileInput />, document.getElementById("root"));
```

#### Class Component Example

```js
class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.fileInput = React.createRef();
  }
  handleSubmit(event) {
    event.preventDefault();
    alert(`Selected file - ${this.fileInput.current.files[0].name}`);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Upload file:
          <input type="file" ref={this.fileInput} />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

ReactDOM.render(<FileInput />, document.getElementById("root"));
```

See the reference links below for a more complete example of a file upload component in React.

## Items App Demo (CRUD) (continued)

Below we continue to expand on the Items (CRUD) Demo to use forms and do additional component communication. See the requirements listed below as well as the solution code.

### Requirements

1. Implement the feature to add an item
   - create a Form component
   - Add a text input and button to it
   - render the Form in the Container by adding it above the list
     - Note: since render needs to return one parent element you will need to wrap `<Form>` and `<List>` in an outer `<div>` or `<React.Fragment>`
   - read the value from the input when you click the add button
1. Add a feature to update an item inline
   - Add an edit button to each item in the list
   - Display an input and a button inline in place of the item when they click edit
   - Save the update back into state in the app component
1. Add a cancel link and use it to cancel out of editing mode.

See the finished solution code below:

### Solution (using Function Components & Hooks)

At this point, we are not calling an API yet we are just working with in-memory data but we will get to that next.

#### styles.css

```css
body,
button,
input,
textarea,
li {
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
}

li {
  list-style: none;
  border-bottom: 1px solid #ddd;
  padding: 0.25rem;
}

span {
  margin: 15px;
}

button {
  margin: 10px;
  padding: 5px 15px 5px 15px;
  background: transparent;
}

form {
  margin: 15px;
}

input {
  border: 1px solid darkgray;
}

html {
  font-size: large;
}

h2 {
  font-size: x-large;
  padding-bottom: 1rem;
}

h3 {
  font-size: large;
  padding-bottom: 1rem;
}

.alert {
  padding: 20px;
  background-color: #f44336;
  color: white;
  width: 50%;
}
```

#### index.html

```diff
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Demos</title>
+    <link rel="stylesheet" href="/styles.css" />
  </head>
...
```

#### main.js

```js
function ID() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

class Item {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const initialItems = [
  new Item(ID(), "First Item"),
  new Item(ID(), "Second Item"),
  new Item(ID(), "Third Item"),
];

function ListItem({ item, onEdit, onRemove }) {
  return (
    <p>
      <span>{item.name}</span>
      <button onClick={() => onEdit(item)}>Edit</button>
      <button onClick={() => onRemove(item)}>Remove</button>
    </p>
  );
}

function List({ items, onRemove, onUpdate }) {
  const [editingItem, setEditingItem] = React.useState(null);

  const handleEdit = (item) => {
    setEditingItem(item);
  };

  const handleCancel = () => {
    setEditingItem(null);
  };

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item === editingItem ? (
            <Form item={item} onSubmit={onUpdate} onCancel={handleCancel} />
          ) : (
            <ListItem item={item} onEdit={handleEdit} onRemove={onRemove} />
          )}
        </li>
      ))}
    </ul>
  );
}

function Form({ item, onSubmit, onCancel, buttonValue }) {
  const [inputValue, setInputValue] = React.useState(item.name || "");

  const handleChange = (event) => {
    event.preventDefault();
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const submittedItem = {
      id: item ? item.id : ID(),
      name: inputValue,
    };

    onSubmit(submittedItem);
    setInputValue("");
  };

  const handleCancel = (event) => {
    event.preventDefault();
    onCancel();
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input value={inputValue} onChange={handleChange} />
      <button>{buttonValue || "Save"}</button>
      {onCancel && (
        <a href="#" onClick={handleCancel}>
          cancel
        </a>
      )}
    </form>
  );
}

function Container() {
  const [items, setItems] = React.useState([]);

  React.useEffect(() => setItems(initialItems), []);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const updateItem = (updatedItem) => {
    let updatedItems = items.map((item) => {
      return item.id === updatedItem.id
        ? Object.assign({}, item, updatedItem)
        : item;
    });
    return setItems(updatedItems);
  };

  const removeItem = (removeThisItem) => {
    const filteredItems = items.filter((item) => item.id != removeThisItem.id);
    setItems(filteredItems);
  };

  return (
    <React.Fragment>
      <Form item="" onSubmit={addItem} buttonValue="Add" />
      <List items={items} onRemove={removeItem} onUpdate={updateItem} />
    </React.Fragment>
  );
}

function App() {
  return (
    <div>
      <Container />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
```

### Solution (using Class Components)

#### styles.css

```css
body,
button,
input,
textarea,
li {
  font-family: "Open Sans", sans-serif;
  font-size: 1em;
}

li {
  list-style: none;
  border-bottom: 1px solid #ddd;
}

span {
  margin: 15px;
}

button {
  margin: 10px;
  padding: 5px 15px 5px 15px;
  background: transparent;
}

form {
  margin: 15px;
}
```

#### index.html

```diff
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Demos</title>
+    <link rel="stylesheet" href="styles.css" />
  </head>
...
```

#### main.js

```js
function ID() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

class Item {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

const initialItems = [
  new Item(ID(), "First Item"),
  new Item(ID(), "Second Item"),
  new Item(ID(), "Third Item"),
];

class ListItem extends React.Component {
  render() {
    const { item, onEdit, onRemove } = this.props;
    return (
      <p>
        <span>{item.name}</span>
        <button onClick={() => onEdit(item)}>Edit</button>
        <button onClick={() => onRemove(item)}>Remove</button>
      </p>
    );
  }
}
class List extends React.Component {
  state = {
    editingItem: null,
  };

  handleEditClick = (item) => {
    this.setState({ editingItem: item });
  };

  handleCancel = (item) => {
    this.setState({ editingItem: null });
  };

  render() {
    const { items, onRemove, onUpdate } = this.props;
    return (
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item === this.state.editingItem ? (
              <Form
                item={item}
                onSubmit={onUpdate}
                onCancel={this.handleCancel}
              />
            ) : (
              <ListItem
                item={item}
                onEdit={this.handleEditClick}
                onRemove={onRemove}
              />
            )}
          </li>
        ))}
      </ul>
    );
  }
}

class Form extends React.Component {
  state = {
    inputValue: this.props.item.name || "",
  };

  handleChange = (event) => {
    event.preventDefault();
    this.setState({ inputValue: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const item = {
      id: this.props.item ? this.props.item.id : ID(),
      name: this.state.inputValue,
    };

    this.props.onSubmit(item);
    this.setState({ inputValue: "" });
  };

  handleCancel = (event) => {
    event.preventDefault();
    this.props.onCancel();
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <input value={this.state.inputValue} onChange={this.handleChange} />
        <button>{this.props.buttonValue || "Save"}</button>
        {this.props.onCancel && (
          <a href="#" onClick={this.handleCancel}>
            cancel
          </a>
        )}
      </form>
    );
  }
}

class Container extends React.Component {
  state = {
    items: [],
  };

  componentDidMount() {
    this.setState({ items: initialItems });
  }

  addItem = (item) => {
    this.setState((state) => ({ items: [...state.items, item] }));
  };

  updateItem = (updatedItem) => {
    this.setState((state) => {
      let items = state.items.map((item) => {
        return item.id === updatedItem.id
          ? Object.assign({}, item, updatedItem)
          : item;
      });
      return { items };
    });
  };

  removeItem = (removeThisItem) => {
    this.setState((state) => {
      const items = state.items.filter((item) => item.id != removeThisItem.id);
      return { items };
    });
  };

  render() {
    return (
      <React.Fragment>
        <Form item="" onSubmit={this.addItem} buttonValue="Add" />
        <List
          items={this.state.items}
          onRemove={this.removeItem}
          onUpdate={this.updateItem}
        />
      </React.Fragment>
    );
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Container />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
```

## Reference

- [Forms: React Documentation](https://reactjs.org/docs/forms.html)
- [Uncontrolled Components: React Documentation](https://reactjs.org/docs/uncontrolled-components.html)
- [Generic Change Handler](https://medium.com/front-end-weekly/react-quick-tip-easy-data-binding-with-a-generic-onchange-handler-fb0254a7094e)
- [Simple Validation](https://learnetto.com/blog/how-to-do-simple-form-validation-in-reactjs)
- [Is a Form Library Necessary: Discussion](https://www.reddit.com/r/reactjs/comments/5u66ce/necessary_to_use_a_form_library_in_react/)
- [Form Validation Example](https://www.telerik.com/blogs/up-and-running-with-react-form-validation)
- [Form Validation Approaches](https://moduscreate.com/blog/reactjs-form-validation-approaches/)
- [File upload](https://codeburst.io/react-image-upload-with-kittens-cc96430eaece)

<!-- ## Reuse of Change Logic across Multiple Inputs

If we have multiple inputs you can implement one onChange event handler function to handle them all.

1. Delete the current code in `main.js`.
2. Add the following code to `main.js`

```js
class LoginForm extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          name="username"
          value={this.state.username}
          onChange={this.handleChange}
        />
        <input
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
        />
        <button>Sign In</button>
        <pre>{JSON.stringify(this.state)}</pre>
      </form>
    );
  }
}

ReactDOM.render(<LoginForm />, document.getElementById('root'));
```

3. Refresh your browser
4. Type a username and password
5. Update the onChange event handler to use destructuring as follows:

```diff
handleChange = event => {
-    const target = event.target;
-    const name = target.name;
-    const value = target.value;
+    const { name, value } = event.target;
     this.setState({ [name]: value });
  };
```

> Destructuring is a new feature of ES5/ES2015. More specifically, we are using [object destructuring](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring) in this example. You can read more about it using the link above.

6. Comment out the initialization of the state properties to an empty string.

```js
class LoginForm extends React.Component {
  state = {};
  // state = {
  //   username: '',
  //   password: ''
  // };
  ...
}
```

7. Refresh your browser and make sure the browsers `Console` is open
8. Type a username
9. You will receive the following warning:

```sh
Warning: A component is changing an uncontrolled input of type text to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component.
```

Specifying the value prop on a controlled component prevents the user from changing the input unless you desire so. If you’ve specified a value but the input is still editable, you may have accidentally set value to undefined or null.

> Don't set a controlled input to a `null` or `undefined` value (intentionally or unintentionally).

10. Uncomment the initialization of the state properties.

```diff
class LoginForm extends React.Component {
-  state = {};
+  state = {
+    username: '',
+    password: ''
+  };
  ...
}
``` -->
