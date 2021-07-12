const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pausa = document.querySelector('#pausa')
const $backward = document.querySelector('#backward')
const $forward = document.querySelector('#forward')
const $progress = document.querySelector('#progress')

$play.addEventListener('click', handlePlay)
$pausa.addEventListener('click', handlePausa)
$forward.addEventListener('click', handleForward)
$backward.addEventListener('click', handleBackward)

function handlePlay() {
 $video.play()
 $play.hidden = true
 $pausa.hidden = false
}

function handlePausa() {
 $video.pause()
 $play.hidden = false
 $pausa.hidden = true
}

function handleForward() {
    $video.currentTime =  $video.currentTime + 10
}

function handleBackward() {
    $video.currentTime =  $video.currentTime - 10
}

$video.addEventListener('loadedmetadata', handleLoaded)

function handleLoaded() {
    $progress.max = $video.duration
}

$video.addEventListener('timeupdate', handleTimeUpdate)

function handleTimeUpdate() {
    $progress.value = $video.currentTime
}

$progress.addEventListener('input', handleInput)

function handleInput() {
    $video.currentTime = $progress.value
}
