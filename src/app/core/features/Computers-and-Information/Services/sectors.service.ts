// src/app/services/sectors.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Sector, SectorSection } from '../model/sector.model';

@Injectable({
  providedIn: 'root'
})
export class SectorsService {

  private sectors: Sector[] = [
    {
      id: 'is',
      name: 'قسم نظم المعلومات',
      description: 'يُعد قسم نظم المعلومات الركيزة الأساسية للتحول الرقمي والأتمتة وعلوم البيانات وهندسة المعرفة ونظم دعم القرار والمنصات الإدارية المؤسسية، ومجموعة واسعة من نظم المعلومات التطبيقية في القطاعات المختلفة.',
      establishmentYear: undefined,
      headOfDepartment: {
        name: 'أ.د/ أماني أشرف سلامة',
        position: 'مشرفة قسم نظم المعلومات',
        email: 'amani.salama@fci.luxor.edu.eg',
        office: undefined
      },
      vision: 'يسعى قسم نظم المعلومات إلى أن يكون رائدًا على مستوى مصر ومتميزًا في تقديم تعليم عالمي المستوى يواكب تطور علوم نظم المعلومات، مع تقديم إسهامات بحثية مبتكرة ودعم الأهداف الاستراتيجية للكلية والوطن.',
      mission: 'توفير بيئة تعليمية متقدمة غنية بالخدمات الأكاديمية والتكنولوجية الحديثة، ملتزمة بالجودة وتطوير المعرفة والإبداع في مجال نظم المعلومات، والوصول إلى التميز الأكاديمي والبحثي، وتنمية مهارات الطلاب المهنية ليصبحوا قادرين على مواجهة التحديات الحديثة والمنافسة في أسواق العمل.',
      objectives: [
        'إعداد خريجين مؤهلين تأهيلاً عاليًا في نظم المعلومات قائم على أسس نظرية قوية ومنهجيات عملية',
        'إجراء بحوث علمية وتطبيقية متميزة تتماشى مع رؤية مصر 2030',
        'دعم القطاعات الحكومية والتجارية من خلال برامج التدريب والاستشارات الفنية'
      ],
      researchAreas: [
        'نظم دعم اتخاذ القرار',
        'إدارة المعرفة',
        'النظم المؤسسية',
        'تنقيب البيانات واكتشاف المعرفة',
        'نظم قواعد البيانات',
        'ذكاء الأعمال'
      ],
      programs: ['برنامج نظم المعلومات'],
      labs: [],
      staff: [
        { name: 'أ.د/ أماني أشرف سلامة', position: 'مشرفة القسم' },
        { name: 'د/ محمد علي فؤاد', position: 'مدرس' },
        { name: 'د/ موسى الخضر حسني', position: 'مدرس' },
        { name: 'م/ جهاد سلطان', position: 'معيد' }
      ],
      contactInfo: {
        email: 'is@fci.luxor.edu.eg',
        phone: undefined,
        location: 'كلية الحاسبات والمعلومات - جامعة الأقصر'
      }
    },
    {
      id: 'it',
      name: 'قسم تكنولوجيا المعلومات',
      description: 'يركز القسم على الشبكات، الأمن السيبراني، تطوير تطبيقات الويب والموبايل، إنترنت الأشياء، الحوسبة السحابية، وإدارة البنية التحتية التقنية.',
      headOfDepartment: {
        name: 'أ.د/ حسني أحمد عباس',
        position: 'منسق قسم تكنولوجيا المعلومات',
        email: 'hosny.abbas@fci.luxor.edu.eg'
      },
      vision: 'التطوير المستمر في تعليم تكنولوجيا المعلومات، ورفع كفاءة الأداء المؤسسي، وتأهيل الخريجين للمنافسة عالميًا، وتعظيم دور خدمة المجتمع والتنمية المستدامة.',
      mission: 'تخريج كوادر مؤهلة تأهيلاً عاليًا في تكنولوجيا المعلومات، مع تحديث البرامج باستمرار لتواكب المستجدات العالمية، وحل مشاكل المجتمع الفعلية من خلال مناهج متميزة وبحوث عالية الجودة.',
      objectives: [
        'إعداد متخصصين في تكنولوجيا المعلومات والشبكات والأمن السيبراني',
        'إجراء بحوث تطبيقية ذات أثر مجتمعي مباشر',
        'تقديم استشارات فنية ودبلومات مهنية',
        'التعاون مع الصناعة لتوطين البرمجيات والتدريب'
      ],
      researchAreas: [
        'الحوسبة السحابية والضبابية',
        'إنترنت الأشياء (IoT)',
        'الأمن السيبراني والتحقيق الجنائي الرقمي',
        'الحوسبة المتنقلة',
        'تحليل البيانات الضخمة',
        'الشبكات الذكية',
        'تقنية البلوك تشين'
      ],
      programs: ['برنامج تكنولوجيا المعلومات'],
      staff: [
        { name: 'أ.د/ حسني أحمد عباس', position: 'منسق القسم', email: 'hosny.abbas@fci.luxor.edu.eg' },
        { name: 'د/ همام محمد محمد', position: 'مدرس', email: 'hammam_abdelaal@fci.luxor.edu.eg' },
        { name: 'م/ إبراهيم السيد إبراهيم', position: 'مدرس مساعد', email: 'ibrahim.elsayed@fci.luxor.edu.eg' }
      ],
      contactInfo: {
        email: 'it@fci.luxor.edu.eg',
        phone: undefined,
        location: 'حرم جامعة الأقصر'
      }
    },
    {
      id: 'quality',
      name: 'وحدة ضمان الجودة والاعتماد',
      description: 'مسئولة عن نشر ثقافة التحسين المستمر في التعليم والبحث العلمي وخدمة المجتمع وفقًا لمعايير الهيئة القومية لضمان جودة التعليم والاعتماد (NAQAAE).',
      headOfDepartment: {
        name: 'د/ محمد علي فؤاد',
        position: 'مدير وحدة ضمان الجودة'
      },
      vision: 'تحقيق الريادة على المستوى المحلي والإقليمي في نشر ثقافة الجودة والتحسين المستمر للوصول إلى التميز.',
      mission: 'ترسيخ ثقافة التطوير المستمر لإعداد الكلية للاعتماد والمساهمة في التنمية المستدامة للمجتمع.',
      objectives: [
        'إنشاء نظام داخلي لضمان الجودة',
        'بناء الثقة مع كل الأطراف المعنية',
        'توفير بيئات تعليمية وبحثية داعمة',
        'نشر ثقافة الجودة بين جميع أعضاء الكلية'
      ],
      contactInfo: { email: 'quality@fci.luxor.edu.eg', phone: undefined, location: undefined }
    },
    {
      id: 'evaluation',
      name: 'وحدة القياس والتقويم',
      description: 'تعمل على تطوير نظم تقويم وامتحانات حديثة وعادلة ومدعومة بالتكنولوجيا للطلاب.',
      headOfDepartment: {
        name: 'أ.د/ حسني أحمد عباس',
        position: 'مدير الوحدة',
        email: 'hosny.abbas@fci.luxor.edu.eg'
      },
      vision: 'التطوير المستمر لنظم التقويم لرفع تنافسية الخريجين.',
      mission: 'تحويل عملية التقويم إلى عملية تعاونية عادلة ومؤثرة تتماشى مع معايير الجودة.',
      objectives: [
        'تحديث بنوك الأسئلة وفقًا للأهداف التعليمية المستهدفة (ILOs)',
        'تدريب أعضاء هيئة التدريس على أساليب التقويم الحديثة',
        'أتمتة الامتحانات والتصحيح',
        'رصد الرضا وإعداد التقارير السنوية'
      ],
      contactInfo: { email: 'evaluation@fci.luxor.edu.eg' }
    }
  ];

  private sectorSections: SectorSection[] = [
    { id: 'about', title: 'عن القطاع', icon: 'pi pi-info-circle', route: 'about' },
    { id: 'vision', title: 'الرؤية والرسالة', icon: 'pi pi-eye', route: 'vision' },
    { id: 'objectives', title: 'الأهداف', icon: 'pi pi-target', route: 'objectives' },
    { id: 'research', title: 'مجالات البحث', icon: 'pi pi-flask', route: 'research' },
    { id: 'programs', title: 'البرامج', icon: 'pi pi-graduation-cap', route: 'programs' },
    { id: 'staff', title: 'الكوادر', icon: 'pi pi-users', route: 'staff' },
    { id: 'contact', title: 'تواصل معنا', icon: 'pi pi-phone', route: 'contact' }
  ];

  getAllSectors(): Observable<Sector[]> {
    return of(this.sectors);
  }

  getSectorById(id: string): Observable<Sector | undefined> {
    return of(this.sectors.find(s => s.id === id));
  }

  getSectorSections(): Observable<SectorSection[]> {
    return of(this.sectorSections);
  }
}