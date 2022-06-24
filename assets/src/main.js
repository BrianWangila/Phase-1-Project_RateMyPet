//Rate my Pet  by Brian


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
    <li>Breed: <span>${dog.age}</span></li>
    
    `
    const slide = document.getElementById("image-slide")
    slide.innerHTML = `
    <img src=${dog.images.image1}>
    <img src=${dog.images.image2}>
    <img src=${dog.images.image3}>
    `
    
    document.getElementById("rating").innerText = dog.rating
    document.getElementById("like").innerText = dog.likes

    //add event listener to rate button
    const rate = document.querySelector("#rate")
    rate.addEventListener("click", (e) => {
      console.log("like")
      const inputRate = document.querySelector("#rating")
      inputRate.innerHTML = `${e.target.inputs.value}`
    })

    const like = document.querySelector("#heart")
    like.addEventListener("click", (e) => {
      e.preventDefault()
      console.log("liker")
      const liker = document.getElementById("like")

      like.style.color = "red"
      liker.innerText = dog.likes + 1

    })

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

      // add dog pet to page
      fetch("http://localhost:3000/dogs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(newPet) 
      })
      .then(resp => resp.json())
      .then(dog => (dog))
    })

    //delete an animal from the page


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


    const like = document.querySelector("#heart")
    like.addEventListener("click", (e) => {
      e.preventDefault()
      console.log("liker")
      const liker = document.getElementById("like")
      liker.innerText = cat.likes + 1
      like.style.color = "red"

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
      fetch("http://localhost:3000/cats", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
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
      fetch(`http://localhost:3000/cats`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
        .then(resp => resp.json())
        .then(dog => (dog))
      })
    })
  })

}





const fetchData = () => {
  fetch("https://brianwangila.github.io/Phase-1-Project_RateMyPet/db.json")
  .then(resp => resp.json())
  .then(data => console.log(data))
  // .then(data => data.forEach((dog) => renderDogImages(dog)))


  fetch ("http://localhost:3000/dogs")
  .then(resp => resp.json())
  .then(data => console.log(data))
  // .then(data => data.forEach(cat => renderCatImages(cat)))





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