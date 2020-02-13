const WHITE_KEYS = ['z','x','c','v','b','n','m']
const BLACK_KEYS = ['s','d','g','h','j'] 

const keys = document.querySelectorAll('.Key')
const whiteKeys = document.querySelectorAll('.Key.White')
const blackKeys = document.querySelectorAll('.Key.Black')

keys.forEach(key  => {
    key.addEventListener('click', () => playNote(key) )
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const whitekeyIndex = WHITE_KEYS.indexOf(key)
    const blackkeyIndex = BLACK_KEYS.indexOf(key)

    if (whitekeyIndex > -1) playNote(whiteKeys[whitekeyIndex])
    if (blackkeyIndex > -1) playNote(blackKeys[blackkeyIndex])
} )

function playNote(key){
    const audioNote = document.getElementById(key.dataset.note)
    audioNote.currentTime = 0
    audioNote.play()
    key.classList.add('active')
    audioNote.addEventListener('ended', () => {
    key.classList.remove('active')})
}

