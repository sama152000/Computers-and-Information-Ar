// src/app/services/units.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Unit, UnitSection } from '../model/unit.model';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  private units: Unit[] = [
    {
      id: 'quality-assurance',
      name: 'وحدة ضمان الجودة والاعتماد',
      vision: 'تسعى وحدة ضمان الجودة إلى تحقيق الريادة على المستوى المحلي والإقليمي في نشر ثقافة الجودة والتحسين المستمر لأداء الجامعة، بهدف الوصول إلى التميز.',
      mission: 'تختص وحدة ضمان الجودة بالكلية بنشر وترسيخ ثقافة التطوير المستمر في العمليات التعليمية والبحث العلمي وخدمة المجتمع وفقًا لمعايير الهيئة القومية لضمان جودة التعليم والاعتماد (NAQAAE).',
      objectives: [
        'إنشاء نظام داخلي لضمان الجودة وتطبيقه بشكل منظم',
        'بناء الثقة مع الطلاب وأولياء الأمور وجميع الأطراف المعنية',
        'توفير بيئة تعليمية داعمة ومحفزة',
        'توفير بيئة بحثية مناسبة ومشجعة على الإبداع',
        'نشر ثقافة الجودة بين جميع أعضاء الكلية',
        'تفعيل دور الأقسام العلمية في عمليات الجودة',
        'توفير إطار عمل للتحسين المستمر'
      ],
      supervisor: {
        name: 'د/ محمد علي فؤاد',
        position: 'مدير وحدة ضمان الجودة والاعتماد'
      },
      teachingStaff: [
        {
          name: 'د/ محمد علي فؤاد',
          position: 'مدير وحدة ضمان الجودة والاعتماد'
        }
      ],
      teachingAssistants: [],
      administrativeStaff: []
    },
    {
      id: 'measurement-evaluation',
      name: 'وحدة القياس والتقويم',
      vision: 'التطوير المستمر لنظم قياس وتقويم الطلاب بالكلية لرفع الكفاءة العلمية والتنافسية للخريجين في المجتمع المدني.',
      mission: 'تسعى وحدة القياس والتقويم إلى المساهمة الفعّالة في تطوير جميع جوانب العملية التعليمية – وبخاصة الامتحانات – من خلال جهود منهجية قائمة على الأدلة والمؤشرات.',
      objectives: [
        'نشر الوعي بمفهوم وأهمية القياس والتقويم داخل الكلية',
        'تطوير وتحسين آليات تقويم الطلاب باستمرار',
        'إعداد دلائل ومعايير للتقويم',
        'تدريب أعضاء هيئة التدريس والمعيدين على أساليب التقويم الحديثة',
        'إنشاء بنوك أسئلة وتحديثها دوريًا وفق الأهداف التعليمية',
        'تقديم الدعم الفني للأقسام العلمية',
        'رصد مؤشرات الرضا وتحليلها',
        'مراجعة وإعداد التقارير السنوية عن الأداء',
        'تبني أساليب تقويم تربوية وتكنولوجية حديثة',
        'التقويم المستمر للعملية التعليمية ككل'
      ],
      supervisor: {
        name: 'أ.د/ حسني أحمد عباس',
        position: 'مدير وحدة القياس والتقويم',
        department: 'قسم تكنولوجيا المعلومات',
        phone: '01007478550'
      },
      teachingStaff: [
        {
          name: 'أ.د/ حسني أحمد عباس',
          position: 'مدير وحدة القياس والتقويم',
          department: 'قسم تكنولوجيا المعلومات',
          phone: '01007478550'
        },
        {
          name: 'أ.د/ أماني أشرف سلامة',
          position: 'نائب مدير الوحدة',
          department: 'قسم نظم المعلومات',
          phone: '01112282018'
        },
        { name: 'م/ إبراهيم السيد إبراهيم', department: 'قسم تكنولوجيا المعلومات', phone: '01118919376', position: 'عضو' },
        { name: 'م/ إبراهيم شوقي فرحات', department: 'قسم علوم الحاسب', phone: '01273090528', position: 'عضو' },
        { name: 'م/ محمد فتحي محمد', department: 'قسم علوم الحاسب', phone: '01064679925', position: 'عضو' }
      ],
      teachingAssistants: [],
      administrativeStaff: [
        {
          name: 'الأستاذة/ أسماء ياسين',
          position: 'شئون الطلاب',
          phone: '01016168753'
        }
      ]
    }
  ];

  private unitSections: UnitSection[] = [
    { id: 'about', title: 'عن الوحدة', icon: 'pi pi-info-circle', route: 'about' },
    { id: 'vision', title: 'رؤية الوحدة', icon: 'pi pi-eye', route: 'vision' },
    { id: 'mission', title: 'رسالة الوحدة', icon: 'pi pi-flag', route: 'mission' },
    { id: 'objectives', title: 'أهداف الوحدة', icon: 'pi pi-target', route: 'objectives' },
    { id: 'structure', title: 'الهيكل التنظيمي', icon: 'pi pi-sitemap', route: 'structure' },
    { id: 'staff', title: 'أعضاء الوحدة', icon: 'pi pi-users', route: 'staff' }
  ];

  getAllUnits(): Observable<Unit[]> {
    return of(this.units);
  }

  getUnitById(id: string): Observable<Unit | undefined> {
    return of(this.units.find(u => u.id === id));
  }

  getUnitSections(): Observable<UnitSection[]> {
    return of(this.unitSections);
  }
}