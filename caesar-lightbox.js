(function() {

    const lightBoxElements = document.querySelectorAll('a.caesar-lightbox');
    var imageUrls = [];

    if(lightBoxElements.length > 0){
        // IF any lightbox elements are found, add click eventlisteners to each of them. On click send an event that the Alpine component is listening to. See @lightboxelementclick.window="handleLightboxChange(event)" in html file
        // Also add all image urls to the imageUrls array
        lightBoxElements.forEach(lightBoxElement => {

            lightBoxElement.addEventListener('click', function handleClick(e) {
                e.preventDefault();

                window.dispatchEvent(new CustomEvent('lightboxelementclick', {
                    detail: {
                      element: e.currentTarget,
                      imgUrl: e.currentTarget.href
                    }
                }));

            })
            imageUrls.push(lightBoxElement.href);
        })

    }

    // Initiate the Caesar Lightbox component on Alpine Init. The lightbox is only visible as long as there is a currentImageUrl. Whenever currentImageUrl is set to null, the lightbox is hidden.
    document.addEventListener('alpine:init', () => {
        Alpine.data('caesarLightbox', () => ({
            currentImageUrl: null,

            // Previous and next. Sets the currentImageUrl based on the position of the currentImageUrl in the imageUrls array. If index is at the end of the array, reset if to browse around
            loadPrevious(){
                let previousIndex = imageUrls.indexOf(this.currentImageUrl)-1
                if(previousIndex == -1){
                    previousIndex = imageUrls.length-1
                }

                this.currentImageUrl = imageUrls[previousIndex]
            },

            loadNext(){
                let nextIndex = imageUrls.indexOf(this.currentImageUrl)+1
                if(nextIndex == imageUrls.length){
                    nextIndex = 0
                }

                this.currentImageUrl = imageUrls[nextIndex]
            },

            // Set the currentImageUrl. This happens when a lightboxelement is clicked. See eventlisteners and window.dispatchEvent above.
            handleLightboxChange(event){
                this.currentImageUrl = event.detail.imgUrl;
            }


        }))
    })


 })();

