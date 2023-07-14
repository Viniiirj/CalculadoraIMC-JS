import { Modal } from "./modal.js"
import { AlertError } from "./alert-error.js"
import { notANumber, calculateIMC } from "./utils.js"
// Variaveis
const form = document.querySelector("form")
const inputWeight = document.querySelector("#weight")
const inputHeight = document.querySelector("#height")

inputWeight.oninput = () => AlertError.close()
inputHeight.oninput = () => AlertError.close()
form.onsubmit = (event) => {
  event.preventDefault()

  const weight = inputWeight.value
  const height = inputHeight.value

  const weightOrHeightnotANumber = notANumber(weight) || notANumber(height)

  if (weightOrHeightnotANumber) {
    AlertError.open()
    return
  }
  AlertError.close()

  

  const result = calculateIMC(height, height)
  displayResultMessage(result)
}



function displayResultMessage(result) {
  const message = `Seu IMC é de ${result}`
  Modal.message.innerText = message
  Modal.open()
  
}