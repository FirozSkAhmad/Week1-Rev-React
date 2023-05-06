import React from "react";
import ReactDOM from 'react-dom/client'

// const child1 = React.createElement("h1", {}, "I'm h1");
// const child2 = React.createElement("h2", {}, "I'm h2");
// const child = React.createElement("div", { id: "child" }, [
//     child1,
//     child2,
// ]);

// const ele = React.createElement("div", { id: "parent" }, child);

const ele = <div id="parent">
    <div id="child">
        <h1>I'm h1</h1>
        <h1>I'm h2</h1>
    </div>
</div>

console.log(ele)

const App = () => {
    return (
        ele
    )
}

console.log(App)
console.log(<App />)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);