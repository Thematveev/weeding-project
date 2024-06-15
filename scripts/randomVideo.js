const videos = [
    './assets/IMG_8447.MOV',
    './assets/IMG_9110.MOV'
]

const video = document.getElementById('vid')

const vidIndex = Math.floor(Math.random() * videos.length)

video
    .querySelector('source')
    .setAttribute('src', videos[vidIndex])

video.load();


setTimeout(() => {
    video.play();
}, 2000)

