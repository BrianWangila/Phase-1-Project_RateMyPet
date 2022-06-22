//Rate my Pet  by Brian

const renderDogImages = (dog) => {
  const images = document.getElementById("slide")
  const img = document.createElement("img")
  images.appendChild(img)
  img.src = dog.image

  img.addEventListener("click", (e) => {
    const slide = document.getElementById("image-slide")
    slide.innerHTML = `
    <img src=${dog.images.image1}>
    <img src=${dog.images.image2}>
    <img src=${dog.images.image3}>
    `

  })

}
// renderImages()



const renderCatImages = (cat) => {
  const images = document.getElementById("slide2")
  const img = document.createElement("img")
  images.appendChild(img)
  img.src = cat.image

  img.addEventListener("click", (e) => {
    const slide = document.getElementById("image-slide")
    slide.innerHTML = `
    <img src=${cat.images.image1}>
    <img src=${cat.images.image2}>
    <img src=${cat.images.image3}>
    `

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