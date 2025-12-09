
const projects_name = [
    {
        project: "Built a Book Store Application Using React Library",
        link: "https://book-store-using-react-332g.vercel.app/",
    },
    {
        project: "Built a Pokémon Search App Using Javascript, CSS and HTML",
        link: "https://codepen.io/rittiksaha/pen/MYWNXzv",
    },
    {
        project: "Built a Ecommerce Application Using React",
        link: "https://ecommerce-app-using-react-sp.vercel.app/",
    },
    {
        project: "Built a Banking System Software Using C",
        link: "https://github.com/GRINDER101/Banking_system-Milestone-3",
    }
];




const container = document.querySelector("#project");

projects_name.forEach((proj)=> {
    const div = document.createElement("p");

    div.innerHTML = `<b>${proj.project}</b>
       <br />
       <em>
        Link :- <a href="${proj.link}" >${proj.link}</a>
      </em>
     <br />`
       

     container.appendChild(div);
})







const skills = ["React", "JavaScript", "HTML/CSS", "C ,C++", "Python", "AI and ML", "DSA"];


const div = document.querySelector("#skill");



skills.forEach((skill, number) => {

    const p_tag = document.createElement("p");
    p_tag.innerHTML = `${number+1}.${skill}`

    div.appendChild(p_tag);
})
    
const lang_name = ["English", "Bengali"];

const lang_div = document.querySelector("#language");

lang_name.forEach((lang, number) => {
    const p_element = document.createElement("p");

    p_element.innerHTML = `<b key=${number}>${lang}</b>`

    lang_div.appendChild(p_element);
})

const experience_list = [
    {
        num: 1, 
        exp: "Wrote well-designed, testable code using React framework and achieved desired result.",
    },
    {
        num: 2,
        exp: "Collaborated with software engineers to understand implementation of different software solutions and their uses.",
    },
    {
        num: 3,
        exp: "Participated in weekly meetings to discuss best practices and to strategise time management.",
    },
];


const experience_div = document.querySelector("#experience");

const exp_p_tag = document.createElement("p");

experience_div.appendChild(exp_p_tag);

experience_list.forEach((expe)=> {
    const li_tag = document.createElement("li");

    li_tag.innerHTML = `${expe.exp}`;
    
    exp_p_tag.appendChild(li_tag);
})
