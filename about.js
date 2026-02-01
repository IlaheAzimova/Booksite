let about = ['Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis facere odio aspernatur quod dicta adipisci dolores nam excepturi natus! Qui vel molestiae numquam et rem ut dolor eius beatae saepen voluptatibus sapiente illum reiciendis atque quod non soluta, enim corporis cumque quia veniam error dolores sint commodi sequi? Numquam ad quaerat eius id provident, at fuga accusamus? Ipsam rem repellat corporis necessitatibus tenetur natus! Ratione animi culpa voluptates quaerat. Esse sequi  aperiam vitae obcaecati quo? Neque mollitia ut tempora maiores, excepturi soluta ullam veritatis quis doloribus tempore eaque adipisci accusantium cum consequatur, vero animi voluptatibus non deleniti aspernatur nisi quibusdam']
let aboutcontent = document.getElementById('aboutcontent')
let images = document.getElementById('images')
function aboutGet() {
    about.forEach(item => {
        aboutcontent.innerHTML += `
    <h1 class="font-bold text-[24px]">About Us</h1>
    <p class="text-[#706e6e] my-4">${item}</p>
    <a href="#" class="text-[blue]">Learn more about us →</a>`

    })


}
aboutGet()
