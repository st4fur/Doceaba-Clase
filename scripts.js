const datos = [
    {
        picsum: "https://picsum.photos/id/1006/900/600",
        title: "Fully Responsive Design",
        text: "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
    },
    {
        picsum: "https://picsum.photos/900/600?random=2",
        title: "Updated For Bootstrap 5",
        text: "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
    },
    {
        picsum: "https://picsum.photos/900/600?random=3",
        title: "Easy to Use & Customize",
        text: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    },
    {
        picsum: "https://picsum.photos/id/1008/900/600",
        title: "Easy to Use & Customize",
        text: "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
    },
];

datos.forEach((d, i) => {
    if (i % 2 == 0) {
        document.getElementById("trabajos").innerHTML +=
            '<div class="row g-0"><div class="col-md-6 order-md-2 text-white showcase-img" style="background-image: url(' +
            d.picsum +
            ')"></div><div class="col-md-6 order-md-1 my-auto showcase-text"><h2>' +
            d.title +
            '</h2><p class="lead mb-0">' +
            d.text +
            "</p></div>";
    } else {
        // impar
        document.querySelector("#trabajos").innerHTML +=
            '<div class="row g-0"><div class="col-md-6 text-white showcase-img" style="background-image: url(' +
            d.picsum +
            ')"></div><div class="col-md-6 my-auto showcase-text"><h2>' +
            d.title +
            '</h2><p class="lead mb-0">' +
            d.text +
            "</p></div>";
    }
});

async function users() {
    const consulta = await fetch("https://randomuser.me/api/?results=4");
    const data = await consulta.json();
    const resultados = data.results;
    console.log(resultados);

    resultados.forEach((p) => {
        document.getElementById("personas").innerHTML +=
            '<div class="col-6 col-md-3"><div class="testimonial-item mx-auto mb-5 mb-lg-0"><img class="img-fluid rounded-circle mb-3" src="' +
            p.picture.large +
            '" alt="..." /><h5>' +
            p.name.first +
            " " +
            p.name.last +
            '</h5><p class="font-weight-light mb-0">' +
            p.location.city +
            " , " +
            p.location.country +
            "<br><i class='bi bi-envelope-fill fs-2'></i></p></div></div>";
    });
}
users().catch((error) => console.error(error));
