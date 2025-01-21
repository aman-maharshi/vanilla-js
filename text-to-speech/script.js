const voiceSelect = document.querySelector('#voiceSelect')
const playButton = document.querySelector('#playButton')
const textInput = document.querySelector('textarea')
const error = document.querySelector('#error')

let activeVoice = ''

/*
  FUNCTIONS
--------------*/ 

const populateVoiceList = () => {
  let voices = speechSynthesis.getVoices()
  // voices = voices.filter(item => item.lang === "en-GB")
  // console.log(voices)
  voices.forEach(voice => {
    const option = document.createElement('option')
    option.textContent = `${voice.name} (${voice.lang})`
    option.setAttribute('data-lang', voice.lang)
    option.setAttribute('data-name', voice.name)
    voiceSelect.appendChild(option)
  })
}

const playText = () => {
  const text = textInput.value
  if (text) {
    const utterance = new SpeechSynthesisUtterance(text)
    if (activeVoice) {
      utterance.voice = activeVoice
    }
    speechSynthesis.speak(utterance)
  } else {
    error.textContent = 'Please enter text to read'
    setTimeout(() => {
      error.textContent = ''
    }, 3000)
  }
}

const handleVoiceChange = () => {
  const selectedVoice = voiceSelect.selectedOptions[0].getAttribute('data-name')
  const voices = speechSynthesis.getVoices()
  const voice = voices.find(voice => voice.name === selectedVoice)
  activeVoice = voice
  // const utterance = new SpeechSynthesisUtterance(textInput.value)
  // utterance.voice = voice
  // speechSynthesis.speak(utterance)
}

/*
  EVENT LISTENERS
-------------------*/
document.addEventListener('DOMContentLoaded', () => {
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList
  }
  populateVoiceList()
})

playButton.addEventListener('click', playText)

voiceSelect.addEventListener('change', handleVoiceChange)






