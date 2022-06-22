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
      liker.innerText = dog.likes + 1
      like.style.color = "red"

    })

  })

}
// renderImages()


//
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

  })

}
//renderCatImages()



//add new pet
const renderNewPetToServer = () => {
  const form = document.querySelector(".form form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("test")
    const newPet = {
      name: e.target.name.value,
      breed: e.target.breed.value,
      sex: e.target.sex.value,
      age: e.target.age.value,
      image: e.target.gif.value,
      // images[]: e.target.image1.value,
      // images[]: e.target.image2.value,
      // images[]: e.target.image3.value,
      rating: 1,
      likes: 0
    }

    fetch("http://localhost:3000/dogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(newPet) 
    })
    .then(resp => resp.json())
    .then(data => data)
  })

}
renderNewPetToServer()




const fetchData = () => {
  fetch("http://localhost:3000/dogs")
  .then(resp => resp.json())
  .then(data => data.forEach(dog => renderDogImages(dog)))


  fetch ("http://localhost:3000/cats")
  .then(resp => resp.json())
  .then(data => data.forEach(cat => renderCatImages(cat)))


  //add pet to server
  // fetch("http://localhost:3000/dogs", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json"
  //   },
  //   body: JSON.stringify(newPet) 
  // })
  // .then(resp => resp.json())
  // .then(data => (data))

}
fetchData()