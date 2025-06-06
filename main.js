
let tree = document.getElementById("tree");
let flower = document.getElementById("flower");

let treeSize = 1.0;
let flowerSize = 0.5;

tree.addEventListener("click", () => {
    let speed = parseFloat(document.getElementById("treeSpeed").value);
    treeSize += 0.1 * speed;
    document.getElementById("treeSize").innerText = "Size: " + treeSize.toFixed(1) + "m";
    tree.style.transform = "scale(" + treeSize / 1.0 + ")";
});

flower.addEventListener("click", () => {
    let speed = parseFloat(document.getElementById("flowerSpeed").value);
    flowerSize += 0.1 * speed;
    document.getElementById("flowerSize").innerText = "Size: " + flowerSize.toFixed(1) + "m";
    flower.style.transform = "scale(" + flowerSize / 0.5 + ")";
});
