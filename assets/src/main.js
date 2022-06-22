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
      inputRate.innerHTML = e.target.inputs.value
    })

    const like = document.querySelector("#heart")
    like.addEventListener("click", (e) => {
      console.log("liker")

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





const fetchData = () => {
  fetch("http://localhost:3000/dogs")
  .then(resp => resp.json())
  .then(data => data.forEach(dog => renderDogImages(dog)))


  fetch ("http://localhost:3000/cats")
  .then(resp => resp.json())
  .then(data => data.forEach(cat => renderCatImages(cat)))

}
fetchData()