import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Event {
  id: number;
  title: string;
  description: string;
  date: Date;
  time: string;
  location: string;
  image: string;
}

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: Event[] = [
    {
      id: 1,
      title: 'ندوة توعوية: "كيف تحمي جهازك وبياناتك من الاختراق"',
      description: 'نظمت جمعية لوكسور تك (LTS) ندوة توعية في مجال الأمن السيبراني للطلاب برعاية الكلية.',
      date: new Date('2025-11-05'),
      time: '2:00 م - 4:00 م',
      location: 'القاعة الرئيسية',
      image: '/assets/new6.jpg'
    },
    {
      id: 2,
      title: 'نتائج بطولة الكلية لكرة القدم الخماسية',
      description: 'ضمن دعم الكلية المستمر للأنشطة الطلابية، أُقيمت بطولة كرة القدم الخماسية بنجاح.',
      date: new Date('2025-12-01'),
      time: '10:00 ص - 3:00 م',
      location: 'معمل الحاسب 1',
      image: '/assets/new3.jpg'
    },
    {
      id: 3,
      title: 'حفل توزيع جوائز بطولة الكلية لكرة القدم الخماسية',
      description: 'تكريم الفائزين والمشاركين في البطولة الرياضية السنوية ضمن دعم الكلية للأنشطة الطلابية.',
      date: new Date('2026-01-10'),
      time: '9:00 ص - 5:00 م',
      location: 'قاعة الجامعة الكبرى',
      image: '/assets/new3.jpg'
    }
  ];

  ngOnInit() {
    this.observeElements();
  }

  private observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    });

    setTimeout(() => {
      const elements = document.querySelectorAll('.timeline-item');
      elements.forEach(el => observer.observe(el));
    }, 100);
  }
}