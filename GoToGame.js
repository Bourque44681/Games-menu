document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        // Attach click event listener
        button.addEventListener('click', () => {
        const link = button.getAttribute('href'); // Get the href attribute

        if (link) {
            // Redirect to the link
            window.open(link, "_blank")
        } else {
            console.warn('Button has no href attribute:', button);
        }
        });
    });
})