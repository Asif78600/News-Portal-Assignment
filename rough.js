fetch("https://openapi.programming-hero.com/api/news/category/02")
.then(res => res.json())
.then(data => console.log(data))

function emnei(users){

    for (const user of users){
        console.log(user.category_name)
    };

}