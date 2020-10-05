const SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition
const SpeechGrammarList = window.SpeechGrammarList || webkitSpeechGrammarList
const SpeechRecognitionEvent = window.SpeechRecognitionEvent || webkitSpeechRecognitionEvent

const recognition = new SpeechRecognition()

recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = true;
recognition.maxAlternatives = 3;

recognition.onresult = e => {
    const res = e.results[0].transcript.toLowerCase()
    console.log(res);
    if(res == 'Mathew') {
        alert('MIERDA')
    }

    $('#out').html(res)
}

recognition.onstart = e => {
    console.log('starting')
}