document.addEventListener("DOMContentLoaded", function(){
    const buttons = document.querySelectorAll('button');

    buttons.forEach(button => {
        // Attach click event listener
        button.addEventListener('click', () => {
        const link = button.getAttribute('href'); // Get the href attribute

        if (link) {
            // Redirect to the link
            window.location.href = link;
        } else {
            console.warn('Button has no href attribute:', button);
        }
        });
    });
})