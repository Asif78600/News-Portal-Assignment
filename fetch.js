const hafizul = () => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
    .then(res => res.json())
    .then(manik => catName(manik.data.news_category))}


function catName(users){
    for (const user of users){
        // console.log(user.category_name)
        const nCat = document.getElementById("cat-1");
        const creation = document.createElement("div");
        creation.innerHTML=`
        <div class="hidden sm:ml-6 sm:block" onclick="emnei(${user.category_id})">
                <div class="flex space-x-4">
                  <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">${user.category_name}</a>
                </div>
        `
        nCat.appendChild(creation)
        

        // phone responsive
        const mobileMenu = document.getElementById("mobile-menu");
        const mobileCreation = document.createElement("div");
        mobileCreation.innerHTML = `
        <div class="space-y-1 px-2 pb-3 pt-2">
            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">${user.category_name}</a>
          </div>
        `
        mobileMenu.appendChild(mobileCreation)

    }

}

function emnei(userName){
    const url = `https://openapi.programming-hero.com/api/news/category/0${userName}`
    fetch(url)
    .then(res => res.json())
    .then(data => loadDetails(data.data))
    // console.log(url)
}


function loadDetails(details){
    for (const detail of details){
        console.log(detail.details)
    }
    
}

hafizul();

