import React, { useEffect } from "react";
import "./App.css";
import Quill from "quill";
import QuillBetterTable from "quill-better-table";
import ReactQuill from "react-quill";

function App() {
  console.log(Quill.version);
  Quill.register(
    {
      "modules/better-table": QuillBetterTable,
    },
    true
  );
  const [text, setText] = React.useState("");

  var quill;

  useEffect(() => {
    quill = new Quill("#editor-wrapper", {
      theme: "snow",
      modules: {
        table: false, // disable table module
        "better-table": {
          operationMenu: {
            items: {
              unmergeCells: {
                text: "Another unmerge cells name",
              },
            },
          },
        },
        keyboard: {
          bindings: QuillBetterTable.keyboardBindings,
        },
      },
    });
  }, []);

  return (
    <>
      <div id="editor-wrapper"></div>
      <button onClick={()=>{
        let tableModule = quill.getModule('better-table')
        tableModule.insertTable(3, 3)
      }}>Insert</button>
    </>
  );
}

export default App;
