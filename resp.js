function updateClasses() {
    // Check if the window width is within the specified range
    if (window.innerWidth >= 320 && window.innerWidth <= 576) {
        // Find the element with the class 'vh-100' and replace with 'vh-50'
        var vh100Element = document.querySelector('.vh-100');
        if (vh100Element) {
            vh100Element.classList.remove('vh-100');
        }
    }

    // Handle other cases based on window width
    if (window.innerWidth >= 380 && window.innerWidth <= 412) {
        var vh100Element = document.querySelector('.vh-100');
        if (vh100Element) {
            vh100Element.classList.remove('vh-100');
            vh100Element.classList.add('vh-50');
        }
    }

    if (window.innerWidth >= 768 && window.innerWidth <= 992) {
        // Handle col-md-3, col-md-6, col-md-9
        updateColumns('.col-md-3', 'col-md-12');
        updateColumns('.col-md-6', 'col-md-12');
        updateColumns('.col-md-9', 'col-md-12');
    }

    if (window.innerWidth >= 993) {
        // Handle col-md-12, col-md-3, col-md-6, col-md-9
        updateColumns('.col-md-15', 'col-md-15');
        updateClasses('.col-md-12', '');
        updateColumns('.col-md-3', 'col-md-15');
        updateColumns('.col-md-6', 'col-md-15');
        updateColumns('.col-md-9', 'col-md-15');
    } 
}

function updateColumns(oldClass, newClass) {
    var elements = document.querySelectorAll(oldClass);
    if (elements.length > 0) {
        elements.forEach(function(element) {
            element.classList.remove(oldClass);
            if(newClass) {
            element.classList.add(newClass);
            }
        });
    }
}

// Initial class update on page load
updateClasses();

// Listen for the window resize event
window.addEventListener('resize', function() {
    // Update classes whenever the window is resized
    updateClasses();
});
