class Carousel {
    constructor(container) {
        this.container = container;
        this.slides = container.querySelector('.slides');
        this.slideWidth = this.slides.querySelector('.slide').offsetWidth;
        this.currentSlide = 0;
        this.dots = Array.from(container.querySelectorAll('.dot'));
        this.prevButton = container.querySelector('.prev');
        this.nextButton = container.querySelector('.next');

        this.prevButton.addEventListener('click', this.prevSlide.bind(this));
        this.nextButton.addEventListener('click', this.nextSlide.bind(this));
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        this.autoAdvance();
    }

    goToSlide(index) {
        this.currentSlide = index;
        this.updateSlidePosition();
        this.updateActiveDot();
    }

    prevSlide() {
        if (this.currentSlide === 0) {
            this.currentSlide = this.dots.length - 1;
        } else {
            this.currentSlide--;
        }
        this.updateSlidePosition();
        this.updateActiveDot();
    }

    nextSlide() {
        if (this.currentSlide === this.dots.length - 1) {
            this.currentSlide = 0;
        } else {
            this.currentSlide++;
        }
        this.updateSlidePosition();
        this.updateActiveDot();
    }

    updateSlidePosition() {
        const newPosition = -this.currentSlide * this.slideWidth;
        this.slides.style.transform = `translateX(${newPosition}px)`;
    }

    updateActiveDot() {
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentSlide);
        });
    }

    autoAdvance() {
        setInterval(this.nextSlide.bind(this), 5000);
    }
}

const carousels = Array.from(document.querySelectorAll('.carousel'));
carousels.forEach(carousel => new Carousel(carousel));

export default Carousel;
