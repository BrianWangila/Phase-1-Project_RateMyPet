//Rate my Pet  by Brian

const renderImages = (dog) => {
  const images = document.getElementById("slide")
  const img = document.createElement("img")
  images.appendChild(img)
  img.src = dog.image

}
// renderImages()









fetch("http://localhost:3000/dogs")
.then(resp => resp.json())

.then(data => data.forEach(dog => renderImages(dog)))