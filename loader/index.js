const cardsData = [
    {
        title: "HTML 5",
        text: "The standard markup language for documents designed to be displayed in a web browser.",
        icon: "&lt;/&gt;",
        gradient: "linear-gradient(45deg, #ff6b6b, #ff8e53)",
        btnColor: "#ff6b6b"
    },
    {
        title: "CSS 3",
        text: "Style sheet language used for describing the presentation of a document written in HTML.",
        icon: "#",
        gradient: "linear-gradient(45deg, #4facfe, #00f2fe)",
        btnColor: "#4facfe"
    },
    {
        title: "JavaScript",
        text: "Programming language that is one of the core technologies of the World Wide Web.",
        icon: "JS",
        gradient: "linear-gradient(45deg, #43e97b, #38f9d7)",
        btnColor: "#38f9d7"
    },
    {
        title: "React",
        text: "A JavaScript library for building user interfaces based on UI components.",
        icon: "R",
        gradient: "linear-gradient(45deg, #fa709a, #fee140)",
        btnColor: "#fa709a"
    }
];
const app = document.getElementById('app');
function createElement(tag, className) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    return el;
}
function createSkeletons() {
    app.innerHTML = ''; 
    for (let i = 0; i < 4; i++) {
        const card = createElement('div', 'card skeleton-card');
        const header = createElement('div', 'skeleton-header skeleton');
        const body = createElement('div', 'card-body');
        const title = createElement('div', 'skeleton-title skeleton');
        const text1 = createElement('div', 'skeleton-text skeleton');
        const text2 = createElement('div', 'skeleton-text skeleton');
        const btn = createElement('div', 'skeleton-btn skeleton');
        body.appendChild(title);
        body.appendChild(text1);
        body.appendChild(text2);
        body.appendChild(btn);
        card.appendChild(header);
        card.appendChild(body);
        app.appendChild(card);
    }
}
function createCards() {
    app.innerHTML = ''; 
    cardsData.forEach(data => {
        const card = createElement('div', 'card');
        const header = createElement('div', 'card-header');
        header.style.background = data.gradient;
        const icon = createElement('div', 'card-icon');
        icon.innerHTML = data.icon;
        header.appendChild(icon);
        const body = createElement('div', 'card-body');
        const title = createElement('h3', 'card-title');
        title.innerText = data.title;
        const text = createElement('p', 'card-text');
        text.innerText = data.text;

        const btn = createElement('button', 'card-btn');
        btn.innerText = "READ MORE";
        btn.style.background = data.gradient;

        body.appendChild(title);
        body.appendChild(text);
        body.appendChild(btn);
        card.appendChild(header);
        card.appendChild(body);
        app.appendChild(card);
    });
}
createSkeletons();
setTimeout(() => {
    createCards();
}, 3000); 
