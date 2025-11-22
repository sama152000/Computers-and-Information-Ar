// src/app/services/statistics.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Statistic } from '../model/statistics.model';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  private statisticsData: Statistic[] = [
    {
      id: 1,
      value: 1200,
      label: 'طالب وطالبة حاليون',
      description: 'مسجلون في جميع البرامج الدراسية',
      icon: 'pi pi-users'
    },
    {
      id: 2,
      value: 45,
      label: 'معمل حاسب آلي',
      description: 'مجهزة بأحدث التقنيات',
      icon: 'pi pi-desktop'
    },
    {
      id: 3,
      value: 320,
      label: 'مشروع بحثي',
      description: 'جاري تنفيذها ومنتهية',
      icon: 'pi pi-chart-line'
    },
    {
      id: 4,
      value: 150,
      label: 'جائزة ومنحة بحثية',
      description: 'تكريمات وتمويلات حصلت عليها الكلية',
      icon: 'pi pi-star'
    }
  ];

  getStatistics(): Observable<Statistic[]> {
    return of(this.statisticsData);
  }
}