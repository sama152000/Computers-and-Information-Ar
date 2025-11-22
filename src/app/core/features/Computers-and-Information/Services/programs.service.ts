// src/app/services/programs.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Program, ProgramSection, HomeProgram } from '../model/program.model';

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {

  private programs: Program[] = [
    {
      id: 'cs-general',
      name: 'برنامج علوم الحاسب',
      degree: 'بكالوريوس علوم الحاسب',
      duration: '4 سنوات دراسية',
      creditHours: 144,
      department: 'قسم علوم الحاسب',
      startYear: 1995,
      accreditation: 'معتمد من المجلس الأعلى للجامعات',
      description: 'البرنامج الرئيسي والأقدم بالكلية، يقدم تعليمًا شاملًا في علوم الحاسب النظرية والتطبيقية، الخوارزميات، تطوير البرمجيات، والأنظمة المتقدمة.',
      vision: 'الريادة في تعليم علوم الحاسب والبحث العلمي بصعيد مصر.',
      mission: 'تخريج كفاءات متميزة قادرة على الإبداع والمنافسة عالميًا في صناعة البرمجيات والبحث العلمي.',
      objectives: [
        'بناء أسس نظرية قوية في علوم الحاسب',
        'تنمية مهارات البرمجة المتقدمة وحل المشكلات',
        'إعداد الخريجين للدراسات العليا والبحث العلمي',
        'تلبية احتياجات سوق العمل المحلي والإقليمي'
      ],
      admissionRequirements: [
        'شهادة الثانوية العامة (شعبة علمي رياضة)',
        'الحد الأدنى للقبول يُحدد سنويًا من مكتب التنسيق',
        'اجتياز اختبارات القدرات بالكلية (إن وجدت)'
      ],
      courses: [
        'هياكل البيانات والخوارزميات',
        'أنظمة التشغيل',
        'هندسة الحاسب',
        'نظم قواعد البيانات',
        'أساسيات الذكاء الاصطناعي',
        'هندسة البرمجيات',
        'تصميم المترجمات'
      ],
      coordinator: {
        name: 'أ.د/ محمد عبد الرحمن السيد',
        position: 'رئيس قسم علوم الحاسب',
        email: 'mohamed.abdelrahman@fci.luxor.edu.eg',
      },
      image: 'assets/img1.jpg',
      icon: 'pi pi-code',
      students: 450
    },
    {
      id: 'ai',
      name: 'برنامج الذكاء الاصطناعي',
      degree: 'بكالوريوس الذكاء الاصطناعي',
      duration: '4 سنوات دراسية',
      creditHours: 140,
      department: 'قسم علوم الحاسب',
      startYear: 2024,
      accreditation: 'برنامج جديد - تحت إجراءات الاعتماد',
      description: 'برنامج حديث أُطلق عام 2024 يركز على الذكاء الاصطناعي، التعلم الآلي، التعلم العميق، رؤية الحاسب، ومعالجة اللغة الطبيعية.',
      vision: 'أن نكون روادًا في تعليم الذكاء الاصطناعي بصعيد مصر ومركزًا للبحوث التطبيقية في هذا المجال.',
      mission: 'تخريج متخصصين في الذكاء الاصطناعي قادرين على تطوير أنظمة ذكية لحل المشكلات الواقعية في الصحة والتعليم والزراعة والصناعة.',
      objectives: [
        'إتقان أساسيات الذكاء الاصطناعي والتعلم الآلي',
        'التطبيق العملي للتعلم العميق والشبكات العصبية',
        'تطوير حلول ذكاء اصطناعي في معالجة اللغة العربية',
        'تعزيز ممارسات الذكاء الاصطناعي الأخلاقي والمسؤول'
      ],
      admissionRequirements: [
        'شهادة الثانوية العامة (علمي رياضة)',
        'درجة عالية في الرياضيات واللغة الإنجليزية',
        'اجتياز المقابلة الشخصية بالكلية'
      ],
      courses: [
        'مدخل إلى الذكاء الاصطناعي',
        'التعلم الآلي',
        'التعلم العميق والشبكات العصبية',
        'معالجة اللغة الطبيعية',
        'رؤية الحاسب',
        'أخلاقيات الذكاء الاصطناعي والمجتمع',
        'تحليل البيانات الضخمة'
      ],
      coordinator: {
        name: 'د/ أحمد حسن محمود',
        position: 'منسق برنامج الذكاء الاصطناعي',
        email: 'ahmed.hassan@fci.luxor.edu.eg'
      },
      image: 'assets/img2.jpg',
      icon: 'pi pi-brain',
      students: 120
    },
    {
      id: 'is',
      name: 'برنامج نظم المعلومات',
      degree: 'بكالوريوس نظم المعلومات',
      duration: '4 سنوات دراسية',
      creditHours: 142,
      department: 'قسم نظم المعلومات',
      startYear: 2008,
      accreditation: 'معتمد',
      description: 'يركز على تصميم وتطوير نظم المعلومات المؤسسية، تحليل الأعمال، إدارة قواعد البيانات، وحلول التحول الرقمي.',
      vision: 'التميز في إعداد متخصصين في نظم المعلومات وتكنولوجيا الأعمال.',
      mission: 'تخريج محترفين قادرين على تحليل الاحتياجات وبناء نظم معلومات متكاملة تدعم اتخاذ القرار المؤسسي.',
      objectives: [
        'فهم العمليات التجارية واحتياجات المعلومات',
        'تصميم وتنفيذ نظم قواعد البيانات',
        'تطوير حلول تخطيط موارد المؤسسات (ERP)',
        'تطبيق ذكاء الأعمال وتحليل البيانات'
      ],
      courses: [
        'تحليل وتصميم النİTم',
        'نظم إدارة قواعد البيانات',
        'النظم المؤسسية',
        'ذكاء الأعمال',
        'التجارة الإلكترونية',
        'إدارة المشروعات'
      ],
      coordinator: {
        name: 'أ.د/ أماني أشرف سلامة',
        position: 'مشرفة قسم نظم المعلومات',
        email: 'amani.ashraf@fci.luxor.edu.eg'
      },
      image: 'assets/img3.jpg',
      icon: 'pi pi-chart-line',
      students: 200
    },
    {
      id: 'it',
      name: 'برنامج تكنولوجيا المعلومات',
      degree: 'بكالوريوس تكنولوجيا المعلومات',
      duration: '4 سنوات دراسية',
      creditHours: 138,
      department: 'قسم تكنولوجيا المعلومات',
      startYear: 2010,
      accreditation: 'معتمد',
      description: 'متخصص في الشبكات، الأمن السيبراني، الحوسبة السحابية، إنترنت الأشياء، وإدارة البنية التحتية التقنية.',
      vision: 'الريادة في تعليم تكنولوجيا المعلومات والأمن السيبراني.',
      mission: 'إعداد محترفين قادرين على تصميم وتنفيذ وتأمين البنى التحتية لتكنولوجيا المعلومات الحديثة.',
      objectives: [
        'إتقان تصميم وإدارة الشبكات',
        'فهم مبادئ الأمن السيبراني والاختراق الأخلاقي',
        'تقنيات الحوسبة السحابية والمحاكاة الافتراضية',
        'إنترنت الأشياء والأنظمة الذكية'
      ],
      courses: [
        'شبكات الحاسب',
        'أمن الشبكات',
        'الحوسبة السحابية',
        'إنترنت الأشياء',
        'تطوير تطبيقات الموبايل',
        'التحقيق الجنائي الرقمي'
      ],
      coordinator: {
        name: 'أ.د/ حسني أحمد عباس',
        position: 'منسق قسم تكنولوجيا المعلومات',
        email: 'hosny.abbas@fci.luxor.edu.eg'
      },
      image: 'assets/img4.jpg',
      icon: 'pi pi-shield',
      students: 180
    }
  ];

  private programSections: ProgramSection[] = [
    { id: 'overview', title: 'نبذة عن البرنامج', icon: 'pi pi-info-circle', route: 'overview' },
    { id: 'vision-mission', title: 'الرؤية والرسالة', icon: 'pi pi-eye', route: 'vision-mission' },
    { id: 'objectives', title: 'الأهداف', icon: 'pi pi-target', route: 'objectives' },
    { id: 'admission', title: 'شروط القبول', icon: 'pi pi-user-plus', route: 'admission' },
    { id: 'courses', title: 'أهم المقررات', icon: 'pi pi-book', route: 'courses' },
    { id: 'coordinator', title: 'منسق البرنامج', icon: 'pi pi-user', route: 'coordinator' }
  ];

  getAllPrograms(): Observable<Program[]> {
    return of(this.programs);
  }

  getProgramsForHome(): Observable<HomeProgram[]> {
    const homePrograms: HomeProgram[] = this.programs.map(p => ({
      id: p.id,
      name: p.name,
      description: p.description,
      duration: p.duration,
      image: p.image || '',
      icon: p.icon || '',
      students: p.students || 0
    }));
    return of(homePrograms);
  }

  getProgramById(id: string): Observable<Program | undefined> {
    return of(this.programs.find(p => p.id === id));
  }

  getProgramSections(): Observable<ProgramSection[]> {
    return of(this.programSections);
  }
}