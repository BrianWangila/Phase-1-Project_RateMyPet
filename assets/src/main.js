//Rate my Pet  by Brian
const dogData = "https://brianwangila.github.io/Phase-1-Project_RateMyPet/db.json"
const catData = "https://brianwangila.github.io/Phase-1-Project_RateMyPet/db.json"

const renderDogImages = (dog) => {
  const images = document.getElementById("slide")
  const img = document.createElement("img")
  images.appendChild(img)
  img.src = dog.image

  img.addEventListener("click", (e) => {
    const name = document.getElementById("name")
    name.innerText = dog.name

    const details = document.querySelector("#pet-details")
    details.innerHTML = `
    <li>Breed: <span>${dog.breed}</span></li>
    <li>Breed: <span>${dog.sex}</span></li>
    <li>Breed: <span>${dog.age}</span></li>`


    const slide = document.getElementById("image-slide")
    slide.innerHTML = `
    <img src=${dog.images.image1}>
    <img src=${dog.images.image2}>
    <img src=${dog.images.image3}>
    `
    
    document.getElementById("rating").innerText = dog.rating
    document.getElementById("like").innerText = dog.likes

    const rightSide = document.querySelector("#right-section")
    rightSide.style.visibility = "visible"

    //add event listener to rate button
    const rate = document.querySelector("#rate")
    rate.addEventListener("click", (e) => {
      const inputRate = document.querySelector("#rating")
      const enterRate = document.getElementById("inputs")
      if (enterRate.value >= 1 && enterRate.value <= 5) {
        inputRate.innerHTML = enterRate.value
      } else {
        alert("Invalid rating")
      }
      
    })

    //adding like functionality
    const like = document.querySelector("#thumbsUp")
    like.addEventListener("click", (e) => {
      e.preventDefault()
      console.log("liker")
      const liker = document.getElementById("like")
      
      like.style.color = "red"
      liker.innerText = dog.likes + 1

    })

    //adding unlike functionality
    const down = document.querySelector("#thumbsDown")
    down.addEventListener("click", () => {
      console.log("unlike")
    })


    const form = document.querySelector(".form form")
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      const category = e.target.catDog.value
  
      const newPet = {
        name: e.target.petName.value,
        breed: e.target.breed.value,
        sex: e.target.sex.value,
        age: e.target.age.value,
        image: e.target.gif.value,
        images: {
          image1: e.target.link1.value,
          image2: e.target.link2.value,
          image3: e.target.link3.value,
        },
        rating: 1,
        likes: 0
      }

      // add dog pet to page
      fetch(dogData, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(newPet) 
      })
      .    // location.reload()
      then(resp => resp.json())
      .then(dog => (dog))
    })

    //delete an animal from the page
    const deletePet = document.getElementById("remove")
    deletePet.addEventListener("click", (e) => {
      console.log("delete")
      const card = document.getElementById("card")
      img.remove()

      //DELETE method
      // fetch(`${dogData}`, {
      //   method: "DELETE",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json"
      //   }
      //   .then(resp => resp.json())
      //   .then(dog => (dog))
      // })
    })
  })

}



//cat category
const renderCatImages = (cat) => {
  const images = document.getElementById("slide2")
  const img = document.createElement("img")
  images.appendChild(img)
  img.src = cat.image

  img.addEventListener("click", (e) => {
    const name = document.getElementById("name")
    name.innerText = cat.name

    const details = document.querySelector("#pet-details")
    details.innerHTML = `
    <li>Breed: <span>${cat.breed}</span></li>
    <li>Breed: <span>${cat.sex}</span></li>
    <li>Breed: <span>${cat.age}</span></li>
    
    `
    const slide = document.getElementById("image-slide")
    slide.innerHTML = `
    <img src=${cat.images.image1}>
    <img src=${cat.images.image2}>
    <img src=${cat.images.image3}>
    `

    document.getElementById("rating").innerText = cat.rating
    document.getElementById("like").innerText = cat.likes


    const like = document.querySelector("#thumbsUp")
    like.addEventListener("click", (e) => {
      e.preventDefault()
      console.log("liker")
      const liker = document.getElementById("like")
      liker.innerText = cat.likes + 1
      like.style.color = "red"

    })
    const down = document.querySelector("#thumbsDown")
    down.addEventListener("click", () => {
      console.log("unlike")
    })


    //add cat pets to page
    const form = document.querySelector("form")
    form.addEventListener("submit", (e) => {
      e.preventDefault()
      const category = e.target.catDog.value
  
      const newPet = {
        name: e.target.petName.value,
        breed: e.target.breed.value,
        sex: e.target.sex.value,
        age: e.target.age.value,
        image: e.target.gif.value,
        images: {
          image1: e.target.link1.value,
          image2: e.target.link2.value,
          image3: e.target.link3.value,
        },
        rating: 1,
        likes: 0
      }
      fetch(catData, {
        method: "POST",
        headers: {
          "Content-Type": "application/json", 
          // "Access-Control-Allow-Origin": "*",
          Accept: "application/json"
        },
        body: JSON.stringify(newPet) 
      })
      .then(resp => resp.json())
      .then(cat => (cat))
    })

    //remove pet from page
    const deletePet = document.getElementById("remove")
    deletePet.addEventListener("click", (e) => {
      console.log("delete")
      const card = document.getElementById("card")
      img.remove()

      //DELETE method
      // fetch(`${catData}`, {
      //   method: "DELETE",
      //   headers: {
      //     "Content-Type": "application/json",
      //     Accept: "application/json"
      //   }
      //   .then(resp => resp.json())
      //   .then(dog => (dog))
      // })
    })

  })

}





const fetchData = () => {
  fetch(dogData)
  .then(resp => resp.json())
  // .then(data => console.log(data[0]))
  .then(data => data[0].forEach((dog) => renderDogImages(dog)))


  fetch (catData)
  .then(resp => resp.json())
  // .then(data => console.log(data[1]))
  .then(data => data[1].forEach(cat => renderCatImages(cat)))

    //add pet animal to page
  // fetch(`http://localhost:3000/dogs/${newPet.id}`, {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json"
  //   },
  //   body: JSON.stringify(newPet) 
  // })
  // .then(resp => resp.json())
  // .then(dog => renderDogImages(dog))

}
fetchData()

