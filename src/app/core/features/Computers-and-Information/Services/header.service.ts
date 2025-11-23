import { Injectable, Inject } from '@angular/core';
import { Observable, of, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { HeaderData, NavigationItem } from '../model/header.model';
import { DepartmentsService } from './departments.service';
import { UnitsService } from './units.service';
import { ServicesService } from './services.service';
import { SectorsService } from './sectors.service';
import { ProgramsService } from './programs.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {
  constructor(
    private departmentsService: DepartmentsService,
    @Inject(UnitsService) private unitsService: UnitsService,
    private servicesService: ServicesService,
    private sectorsService: SectorsService,
    private programsService: ProgramsService
  ) {}

  private headerData: HeaderData = {
    logo: {
      url: './assets/logo.jpg',
      alt: 'كلية الحاسبات والمعلومات - جامعة الأقصر',
      route: '/'
    },
    navigation: [
      {
        id: 1,
        label: 'الرئيسية',
        route: 'home'
      },
      {
        id: 2,
        label: 'عن الكلية',
        route: 'about',
        children: [
          {
            id: 20,
            label: 'الرؤية والرسالة',
            route: 'about',
            fragment: 'vision-mission',
            queryParams: { tab: 'vision-mission' },
            icon: 'pi pi-lightbulb'
          },
          {
            id: 21,
            label: 'كلمة العميد',
            route: 'about',
            fragment: 'dean-message',
            queryParams: { tab: 'dean-message' },
            icon: 'pi pi-microphone'
          },
          {
            id: 22,
            label: 'الأهداف',
            route: 'about',
            fragment: 'objectives',
            queryParams: { tab: 'objectives' },
            icon: 'pi pi-user'
          },
          {
            id: 23,
            label: 'الهيكل الإداري',
            route: 'about',
            fragment: 'admin-structure',
            queryParams: { tab: 'admin-structure' },
            icon: 'pi pi-sitemap'
          }
        ]
      },
      {
        id: 3,
        label: 'البرامج الدراسية',
        route: 'programs'
      },
      {
        id: 4,
        label: 'القطاعات',
        route: 'sectors'
      },
      {
        id: 5,
        label: 'الخدمات',
        route: 'services'
      },
      {
        id: 6,
        label: 'الأخبار والفعاليات',
        route: 'news'
      },
      {
        id: 7,
        label: 'الوحدات والمراكز',
        route: 'units'
      },
      {
        id: 8,
        label: 'الأقسام العلمية',
        route: 'departments'
      },
      {
        id: 9,
        label: 'اتصل بنا',
        route: 'contact-us'
      }
    ],
    languages: [
      { code: 'ar', name: 'العربية', flag: '🇸🇦' },
      { code: 'en', name: 'English', flag: '🇺🇸' }
    ],
    
    searchEnabled: true
  };

  getHeaderData(): Observable<HeaderData> {
    return of(this.headerData);
  }

  getNavigationItems(): Observable<NavigationItem[]> {
    return forkJoin([
      of(this.headerData.navigation),
      this.departmentsService.getAllDepartments(),
      this.unitsService.getAllUnits(),
      this.servicesService.getAllServices(),
      this.sectorsService.getAllSectors(),
      this.programsService.getAllPrograms()
    ]).pipe(
      map(([navigation, departments, units, services, sectors, programs]) => {
        // الأقسام العلمية
        const deptItem = navigation.find(item => item.label === 'الأقسام العلمية');
        if (deptItem) {
          deptItem.children = departments.map((dept, index) => ({
            id: 1000 + index,
            label: dept.name,
            route: `departments/${dept.id}`,
            icon: 'pi pi-book'
          }));
        }

        // الوحدات والمراكز
        const unitsItem = navigation.find(item => item.label === 'الوحدات والمراكز');
        if (unitsItem) {
          unitsItem.children = units.map((unit, index) => ({
            id: 2000 + index,
            label: unit.name,
            route: `units/${unit.id}`,
            icon: 'pi pi-cog'
          }));
        }

        // الخدمات
        const servicesItem = navigation.find(item => item.label === 'الخدمات');
        if (servicesItem) {
          servicesItem.children = services.map((service, index) => ({
            id: 3000 + index,
            label: service.name,
            route: `services/${service.id}`,
            icon: 'pi pi-wrench'
          }));
        }

        // القطاعات
        const sectorsItem = navigation.find(item => item.label === 'القطاعات');
        if (sectorsItem) {
          sectorsItem.children = sectors.map((sector, index) => ({
            id: 4000 + index,
            label: sector.name,
            route: `sectors/${sector.id}`,
            icon: 'pi pi-building'
          }));
        }

        // البرامج الدراسية
        const programsItem = navigation.find(item => item.label === 'البرامج الدراسية');
        if (programsItem) {
          programsItem.children = programs.map((program, index) => ({
            id: 5000 + index,
            label: program.name,
            route: `programs/${program.id}`,
            icon: 'pi pi-graduation-cap'
          }));
        }

        return navigation;
      })
    );
  }

  getLogo(): Observable<HeaderData['logo']> {
    return of(this.headerData.logo);
  }

  isSearchEnabled(): Observable<boolean> {
    return of(this.headerData.searchEnabled);
  }
}