// src/app/services/news.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsItem, NewsFilter, NewsResponse } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsData: NewsItem[] = [
    {
      id: 101,
      type: 'news',
      title: 'تميّز طلابي في بطولة الشطرنج على مستوى الجامعة',
      description: 'حصد طلاب كلية الحاسبات والمعلومات المركزين الأول والثاني في بطولة الشطرنج الجامعية.',
      content: `تحت رعاية الأستاذة الدكتورة/ صابرين عبد الجليل - رئيس جامعة الأقصر، وبإشراف إدارة رعاية الشباب بالجامعة، حقق طلاب كلية الحاسبات والمعلومات إنجازًا متميزًا بحصدهم المركزين الأول والثاني في بطولة الشطرنج على مستوى الجامعة.

• المركز الأول: الطالب صلاح ياسر صلاح  
• المركز الثاني: الطالب أسامة أحمد محجوب

بهذه المناسبة، تقدّم الأستاذ الدكتور/ أسامة أبو النصر - عميد الكلية، والأستاذ الدكتور/ إبراهيم حامد - وكيل الكلية لشئون التعليم والطلاب، بأصدق التهاني والفخر للطلاب المتميزين، مع جزيل الشكر لفريق رعاية الشباب بالكلية على جهودهم المتميزة في دعم المواهب الطلابية.

نتمنى لأبطالنا مزيدًا من التألق والنجاح، ولكلية الحاسبات والمعلومات دوام الريادة والتميز.`,
      imageUrl: '/assets/new1.jpg',
      date: new Date('2025-03-15'),
      author: 'إدارة الكلية',
      category: 'إنجازات طلابية',
      featured: true,
      tags: ['شطرنج', 'بطولة', 'تميز طلابي', 'رعاية شباب'],
      views: 892
    },

    {
      id: 102,
      type: 'news',
      title: 'مشاركة مجتمعية: زيارة مدرسة الأقصر الإعدادية الجديدة بنات',
      description: 'استقبلت الكلية وفدًا من طالبات مدرسة الأقصر الإعدادية الجديدة بنات للتعرف على تخصصات الكلية ومجالات العمل المستقبلية.',
      content: `استقبلت كلية الحاسبات والمعلومات بجامعة الأقصر وفدًا من طالبات مدرسة الأقصر الإعدادية الجديدة بنات في زيارة تعريفية للتعرف على التخصصات العلمية المختلفة بالكلية ومجالات العمل المستقبلية في مجال الحاسبات وتكنولوجيا المعلومات.

جاءت الزيارة تحت إشراف الأستاذ الدكتور/ قرشي سعدي - وكيل الكلية لشئون خدمة المجتمع وتنمية البيئة، وبالتنسيق مع المهندس/ عبد الرحيم الصادق.

تهدف مثل هذه الزيارات إلى تعزيز التواصل بين الجامعة والمجتمع المحلي، وتوجيه الطالبات نحو التخصصات المناسبة لسوق العمل، وإلهامهن لاختيار مستقبل مهني واعد في مجالات التكنولوجيا الحديثة.

كلية الحاسبات والمعلومات .. دائمًا في خدمة المجتمع.`,
      imageUrl: '/assets/new2.jpg',
      date: new Date('2025-03-10'),
      author: 'قطاع خدمة المجتمع',
      category: 'مشاركة مجتمعية',
      featured: true,
      tags: ['زيارة مدرسية', 'توجيه مهني', 'خدمة مجتمع'],
      views: 756
    },

    {
      id: 103,
      type: 'event',
      title: 'ندوة توعوية: "كيف تحمي جهازك وبياناتك من الاختراق"',
      description: 'برعاية الكلية، نظمت جمعية Luxor Tech Society (LTS) ندوة توعوية في الأمن السيبراني للطلاب.',
      content: `في إطار دعم الأنشطة الطلابية المستمر، تفخر الكلية برعاية واستضافة الندوة التوعوية بعنوان:

"كيف تحمي جهازك وبياناتك من الاختراق"

من تنظيم الجمعية الطلابية النشطة Luxor Tech Society (LTS).

تناولت الندوة موضوعات أساسية في الأمن السيبراني منها:
• أساليب الاختراق الشائعة
• أفضل الممارسات لحماية الأجهزة والحسابات
• كيفية التعرف على هجمات التصيد والبرمجيات الخبيثة وتجنبها
• أ两大 ونصائح عملية لتعزيز الأمان الرقمي الشخصي

تعكس هذه الفعالية التزام الكلية بتنمية المهارات التقنية للطلاب، ونشر الوعي بالأمن الرقمي، وتشجيع المبادرات الطلابية التي تفيد الجامعة والمجتمع الأوسع.

تحية تقدير لفريق Luxor Tech Society على هذه المبادرة القيّمة والمؤثرة!`,
      imageUrl: '/assets/new3.jpg',
      date: new Date('2025-03-05'),
      author: 'Luxor Tech Society',
      category: 'أنشطة طلابية',
      featured: true,
      tags: ['أمن سيبراني', 'توعية', 'LTS', 'مبادرة طلابية'],
      views: 1024
    },

    {
      id: 104,
      type: 'news',
      title: 'زيارة مدرسية: مدرسة الشهيد محمد رأفت الصن الرسمية لغات',
      description: 'استقبلت الكلية طلاب مدرسة الشهيد محمد رأفت الصن الرسمية لغات للتعرف على برامج الحاسب والمسارات المهنية.',
      content: `استقبلت كلية الحاسبات والمعلومات وفدًا من طلاب مدرسة الشهيد محمد رأفت الصن الرسمية لغات، بهدف التعريف بالبرامج والتخصصات العلمية التي تقدمها الكلية والمسارات المهنية الواعدة في مجال الحاسبات وتكنولوجيا المعلومات.

أشرف على الزيارة الأستاذ الدكتور/ قرشي سعدي - وكيل الكلية لشئون خدمة المجتمع وتنمية البيئة، ونسقتها المهندسة/ دعاء عبد الكريم.

تعكس هذه الزيارات التزام الكلية المستمر ببناء جسور قوية مع المجتمع المحلي، وتوجيه طلاب المرحلة الثانوية نحو التخصصات المطلوبة، وإلهام الجيل القادم من قادة التكنولوجيا.

كلية الحاسبات والمعلومات .. فخورة بخدمة مجتمعها وتشكيل مستقبله.`,
      imageUrl: '/assets/new4.jpg',
      date: new Date('2025-02-28'),
      author: 'قطاع خدمة المجتمع',
      category: 'مشاركة مجتمعية',
      featured: false,
      tags: ['زيارة مدرسية', 'توجيه مهني', 'خدمة مجتمع'],
      views: 689
    },

    {
      id: 105,
      type: 'event',
      title: 'نتائج دوري الكلية للكرة الخماسية',
      description: 'نتائج دوري الكلية للكرة الخماسية: تهنئة حارة للفريق الفائز والمتوجين بالجوائز الفردية!',
      content: `في إطار دعم الأنشطة الطلابية، نظمت إدارة رعاية الشباب بالكلية دوري الكلية للكرة الخماسية بمشاركة 10 فرق تنافسية.

النتائج النهائية:
البطل - المركز الأول
عمرو شوقي، الطاهر محمد، محمد يوسف، أحمد محمد، فارس عبد الله، عمرو الدردير، خالد عبد العظيم

الوصيف - المركز الثاني
محمود صبري، أحمد حازم، إسماعيل مشوادي، أحمد نبيل، فارس ماهر، محمد وزير، محمد مصطفى، محمود مصطفى، عبد الرحمن محمود

الجوائز الفردية:
هداف البطولة وأفضل لاعب: عمرو شوقي
أفضل حارس مرمى: الطاهر محمد

تهنئة حارة للفريق الفائز ولجميع الفائزين بالجوائز الفردية!
تحية تقدير كبيرة لكل الفرق المشاركة على روح التنافس الشريف والروح الرياضية العالية طوال البطولة.

لعب ممتاز من الجميع!

تظل كلية الحاسبات والمعلومات ملتزمة بدورها التعليمي والمجتمعي في بناء أجيال واعية ومسؤولة وذات أخلاق رياضية عالية.`,
      imageUrl: '/assets/new6.jpg',
      date: new Date('2025-02-20'),
      author: 'رعاية الشباب',
      category: 'أنشطة طلابية',
      featured: true,
      tags: ['كرة خماسية', 'دوري', 'رياضة', 'أنشطة طلابية'],
      views: 1347
    }
  ];

  // الدوال كلها نفسها بالضبط - لا تغيير في المنطق أو الهيكل
  getNews(filter?: NewsFilter, page: number = 1, pageSize: number = 6): Observable<NewsResponse> {
    let filtered = [...this.newsData];

    if (filter?.type && filter.type !== 'all') {
      filtered = filtered.filter(n => n.type === filter.type);
    }
    if (filter?.category) {
      filtered = filtered.filter(n => n.category === filter.category);
    }
    if (filter?.searchTerm) {
      const term = filter.searchTerm.toLowerCase();
      filtered = filtered.filter(n =>
        n.title.toLowerCase().includes(term) ||
        n.description.toLowerCase().includes(term) ||
        n.content.toLowerCase().includes(term)
      );
    }

    filtered.sort((a, b) => b.date.getTime() - a.date.getTime());

    const start = (page - 1) * pageSize;
    const end = start + pageSize;

    return of({
      items: filtered.slice(start, end),
      total: filtered.length,
      page,
      pageSize
    });
  }

  getNewsById(id: number): Observable<NewsItem | null> {
    return of(this.newsData.find(n => n.id === id) || null);
  }

  getFeaturedNews(): Observable<NewsItem[]> {
    return of(this.newsData.filter(n => n.featured));
  }

  getCategories(): Observable<string[]> {
    return of([...new Set(this.newsData.map(n => n.category))]);
  }

  getRelatedNews(currentId: number, type: 'news' | 'event', limit = 4): Observable<NewsItem[]> {
    return of(
      this.newsData
        .filter(n => n.id !== currentId && n.type === type)
        .sort((a, b) => b.date.getTime() - a.date.getTime())
        .slice(0, limit)
    );
  }

  getNextNews(currentId: number, type: 'news' | 'event'): Observable<NewsItem | null> {
    const items = this.newsData.filter(n => n.type === type);
    const idx = items.findIndex(n => n.id === currentId);
    return of(idx >= 0 && idx < items.length - 1 ? items[idx + 1] : null);
  }

  getPreviousNews(currentId: number, type: 'news' | 'event'): Observable<NewsItem | null> {
    const items = this.newsData.filter(n => n.type === type);
    const idx = items.findIndex(n => n.id === currentId);
    return of(idx > 0 ? items[idx - 1] : null);
  }
}