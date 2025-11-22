// src/app/Services/contact.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ContactInfo, SocialLink, DepartmentContact } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contactInfo: ContactInfo = {
    address: 'كلية الحاسبات والمعلومات - جامعة الأقصر - العوامية - محافظة الأقصر - جمهورية مصر العربية',
    phone: ['+20 95 238 4555', '+20 95 238 4556'],
    fax: '+20 95 238 4557',
    email: 'info@fci.luxor.edu.eg',
    workingHours: 'من الأحد إلى الخميس: من ٩:٠٠ صباحًا حتى ٤:٠٠ مساءً',
    googleMapsLink: 'https://maps.app.goo.gl/YourLuxorUniversityLink' // غير الرابط لما يكون جاهز
  };

  private socialLinks: SocialLink[] = [
    { platform: 'فيسبوك', url: 'https://facebook.com/FCI.LuxorUniversity', icon: 'pi pi-facebook' },
    { platform: 'تويتر (إكس)', url: 'https://twitter.com/FCI_Luxor', icon: 'pi pi-twitter' },
    { platform: 'لينكدإن', url: 'https://linkedin.com/school/fci-luxor', icon: 'pi pi-linkedin' },
    { platform: 'يوتيوب', url: 'https://youtube.com/@FCILuxor', icon: 'pi pi-youtube' },
    { platform: 'إنستغرام', url: 'https://instagram.com/fci_luxor', icon: 'pi pi-instagram' }
  ];

  private departments: DepartmentContact[] = [
    { 
      name: 'مكتب السيد الأستاذ الدكتور/ عميد الكلية', 
      phone: '+20 95 238 4555 - تحويلة 101', 
      email: 'dean@fci.luxor.edu.eg', 
      location: 'المبنى الرئيسي - الدور الثاني' 
    },
    { 
      name: 'وكيل الكلية لشئون التعليم والطلاب', 
      phone: '+20 95 238 4555 - تحويلة 102', 
      email: 'vdean.education@fci.luxor.edu.eg',
      location: 'المبنى الرئيسي - الدور الثاني'
    },
    { 
      name: 'وكيل الكلية للدراسات العليا والبحوث', 
      phone: '+20 95 238 4555 - تحويلة 103', 
      email: 'vdean.research@fci.luxor.edu.eg',
      location: 'المبنى الرئيسي - الدور الثاني'
    },
    { 
      name: 'إدارة شئون الطلاب', 
      phone: '+20 95 238 4555 - تحويلة 200', 
      email: 'students@fci.luxor.edu.eg',
      location: 'مبنى شئون الطلاب'
    },
    { 
      name: 'وحدة تقنية المعلومات والشبكات', 
      phone: '+20 95 238 4555 - تحويلة 300', 
      email: 'it.support@fci.luxor.edu.eg',
      location: 'مبنى الوحدات التقنية'
    },
    { 
      name: 'وحدة ضمان الجودة والاعتماد', 
      email: 'qa@fci.luxor.edu.eg',
      location: 'المبنى الإداري'
    }
  ];

  getContactInfo(): Observable<ContactInfo> {
    return of(this.contactInfo);
  }

  getSocialLinks(): Observable<SocialLink[]> {
    return of(this.socialLinks);
  }

  getDepartmentContacts(): Observable<DepartmentContact[]> {
    return of(this.departments);
  }
}