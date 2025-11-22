import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// ثوابت لتسهيل الصيانة وتجنب النصوص الثابتة
const ICONS = {
  VISION: 'pi pi-eye',
  MISSION: 'pi pi-flag',
  GOALS: 'pi pi-target'
} as const;

const ROUTES = {
  VISION_MISSION: '/about/vision-mission',
  GOALS: '/about/objectives'
} as const;

interface VisionMissionItem {
  id: number;
  title: string;
  description: string;
  icon: string;
  routes?: string;
}

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './vision-mission.component.html',
  styleUrls: ['./vision-mission.component.css']
})
export class VisionMissionComponent implements OnInit {
  constructor(private router: Router) {}

  visionMissionData: VisionMissionItem[] = [
    {
      id: 1,
      title: 'رؤيتنا',
      description: 'أن نكون كلية رائدة في تعليم الحاسبات والبحث العلمي، تساهم في دفع عجلة الابتكار والتنمية المجتمعية في صعيد مصر والوطن العربي.',
      icon: ICONS.VISION,
      routes: ROUTES.VISION_MISSION
    },
    {
      id: 2,
      title: 'رسالتنا',
      description: 'إعداد جيل متميز من الخريجين مزوَّد بالمعرفة العميقة والمهارات المتقدمة والأخلاقيات المهنية العالية، قادر على المنافسة عالميًا في مجالات التكنولوجيا والبحث العلمي.',
      icon: ICONS.MISSION,
      routes: ROUTES.VISION_MISSION
    },
    {
      id: 3,
      title: 'أهدافنا',
      description: 'تعزيز جودة التعليم، دعم البحث العلمي المتميز، تطوير البرامج الدراسية باستمرار، وتعزيز التعاون مع الصناعة والمؤسسات لخدمة المجتمع وتلبية احتياجات سوق العمل.',
      icon: ICONS.GOALS,
      routes: ROUTES.GOALS
    }
  ];

  ngOnInit() {
    // تفعيل تأثيرات الظهور عند التمرير
    this.observeElements();
  }

  navigateTo(item: VisionMissionItem): void {
    if (item.routes) {
      this.router.navigate([item.routes]);
    }
  }

  private observeElements() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    setTimeout(() => {
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach(el => observer.observe(el));
    }, 100);
  }
}