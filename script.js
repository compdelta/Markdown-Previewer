marked.setOptions({
  breaks: true,
});

const sampleMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-header.

This is a [link](https://codepen.io/)!

Here is some **text styling** with _inline code_.

Here is some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// This is a code block.
  <html>
    <head>
      <title>Test</title>
    </head>
\`\`\`
 
- How about a list...
  - ...with different bullets...
     - ... and different indentation levels?

1. Or a numbered list instead?
1. You don't even need to write the actual numbers.
1. These are all 1s.

> This is apparently a block quote!


And finally, an embedded image:

![React Logo](./react_logo.png)
`;

class MarkdownPreviewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: sampleMarkdown,
    };
  }

  updateMarkdown(markdown) {
    this.setState({ markdown });
  }

  render() {
    return React.createElement(
      "div",
      { id: "wrapper" },
      React.createElement(
        "div",
        { id: "title" },
        React.createElement("h1", null, "Markdown Previewer")
      ),

      React.createElement(
        "div",
        { className: "row", align: "center" },

        React.createElement(
          "div",
          { className: "col-md-6" },
          React.createElement("h2", null, "Markdown editor"),
          React.createElement("textarea", {
            id: "editor",
            value: this.state.markdown,
            onChange: (e) => {
              this.updateMarkdown(e.target.value);
            },
          })
        ),

        React.createElement(
          "div",
          { className: "col-md-6" },
          React.createElement("h2", null, "Preview"),
          React.createElement("div", {
            dangerouslySetInnerHTML: {
              __html: marked(this.state.markdown),
            },
            id: "preview",
          })
        )
      )
    );
  }
}

ReactDOM.render(
  React.createElement(MarkdownPreviewer, null),
  document.getElementById("App")
);
