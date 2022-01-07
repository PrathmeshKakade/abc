async function getData() {
    let url = `https://jsonplaceholder.typicode.com/posts?_limit=10`;

    let res = await fetch(url);
    let results = await res.json();
    for (let items of results) {
        let parent = document.querySelector("#parent");
        let child = parent.innerHTML;
        let newchild = `<div>${items.title}</div>`;
        parent.innerHTML = `${child} ${newchild}`;
    }
}