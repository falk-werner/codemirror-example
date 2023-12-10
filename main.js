import { EditorView, basicSetup } from "codemirror"
import { Compartment, Text } from "@codemirror/state"
import { markdown } from "@codemirror/lang-markdown"

const content = `# Heading 1

This is an example

## Lists

- apple
- banana
- another fruit

## Links

[Some Link](https://example.org)
`;

const language = new Compartment();
const editor_element = document.querySelector("#editor");
const editor = new EditorView({
    extensions: [
        basicSetup,
        language.of(markdown())
    ],
    doc: content,
    parent: editor_element
});
