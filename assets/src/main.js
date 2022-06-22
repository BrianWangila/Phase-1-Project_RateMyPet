
fetch("https://brianwangila.github.io/Phase-1-Project_RateMyPet/db.json")
.then(resp => resp.json())
.then(data => console.log(data))