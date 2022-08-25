const modalOverlay = document.querySelector('.modal_overlay');
const videoPrincipal = document.querySelector('.videos_principal');
const videosItem = document.querySelectorAll('.videos_item');

/* Close Overlay */
const close = document.querySelector('.close_content');
close.addEventListener('click', () => modalOverlay.classList.remove('active'));

/* Open Overlay for each item of list */
for (let videoItem of videosItem) {
    videoItem.addEventListener('click', () => {
        const videoId = videoItem.getAttribute('id');
        modalOverlay.classList.add('active');
        /* Change video link */
        modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoId}`;
    })
}

/* Open overlay with principal video*/
videoPrincipal.addEventListener('click', () =>  {
    const videoPrincipalId = videoPrincipal.getAttribute('id');
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('iframe').src = `https://www.youtube.com/embed/${videoPrincipalId}`;
})


