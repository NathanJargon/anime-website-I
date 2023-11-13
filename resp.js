document.addEventListener("DOMContentLoaded", function() {
    // Check if the window width is within the specified range
    if (window.innerWidth >= 320 && window.innerWidth <= 576) {
        // Find the element with the class 'vh-100' and replace with 'vh-50'
        var vh100Element = document.querySelector('.vh-100');
        if (vh100Element) {
            vh100Element.classList.remove('vh-100');
            vh100Element.classList.add('vh-50');
        }
    }

    if (window.innerWidth >= 412 && window.innerWidth <= 412) {
        // Select all elements with the class 'col-md-3'
        var vh100Element = document.querySelector('.vh-100');
        if (vh100Element) {
            vh100Element.classList.remove('vh-100');
            vh100Element.classList.add('vh-50');
        }
    }

    if (window.innerWidth >= 769 && window.innerWidth <= 992) {
        // Select all elements with the class 'col-md-3'
        var elements = document.querySelectorAll('.col-md-3');

        // Iterate over each element and update the classes
        elements.forEach(function(element) {
            element.classList.remove('col-md-3');
            element.classList.add('col-md-9');
        });
    }

    if (window.innerWidth >= 992) {
        // Select all elements with the class 'col-md-3'
        var elements = document.querySelectorAll('.col-md-9');

        // Iterate over each element and update the classes
        elements.forEach(function(element) {
            element.classList.remove('col-md-9');
            element.classList.add('col-md-3');
        });
    }

});