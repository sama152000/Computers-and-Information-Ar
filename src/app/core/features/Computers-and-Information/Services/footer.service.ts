import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { FooterData, FooterSection, SocialMediaLink, ContactInfo } from '../model/footer.model';

@Injectable({
  providedIn: 'root'
})
export class FooterService {
  private footerData: FooterData = {
    sections: [
      {
        id: 1,
        title: 'روابط سريعة',
        links: [
          { id: 11, label: 'الرئيسية', route: '/' },
          { id: 12, label: 'عن الكلية', route: '/about' },
          { id: 13, label: 'البرامج الدراسية', route: '/programs' },
          { id: 14, label: 'الأخبار والفعاليات', route: '/news' }
        ]
      },
      {
        id: 2,
        title: 'أكاديمي',
        links: [
          { id: 21, label: 'البحث العلمي', route: '/research' },
          { id: 22, label: 'الأبحاث والنشر', route: '/publications' },
          { id: 23, label: 'المكتبة', route: '/library' },
          { id: 24, label: 'بوابة الطلاب', route: '/student-portal' }
        ]
      },
      {
        id: 3,
        title: 'خدمات',
        links: [
          { id: 31, label: 'الدعم الفني', route: '/it-support' },
          { id: 32, label: 'خدمات التوظيف', route: '/career-services' },
          { id: 33, label: 'الخريجين', route: '/alumni' },
          { id: 34, label: 'اتاسوق معنا', route: '/contact' }
        ]
      }
    ],
    socialMedia: [
      {
        id: 1,
        platform: 'فيسبوك',
        url: 'https://www.facebook.com/FCI.LuxorUniversity/',
        icon: 'pi pi-facebook'
      },
      {
        id: 2,
        platform: 'إكس (تويتر سابقاً)',
        url: 'https://twitter.com/FCI_Luxor',
        icon: 'pi pi-twitter'
      },
      {
        id: 3,
        platform: 'لينكدإن',
        url: 'https://linkedin.com/school/fci-luxor',
        icon: 'pi pi-linkedin'
      },
      {
        id: 4,
        platform: 'يوتيوب',
        url: 'https://youtube.com/@FCILuxor',
        icon: 'pi pi-youtube'
      }
    ],
    contactInfo: {
      address: 'كلية الحاسبات والمعلومات - جامعة الأقصر - العوامية - محافظة الأقصر - مصر',
      phone: '+20 95 238 4555',
      email: 'info@fci.luxor.edu.eg',
      workingHours: 'من الأحد إلى الخميس: ٩:٠٠ صباحاً - ٤:٠٠ مساءً'
    },
    copyright: '© ٢٠٢٥ كلية الحاسبات والمعلومات - جامعة الأقصر. جميع الحقوق محفوظة.'
  };

  getFooterData(): Observable<FooterData> {
    return of(this.footerData);
  }

  getFooterSections(): Observable<FooterSection[]> {
    return of(this.footerData.sections);
  }

  getSocialMediaLinks(): Observable<SocialMediaLink[]> {
    return of(this.footerData.socialMedia);
  }

  getContactInfo(): Observable<ContactInfo> {
    return of(this.footerData.contactInfo);
  }

  getCopyright(): Observable<string> {
    return of(this.footerData.copyright);
  }
}