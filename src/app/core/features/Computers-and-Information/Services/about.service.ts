import { Injectable } from '@angular/core';
import { AboutTabData, DeanMessage, VisionMission, Objective, AdministrativeMember } from '../model/about.model';

@Injectable({
  providedIn: 'root'
})
export class AboutService {
  private aboutData: AboutTabData = {
    deanMessage: {
      name: 'أ.د/ أسامة أبو النصر',
      title: 'عميد الكلية',
      message: `"في عصر تسيطر عليه التكنولوجيا والابتكار، مهمتنا مش بس نعلم الطلاب.. مهمتنا نربي جيل يفكر، يبدع، ويقدر يقود المستقبل الرقمي. كلية الحاسبات والمعلومات وقفة في المنطقة اللي بتلتقي فيها العقول بالخوارزميات، وبين كل سطر كود ممكن يغير وش العالم. احنا مش بننقل معلومات بس.. احنا بنصنع مفكرين نقديين وحلالين مشاكل، جاهزين يتركوا بصمة حقيقية في المجتمع. التزامنا بيمتد برا قاعات المحاضرات عشان نبني بيئة بحثية وتعاونية وأخلاقية تخلي خريجينا قادرين علي تغيير حياة الناس للأفضل."`,
      photoUrl: './assets/icon.jpg'
    },
    visionMission: {
      vision: 'نكون رواد في تعليم علوم الحاسب والبحث العلمي، نساهم في نمو تكنولوجي مستدام، ونبقى مرجع معترف بيه على المستوى المحلي والعالمي في تخريج كفاءات تقود التحول الرقمي.',
      mission: 'نوفر للطلاب معرفة شاملة، إبداع، ومسؤولية أخلاقية عالية عشان يقودوا صناعة تكنولوجيا المعلومات، نجري أبحاث رائدة، ونكون محرك للتقدم التكنولوجي في مجتمعنا.'
    },
    objectives: [
      {
        id: 1,
        title: 'التميز الأكاديمي',
        description: 'نقدم تعليم عالي الجودة في علوم الحاسب وتكنولوجيا المعلومات من خلال مناهج متطورة وأساتذة على أعلى مستوى.',
        icon: 'pi pi-graduation-cap'
      },
      {
        id: 2,
        title: 'البحث والابتكار',
        description: 'نشجع وننفذ أبحاث علمية تحل مشاكل حقيقية وتساهم في تطوير التكنولوجيا.',
        icon: 'pi pi-search'
      },
      {
        id: 3,
        title: 'شراكات مع الصناعة',
        description: 'نبني علاقات قوية مع شركات التقنية الكبرى عشان نضمن تخريج طلاب جاهزين لسوق العمل وفرص تدريب عملية.',
        icon: 'pi pi-building'
      },
      {
        id: 4,
        title: 'تنمية شاملة للطلاب',
        description: 'نرعى الطلاب بشكل كامل عشان يطلعوا محترفين متكاملين مهنيًا وإنسانيًا، قوى في المهارات الفنية والشخصية.',
        icon: 'pi pi-users'
      },
      {
        id: 5,
        title: 'خدمة المجتمع',
        description: 'نساهم في المجتمع من خلال نقل التكنولوجيا، الاستشارات، والبرامج التدريبية للمنطقة المحيطة.',
        icon: 'pi pi-share-alt'
      },
      {
        id: 6,
        title: 'تكنولوجيا أخلاقية',
        description: 'نغرس مبادئ الأخلاق والمسؤولية المجتمعية في كل حل تكنولوجي نطوره أو نستخدمه.',
        icon: 'pi pi-shield'
      }
    ],
    administrativeStructure: [
      {
        id: 1,
        name: 'أ.د/ أسامة أبو النصر',
        position: 'عميد الكلية',
        photoUrl: './assets/icon.jpg',
        department: 'إدارة الكلية'
      },
      {
        id: 2,
        name: 'أ.د/ إبراهيم حامد',
        position: 'وكيل الكلية لشئون التعليم والطلاب',
        photoUrl: './assets/icon.jpg',
        department: 'قطاع التعليم والطلاب'
      },
      {
        id: 3,
        name: 'أ.د/ محمد عبد الحميد محمد',
        position: 'وكيل الكلية للدراسات العليا والبحوث',
        photoUrl: './assets/icon.jpg',
        department: 'قطاع الدراسات العليا والبحوث'
      },
      {
        id: 4,
        name: 'أ.د/ قرشي سعدي',
        position: 'وكيل الكلية لشئون خدمة المجتمع وتنمية البيئة',
        photoUrl: './assets/icon.jpg',
        department: 'قطاع خدمة المجتمع'
      },
      {
        id: 5,
        name: 'د/ رئيس قسم علوم الحاسب',
        position: 'رئيس قسم علوم الحاسب',
        photoUrl: './assets/icon.jpg',
        department: 'قسم علوم الحاسب'
      },
      {
        id: 6,
        name: 'د/ رئيس قسم تكنولوجيا المعلومات',
        position: 'رئيس قسم تكنولوجيا المعلومات',
        photoUrl: './assets/icon.jpg',
        department: 'قسم تكنولوجيا المعلومات'
      }
    ]
  };

  getDeanMessage(): DeanMessage {
    return this.aboutData.deanMessage;
  }

  getVisionMission(): VisionMission {
    return this.aboutData.visionMission;
  }

  getObjectives(): Objective[] {
    return this.aboutData.objectives;
  }

  getAdministrativeStructure(): AdministrativeMember[] {
    return this.aboutData.administrativeStructure;
  }

  getAllAboutData(): AboutTabData {
    return this.aboutData;
  }
}