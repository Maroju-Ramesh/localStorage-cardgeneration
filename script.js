let form = document.getElementById("dataform")
form.addEventListener('submit', function (e) {
    e.preventDefault();



    // method1
    // let usernm=e.target[0].value;
    // let email=e.target[1].value

// method2

    let users = JSON.parse(localStorage.getItem("data")) || []
    let usernm = document.getElementById("name").value
    let email = document.getElementById("email").value
    let age = document.getElementById("age").value
    let occupation = document.getElementById("occup").value
    let college = document.getElementById("clge").value
    let branch = document.getElementById("branch").value
    let location = document.getElementById("location").value
    let img = document.getElementById("url").value
    let user = { usernm, email, age, occupation, college, branch, location, img }

    users.push(user);
    localStorage.setItem("data", JSON.stringify(users));
    form.reset();
    const userdata = JSON.parse(localStorage.getItem("data"));
    createcard(userdata);
});

function createcard(obj) {
    const list = document.getElementById("list");
    list.innerHTML = "";
    for (i = 0; i < obj.length; i++) {
        userobj = obj[i];
        let userDiv = document.createElement("div");
        userDiv.classList.add("user");
        userDiv.innerHTML = `
        <img width="100px" height="100px" src="${userobj.img}" alt="Image">
        <h1>${userobj.usernm}</h1>
        <p>Email: ${userobj.email}</p>
        <p>Age: ${userobj.age}</p>
        <p>Occupation: ${userobj.occupation}</p>
        <p>College: ${userobj.college}</p>
        <p>Branch: ${userobj.branch}</p>
        <p>Location: ${userobj.location}</p>
    `
        list.appendChild(userDiv);
    }
}
window.onload = function () {
    let users = JSON.parse(localStorage.getItem("data")) || [];
    if (users.length !== 0) {
        createcard(users);
        console.log("Data is there");
    }
};