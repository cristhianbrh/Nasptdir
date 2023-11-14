
const dataCardsGet = document.getElementById("dataCardsGet");


fetch("https://api.covidtracking.com//v1/states/info.json")
    .then(r => r.json())
    .then((rpt) => {
        rpt.forEach(element => {
            console.log(element)
            dataCardsGet.appendChild(document.createRange().createContextualFragment(
                `
                <div class="card mb-3 pb-4" style="min-width: 300px">
                <img class="img-fluid rounded-start" src="https://news.yale.edu/sites/default/files/styles/featured_media/public/ynews_327570514.jpg?itok=gFRdbh5I&c=07307e7d6a991172b9f808eb83b18804" alt="">
                <div class="card-body" style="max-height: 300px; overflow-y: auto;">
                    <h5 class="card-title">${element.name}</h5>
                    <p class="card-text">${element.notes}</p>
                    <p class="card-text"><small class="text-body-secondary">${element.twitter}</small></p>
                </div>
                </div>
                `))
        });
    })
