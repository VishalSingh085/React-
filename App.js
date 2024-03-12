// const parent = React.createElement("div",{id:"parent"},[
// React.createElement("div",{id :"child"},[
//   React.createElement("h1",{},"this is heading 1"),
//   React.createElement("h2",{},"this is heading 2"),
// ]),
// React.createElement("div",{id :"child"},[
//     React.createElement("h1",{},"this is heading 1"),
//     React.createElement("h2",{},"this is heading 2"),
//   ]),
// ]);

/**<h1> Incrediants </h1.
 * <div id ="parent">
 *  <ol> apple</ol>
 *  <ol>mango <ol> juice </ol></ol>
 * <ol>orange </ol>
 *  </div>
 */

const parent = [ React.createElement("h1",{id:"heading"},"Incrediants Fruits"),
      React.createElement("div",{id:"parent"},[
        React.createElement("ol",{},[
         React.createElement("li",{},"apple"),
         React.createElement("li",{},"mango",[
          React.createElement("li",{},"Juice"),
         ]),
         React.createElement("li",{},"orange"),
        ]),
      ]),
];
const heading = React.createElement("h1", {id:"heading",xyz:"abc"},"Hello world from react");
console.log(heading);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);