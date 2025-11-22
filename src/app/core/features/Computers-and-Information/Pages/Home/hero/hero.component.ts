import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

interface HeroSlide {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  autoplayInterval: any;

  slides: HeroSlide[] = [
    {
      id: 1,
      title: 'مرحبًا بكم في كلية الحاسبات والمعلومات',
      subtitle: 'تمكين الابتكار من خلال التكنولوجيا والبحث العلمي',
      image: 'assets/slide1.jpg'
    },
    {
      id: 2,
      title: 'اكتشف برامجنا الدراسية',
      subtitle: 'برامج البكالوريوس والدراسات العليا وفرص البحث العلمي',
      image: 'assets/slide2.jpg'
    },
    {
      id: 3,
      title: 'تعلم عملي متطور',
      subtitle: 'معامل حديثة ومشاريع تطبيقية واقعية',
      image: 'assets/slide3.jpg'
    },
    {
      id: 4,
      title: 'ابتكر.. صمم.. أبدع',
      subtitle: 'طلابنا يصنعون مستقبل علوم الحاسب والتكنولوجيا',
      image: 'assets/slide4.jpg'
    }
  ];

  ngOnInit() {
    this.startAutoplay();
  }

  ngOnDestroy() {
    this.stopAutoplay();
  }

  startAutoplay() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopAutoplay() {
    if (this.autoplayInterval) {
      clearInterval(this.autoplayInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.slides.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.stopAutoplay();
    setTimeout(() => this.startAutoplay(), 3000);
  }
}