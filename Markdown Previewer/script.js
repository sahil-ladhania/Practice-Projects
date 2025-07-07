let markdownInput = document.querySelector("#markdownInput");
let clearBtn = document.querySelector("#clearBtn");
let markdownPreview = document.querySelector("#markdownPreview");

function parseMarkdownSyntax(mdSyntax) {
    let preview = marked.parse(mdSyntax);
    markdownPreview.innerHTML = preview;
}

markdownInput.addEventListener('input' , (e) => {
    let mdSyntax = e.target.value;
    parseMarkdownSyntax(mdSyntax);
})

clearBtn.addEventListener('click' , () => {
    markdownInput.value = "";
    markdownPreview.innerHTML = "";
});