document.addEventListener('DOMContentLoaded', () => {
    let carousel = document.querySelector('.carousel-inner');
    let items = document.querySelectorAll('.carousel-item');
    let prevButton = document.querySelector('.prev');
    let nextButton = document.querySelector('.next');
    let hamburgerBtn = document.getElementById('hamburger-btn');
    let overlay = document.getElementById('overlay');
    let faqButtons = document.querySelectorAll('.faq-button');
    let currentIndex = 1;
    let cross_sign = document.querySelector('.menu-cross');
    
    function updateCarousel() {
        const itemWidth = items[currentIndex].offsetWidth;
        const translateXValue = -currentIndex * itemWidth + (itemWidth / 4);
        
        for (let i = 0; i < items.length; i++) {
            items[i].style.transform = `translateX(${translateXValue}px)`;
        }
        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex === items.length - 1;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });


    updateCarousel();


  

    faqButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var queryWrapper = button.closest('.query-wrapper');
            var answer = queryWrapper.querySelector('p');
            var isOpen = queryWrapper.classList.contains('open');

            // Close all open FAQ items
            document.querySelectorAll('.query-wrapper').forEach(function(item) {
                var answer = item.querySelector('p');
                item.classList.remove('open');
                answer.style.height = '0px';
                item.querySelector('.open-button').style.display = 'inline';
                item.querySelector('.close-button').style.display = 'none';
            });

            // Toggle the current FAQ item
            if (!isOpen) {
                queryWrapper.classList.add('open');
                var answerHeight = answer.scrollHeight;
                answer.style.height = answerHeight + 'px';
                button.querySelector('.open-button').style.display = 'none';
                button.querySelector('.close-button').style.display = 'inline';
            }
        });
    });
    

    hamburgerBtn.addEventListener('click', function() {
        console.log("kkk")
        overlay.classList.toggle('active');
        console.log(overlay)
    });

    overlay.addEventListener('click', function(event) {
        console.log("lll")
        if (event.target === overlay || event.target.tagName === 'A') {
            overlay.classList.remove('active');
        }
    });
    document.querySelectorAll(".nav-item").forEach(n => n.addEventListener(
        "click", () => {
            console.log("lll")
            overlay.classList.remove('active');
        }
    ))

    cross_sign.addEventListener('click', () => {
        overlay.classList.remove('active');
    })
});
