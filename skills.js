const skills = [
    {css_class: "skill-java", name: "Java", level: 78},
    {css_class: "skill-c-plus", name: "C++", level: 75},
    {css_class: "skill-css", name: "Cascading Style Sheets", level: 44},
    {css_class: "skill-html", name: "Hyper Text Markup Language", level: 32},
    {css_class: "skill-php", name: "Hypertext Preprocessor", level: 26}
]




function add_skills() { 
    const dl = document.createElement('dl');
    dl.classList.add('skills-list');
    skills.forEach(item => {

        const dt = document.createElement('dt');
        dt.textContent = item.name;
        dt.classList.add(item.css_class);

        const dd = document.createElement('dd');
        dd.classList.add('level');

        const div = document.createElement('div');
        div.style.width = item.level + '%';
        div.textContent = item.level;

        dd.appendChild(div);
        dl.append(dt); 
        dl.append(dd); 
    });

    document.querySelector('.skills').append(dl)
}

add_skills();