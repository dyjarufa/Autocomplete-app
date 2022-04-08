# Questions

1. What is the difference between Component and PureComponent? give an
example where it might break my app.

```
If the Componente is rendered and it has  Child camponent, the child component also re-rendered.

If the PureComponent is rendered and it has Child Component, the Child Component will be re-rendere if props passed to it was updated.
```

2. Context + ShouldComponentUpdate might be dangerous. Can think of why is
that?

```
Context is used to communicate with deeply contained components inside of him. For example, a root component defines a theme, and any component in the component tree might (or might not) be interested in this information.

shouldComponentUpdate has the behavior on the other hand propagate re-rendering of a part of the component tree (including children), for example if the props or state of a component are not modified in a meaningful way. As far as the component can tell. But this might accidentally block context propagation…

```

3.Describe 3 ways to pass information from a component to its PARENT.
```
Props and State

```

4. Give 2 ways to prevent components from re-rendering.
```
Using Hooks as useCallback and useMemo
```
   
5. What is a fragment and why do we need it? Give an example where it might
break my app.
```jsx
  React Fragment allow to return multiple children elements inside of JSX without adding extra DOM element such as <div>.

  // with fragment
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  )

  // error without Fragment
return (
    <ChildA />
    <ChildB />
    <ChildC />
  )


```


6. Give 3 examples of the HOC pattern.
```tsx
function DogImages(props) {
  return props.data.message.map((dog, index) => (
    <img src={dog} alt="Dog" key={index} />
  ));
}

export default withLoader(
  DogImages,
  "https://dog.ceo/api/breed/labrador/images/random/6"
);

   
```


7.what's the difference in handling exceptions in promises, callbacks and
async...await.
```jsx
promisses:
When a promise rejects, the control jumps to the closest rejection handler. That’s very convenient in practice:

fetch('https://no-such-server.blabla') 
  .then(response => response.json())
  .catch(err => alert(err))

callbacks:
whereas goes wrong in the asynchronous function, then the callback could be called with the first argument which specifies what error has happened:

function calculateSquare(number, callback) {
  setTimeout(() => {
    if (typeof number !== "number") {
      callback(new Error("Argument of type number is expected."));
      return;
  }
  const result = number * number;
  callback(null, result);
  }, 1000);
}
let callback = (error, result) => {
  if (error !== null) {
  console.log("Caught error: " + String(error));
  return;
  }
  console.log(result);
};

async await:
Could be wrapper inside of try catch block:
async function delivery() {
  try{
    const beer = await order(['beer']);
    console.log(beer);
  } catch(err) {
    console.log('got error!');
    console.log(err);
  }
}

```

8.How many arguments does setState take and why is it async:
```
 It’s an asynchronous method that’s batched. This means that multiple setState calls are batched before a component is rerendered with the new state.

It takes 2 arguments
```

9.List the steps needed to migrate a Class to Function Component.
```
1. Change the class to a function
2. Remove the render method
3. Convert all methods to functions
4. Remove references to this
5. Remove constructor
6. Replace this.setState
7. useEffect for state update side effects
8. Replace lifecycle methods with hooks
```

10.List a few ways styles can be used with components.
```jsx
1. Inline CSS:
const divStyle = {
  color: 'blue',
  backgroundImage: 'url(' + imgUrl + ')',
};
function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;

2. CSS in JS:
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

React component:
<Wrapper>
  <Title>Hello World, this is my first styled component!</Title>
</Wrapper>
```

11. How to render an HTML string coming from the server.
```jsx
dangerouslySetInnerHTML is React’s replacement for using innerHTML in the browser DOM.

function createMarkup() {
  return {__html: 'First &middot; Second'};
}

function MyComponent() {
  return <div dangerouslySetInnerHTML={createMarkup()} />;
}

```