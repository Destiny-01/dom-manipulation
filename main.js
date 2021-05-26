document.getElementById("main-heading").innerHTML = "New DOM layout";
document.getElementById("main-heading").classList.add("bg-success");
document.getElementById("para1").innerHTML =
  "The Document Object Model (DOM) is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure";
document.getElementById("para2").innerHTML =
  "The Document Object Model (DOM) is a programming interface for HTML and XML documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects. That way, programming languages can connect to the page.";
document.getElementById("btn").addEventListener("click", () => {
  document.getElementById("para4").innerHTML =
    "The Document Object Model is a cross-platform and language-independent interface that treats an XML or HTML document as a tree structure wherein each node is an object representing a part of the document.";
});
document.getElementById("red").classList.add("bg-danger");
document.getElementById("blue").classList.add("bg-primary");
document.getElementById("yellow").classList.add("bg-warning");
document.getElementById("green").classList.add("bg-success");
document.getElementById("black").classList.add("bg-dark");
