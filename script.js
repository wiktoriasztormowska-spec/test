function showSection(sectionId) {
    const sections = ['gallery', 'randomCat', 'catFacts'];

    sections.forEach(id => {
        document.getElementById(id).style.display = (id === sectionId) ? 'block' : 'none';
    });
}

document.querySelectorAll('.cat').forEach(img => {
    img.addEventListener('click', function(e) {

        const heart = document.createElement('div');

        heart.className = 'heart';
        heart.innerText = '❤️';
        heart.style.left = (e.pageX - 15) + 'px';
        heart.style.top = (e.pageY - 15) + 'px';

        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 1000);
    });
});

const randomBtn = document.getElementById('randomBtn');
const randomContainer = document.getElementById('randomImageContainer');
const catImages = ['cat1.jpg','cat2.jpg','cat3.jpg','cat4.jpg'];

randomBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * catImages.length);

    randomContainer.innerHTML = `<img src="images/${catImages[randomIndex]}" alt="Losowy kotek">`;
});

const facts = [
    "Koty śpią średnio 16 godzin dziennie!",
    "Koty mają ponad 20 mięśni w uszach.",
    "Mruczenie kota może obniżać stres u ludzi.",
    "Koty nie lubią wody, ale niektóre rasy pływają świetnie.",
    "Kot potrafi wydać ponad 100 różnych dźwięków.",
    "Najstarszy kot, którego wiek udokumentowano, dożył 38 lat i 3dni.",
    "Koty pocą się tylko przez poduszki łap."
];

const factBtn = document.getElementById('factBtn');
const factText = document.getElementById('factText');

factBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);

    factText.textContent = facts[randomIndex];
});
