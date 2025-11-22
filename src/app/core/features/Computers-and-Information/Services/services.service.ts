// src/app/services/services.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Service, ServiceSection } from '../model/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private services: Service[] = [
    {
      id: 'training-center',
      name: 'مركز التدريب والتعليم المستمر',
      description: 'يقدم المركز دبلومات مهنية ودورات متخصصة في مختلف مجالات الحاسبات وتكنولوجيا المعلومات لتطوير مهارات الخريجين والعاملين في سوق العمل.',
      vision: 'أن نكون مركزًا رائدًا في تقديم برامج تدريبية عالية الجودة تلبي احتياجات سوق العمل محليًا وإقليميًا.',
      mission: 'توفير برامج تدريبية متميزة باستخدام أحدث التقنيات ومدربين مؤهلين لتعزيز المهارات المهنية والعملية للمتدربين.',
      objectives: [
        'تخريج كفاءات مؤهلة تأهيلاً عاليًا في التقنيات الحديثة',
        'تلبية احتياجات القطاع الحكومي والخاص من الكوادر المدربة',
        'تقديم شهادات مهنية معتمدة',
        'تنظيم ورش عمل ودورات تدريبية متخصصة'
      ],
      servicesOffered: [
        'دبلوم مهني في تطوير الويب',
        'دبلوم الأمن السيبراني',
        'دورة تطوير تطبيقات الموبايل',
        'علوم البيانات والتعلم الآلي',
        'إدارة الشبكات والأمن (CCNA)',
        'التصميم الجرافيكي والوسائط المتعددة',
        'برمجة بايثون والأتمتة',
        'مهارات الحاسب الآلي والميكنة المكتبية'
      ],
      coordinator: {
        name: 'د/ أحمد حسن محمود',
        position: 'مدير المركز',
        department: 'قسم تكنولوجيا المعلومات',
        email: 'ahmed.hassan@fci.luxor.edu.eg',
        phone: '01001234567'
      },
      team: [
        { name: 'م/ سارة محمد علي', position: 'منسقة التدريب', phone: '01123456789' },
        { name: 'م/ خالد علي حسن', position: 'مدرب فني أول', phone: '01234567890' },
        { name: 'م/ دعاء عبد الكريم', position: 'منسقة التسجيل في الدورات', phone: '01551234567' }
      ],
      contactInfo: { 
        email: 'training@fci.luxor.edu.eg', 
        phone: '095-2384777', 
        location: 'المبنى الرئيسي - الدور الثاني - غرفة 205' 
      },
      workingHours: 'من الأحد إلى الخميس: ٩:٠٠ صباحًا - ٤:٠٠ مساءً',
      image: 'assets/services/training-center.jpg'
    },

    {
      id: 'consultation-center',
      name: 'مركز الاستشارات والدعم الفني في تكنولوجيا المعلومات',
      description: 'يقدم استشارات فنية وحلول تكنولوجيا المعلومات للجهات الحكومية والشركات والأفراد في صعيد مصر.',
      vision: 'أن نكون الوجهة الأولى للاستشارات والدعم الفني في تكنولوجيا المعلومات بصعيد مصر.',
      mission: 'تقديم حلول تكنولوجية مبتكرة وفعالة تساهم في التحول الرقمي والتطوير المؤسسي.',
      objectives: [
        'دعم التحول الرقمي في الجهات الحكومية',
        'تطوير نظم معلومات للشركات والمصانع',
        'تقديم خدمات الدعم الفني والصيانة',
        'تدريب العاملين على الأنظمة الحديثة',
        'المساهمة في تطوير صناعة البرمجيات المحلية'
      ],
      servicesOffered: [
        'تصميم وتطوير الأنظمة الإدارية والمالية',
        'تصميم وإدارة قواعد البيانات (Oracle، SQL Server)',
        'تصميم الشبكات وتنفيذها وتقييم الأمان',
        'تطوير المواقع الإلكترونية وتطبيقات الموبايل',
        'عقود الدعم الفني والصيانة السنوية',
        'استشارات استراتيجية التحول الرقمي',
        'تدقيق أمن المعلومات واختبار الاختراق'
      ],
      coordinator: {
        name: 'أ.د/ أماني أشرف سلامة',
        position: 'مديرة المركز',
        department: 'قسم نظم المعلومات',
        email: 'amani.ashraf@fci.luxor.edu.eg',
        phone: '01009876543'
      },
      team: [
        { name: 'م/ إبراهيم السيد', position: 'محلل نظم أول', phone: '01198765432' },
        { name: 'م/ جهاد سلطان', position: 'مهندس شبكات', phone: '01011223344' }
      ],
      contactInfo: { 
        email: 'consult@fci.luxor.edu.eg', 
        phone: '095-2384888', 
        location: 'المبنى الرئيسي - الدور الأرضي - مكتب 105' 
      },
      workingHours: 'من الأحد إلى الخميس: ٨:٠٠ صباحًا - ٥:٠٠ مساءً'
    },

    {
      id: 'student-activities',
      name: 'وحدة الأنشطة الطلابية وخدمة المجتمع',
      description: 'تنظم الأنشطة العلمية والثقافية والفنية والرياضية للطلاب، وتقدم خدمات مجتمعية وحملات توعية.',
      vision: 'بناء طالب واعٍ مبدع ومسؤول اجتماعيًا.',
      mission: 'تنمية مواهب الطلاب ومهاراتهم من خلال أنشطة متنوعة، وتعزيز دور الكلية في خدمة المجتمع.',
      objectives: [
        'تنمية مهارات القيادة والتنظيم لدى الطلاب',
        'تشجيع البحث العلمي والإبداع',
        'تعزيز التواصل المجتمعي والمسؤولية الاجتماعية',
        'تنظيم الفعاليات الثقافية والفنية والرياضية'
      ],
      servicesOffered: [
        'مؤتمرات وندوات علمية',
        'مسابقات البرمجة والذكاء الاصطناعي',
        'مهرجانات ثقافية وفنية',
        'بطولات رياضية (كرة قدم، شطرنج، تنس طاولة)',
        'حملات توعية مجتمعية (الأمن السيبراني، الأخلاقيات الرقمية)',
        'مبادرات تطوعية وزيارات ميدانية',
        'الأندية الطلابية (Luxor Tech Society - LTS، فرع IEEE الطلابي)'
      ],
      coordinator: {
        name: 'م/ محمود سالم أحمد',
        position: 'منسق الأنشطة الطلابية',
        department: 'إدارة رعاية الشباب',
        email: 'activities@fci.luxor.edu.eg',
        phone: '01234567890'
      },
      contactInfo: { 
        email: 'activities@fci.luxor.edu.eg', 
        phone: '095-2384999', 
        location: 'مبنى الأنشطة الطلابية - بجوار البوابة الرئيسية' 
      },
      workingHours: 'يوميًا: ٩:٠٠ صباحًا - ٤:٠٠ مساءً',
      featured: true,
      image: 'assets/services/student-activities.jpg'
    }
  ];

  private serviceSections: ServiceSection[] = [
    { id: 'about', title: 'عن المركز/الوحدة', icon: 'pi pi-info-circle', route: 'about' },
    { id: 'vision-mission', title: 'الرؤية والرسالة', icon: 'pi pi-eye', route: 'vision-mission' },
    { id: 'objectives', title: 'الأهداف', icon: 'pi pi-target', route: 'objectives' },
    { id: 'services', title: 'الخدمات والبرامج', icon: 'pi pi-cog', route: 'services' },
    { id: 'team', title: 'الفريق ومعلومات التواصل', icon: 'pi pi-users', route: 'team' }
  ];

  getAllServices(): Observable<Service[]> {
    return of(this.services);
  }

  getServiceById(id: string): Observable<Service | undefined> {
    return of(this.services.find(s => s.id === id));
  }

  getServiceSections(): Observable<ServiceSection[]> {
    return of(this.serviceSections);
  }
}