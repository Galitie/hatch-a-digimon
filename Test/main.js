document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let randomDigimonIndex = Math.floor(Math.random() * 9)
  const url = 'https://digimon-api.vercel.app/api/digimon/level/In Training'

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector('h2').innerText = data[randomDigimonIndex].name
        document.querySelector('img').src = data[randomDigimonIndex].img
        document.querySelector('h3').innerText = data[randomDigimonIndex].level
      })
      .catch(err => {
          console.log(`error ${err}`)
          document.querySelector('h2').innerText = `Error, please try again.`
          document.querySelector('img').src = ""
          document.querySelector('h3').innerText = ""

      });
}

