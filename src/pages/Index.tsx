import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-border sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                <Icon name="Cross" className="text-white" size={24} />
              </div>
              <span className="text-xl font-bold text-primary">PharmaCare</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-foreground hover:text-secondary transition-colors">Главная</a>
              <a href="#about" className="text-foreground hover:text-secondary transition-colors">О компании</a>
              <a href="#products" className="text-foreground hover:text-secondary transition-colors">Продукция</a>
              <a href="#licenses" className="text-foreground hover:text-secondary transition-colors">Лицензии</a>
              <a href="#news" className="text-foreground hover:text-secondary transition-colors">Новости</a>
              <a href="#contacts" className="text-foreground hover:text-secondary transition-colors">Контакты</a>
            </div>
            <Button className="bg-secondary hover:bg-secondary/90">
              Связаться с нами
            </Button>
          </nav>
        </div>
      </header>

      <section id="home" className="py-20 bg-gradient-to-b from-muted/30 to-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-secondary/10 text-secondary hover:bg-secondary/20">
                Здоровье превыше всего
              </Badge>
              <h1 className="text-5xl font-bold text-primary leading-tight">Поставка лекарственных препаратов в лечебные учреждения.</h1>
              <p className="text-lg text-muted-foreground">
                Мы создаём качественные фармацевтические препараты, которые помогают миллионам людей жить здоровой и полноценной жизнью.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-secondary hover:bg-secondary/90">
                  <Icon name="Pill" className="mr-2" size={20} />
                  Наша продукция
                </Button>
                <Button size="lg" variant="outline">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=800&fit=crop" 
                  alt="Фармацевтическая лаборатория"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                    <Icon name="Award" className="text-secondary" size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-primary">25+</div>
                    <div className="text-sm text-muted-foreground">Лет на рынке</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">О компании</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">Наша миссия и ценности</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы стремимся улучшать качество жизни людей через инновационные фармацевтические решения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="border-2 hover:border-secondary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Target" className="text-secondary" size={24} />
                </div>
                <CardTitle>Качество</CardTitle>
                <CardDescription>
                  Высочайшие стандарты производства и контроля качества на каждом этапе
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-secondary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Lightbulb" className="text-secondary" size={24} />
                </div>
                <CardTitle>Инновации</CardTitle>
                <CardDescription>
                  Постоянные исследования и разработка новых эффективных препаратов
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-2 hover:border-secondary/50 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Heart" className="text-secondary" size={24} />
                </div>
                <CardTitle>Забота</CardTitle>
                <CardDescription>
                  Ответственное отношение к здоровью каждого пациента
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">500+</div>
              <div className="text-muted-foreground">Препаратов</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">2000+</div>
              <div className="text-muted-foreground">Сотрудников</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">50+</div>
              <div className="text-muted-foreground">Стран</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">100M+</div>
              <div className="text-muted-foreground">Пациентов</div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">Продукция</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">Наши препараты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий спектр качественных лекарственных средств для различных терапевтических областей
            </p>
          </div>

          <Tabs defaultValue="cardiovascular" className="w-full">
            <TabsList className="grid w-full md:w-auto md:inline-grid grid-cols-2 md:grid-cols-5 mb-8">
              <TabsTrigger value="cardiovascular">Кардиология</TabsTrigger>
              <TabsTrigger value="neurology">Неврология</TabsTrigger>
              <TabsTrigger value="oncology">Онкология</TabsTrigger>
              <TabsTrigger value="antibiotics">Антибиотики</TabsTrigger>
              <TabsTrigger value="vitamins">Витамины</TabsTrigger>
            </TabsList>

            <TabsContent value="cardiovascular" className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Heart" className="text-secondary" size={20} />
                      CardioProtect
                    </CardTitle>
                    <CardDescription>
                      Препарат для профилактики сердечно-сосудистых заболеваний
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Activity" className="text-secondary" size={20} />
                      PressureNorm
                    </CardTitle>
                    <CardDescription>
                      Эффективное средство для нормализации артериального давления
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="HeartPulse" className="text-secondary" size={20} />
                      VasoDilate
                    </CardTitle>
                    <CardDescription>
                      Сосудорасширяющий препарат нового поколения
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="neurology" className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Brain" className="text-secondary" size={20} />
                      NeuroCare
                    </CardTitle>
                    <CardDescription>
                      Улучшение когнитивных функций и памяти
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="oncology" className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Shield" className="text-secondary" size={20} />
                      OncoBlock
                    </CardTitle>
                    <CardDescription>
                      Инновационная терапия онкологических заболеваний
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="antibiotics" className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Sparkles" className="text-secondary" size={20} />
                      BacterStop
                    </CardTitle>
                    <CardDescription>
                      Широкого спектра действия против бактериальных инфекций
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="vitamins" className="space-y-4">
              <div className="grid md:grid-cols-3 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="Sun" className="text-secondary" size={20} />
                      VitaComplex
                    </CardTitle>
                    <CardDescription>
                      Полноценный комплекс витаминов и минералов
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">Подробнее</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <section id="licenses" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">Документация</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">Лицензии и сертификаты</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Все наши препараты сертифицированы и соответствуют международным стандартам качества
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="FileCheck" className="text-secondary" size={32} />
                </div>
                <CardTitle className="text-lg">GMP</CardTitle>
                <CardDescription>
                  Сертификат надлежащей производственной практики
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="text-secondary">
                  Скачать PDF
                  <Icon name="Download" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Award" className="text-secondary" size={32} />
                </div>
                <CardTitle className="text-lg">ISO 9001</CardTitle>
                <CardDescription>
                  Международный стандарт системы менеджмента качества
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="text-secondary">
                  Скачать PDF
                  <Icon name="Download" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="ShieldCheck" className="text-secondary" size={32} />
                </div>
                <CardTitle className="text-lg">FDA</CardTitle>
                <CardDescription>
                  Одобрение управления по санитарному надзору США
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="text-secondary">
                  Скачать PDF
                  <Icon name="Download" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="BadgeCheck" className="text-secondary" size={32} />
                </div>
                <CardTitle className="text-lg">EMA</CardTitle>
                <CardDescription>
                  Сертификация Европейского медицинского агентства
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="text-secondary">
                  Скачать PDF
                  <Icon name="Download" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 bg-muted/30 rounded-xl p-8 text-center">
            <Icon name="FileText" className="text-secondary mx-auto mb-4" size={48} />
            <h3 className="text-2xl font-bold text-primary mb-2">Все документы доступны</h3>
            <p className="text-muted-foreground mb-6">
              Мы придерживаемся принципов прозрачности и открытости. Все наши лицензии и сертификаты доступны для ознакомления.
            </p>
            <Button className="bg-secondary hover:bg-secondary/90">
              Запросить полный пакет документов
            </Button>
          </div>
        </div>
      </section>

      <section id="news" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">Новости</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">Последние новости</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Следите за нашими достижениями и новостями из мира фармацевтики
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop" 
                  alt="Новость 1"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Icon name="Calendar" size={16} />
                  <span>15 октября 2024</span>
                </div>
                <CardTitle>Запуск нового препарата CardioProtect Plus</CardTitle>
                <CardDescription>
                  Представляем улучшенную формулу препарата для защиты сердечно-сосудистой системы
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="text-secondary p-0">
                  Читать далее
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&h=400&fit=crop" 
                  alt="Новость 2"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Icon name="Calendar" size={16} />
                  <span>10 октября 2024</span>
                </div>
                <CardTitle>Открытие нового исследовательского центра</CardTitle>
                <CardDescription>
                  Инвестиции в науку: новая лаборатория для разработки инновационных решений
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="text-secondary p-0">
                  Читать далее
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <div className="aspect-video overflow-hidden rounded-t-lg">
                <img 
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop" 
                  alt="Новость 3"
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Icon name="Calendar" size={16} />
                  <span>5 октября 2024</span>
                </div>
                <CardTitle>Награда за вклад в здравоохранение</CardTitle>
                <CardDescription>
                  PharmaCare получила национальную премию за достижения в фармацевтике
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="text-secondary p-0">
                  Читать далее
                  <Icon name="ArrowRight" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-secondary/10 text-secondary hover:bg-secondary/20">Контакты</Badge>
            <h2 className="text-4xl font-bold text-primary mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы всегда готовы ответить на ваши вопросы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="MapPin" className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Адрес</h3>
                  <p className="text-muted-foreground">
                    123456, Москва, ул. Фармацевтическая, д. 10
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Phone" className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Телефон</h3>
                  <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  <p className="text-muted-foreground">+7 (800) 555-35-35 (бесплатный)</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Mail" className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email</h3>
                  <p className="text-muted-foreground">info@pharmacare.ru</p>
                  <p className="text-muted-foreground">support@pharmacare.ru</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Clock" className="text-secondary" size={24} />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-1">Время работы</h3>
                  <p className="text-muted-foreground">Пн-Пт: 9:00 - 18:00</p>
                  <p className="text-muted-foreground">Сб-Вс: выходной</p>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Отправить сообщение</CardTitle>
                <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="Иван Иванов"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-secondary"
                    placeholder="ivan@example.com"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Сообщение</label>
                  <textarea 
                    className="w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-secondary min-h-32"
                    placeholder="Ваше сообщение..."
                  />
                </div>
                <Button className="w-full bg-secondary hover:bg-secondary/90">
                  Отправить сообщение
                  <Icon name="Send" className="ml-2" size={16} />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-secondary rounded-lg flex items-center justify-center">
                  <Icon name="Cross" className="text-white" size={24} />
                </div>
                <span className="text-xl font-bold">PharmaCare</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Инновационные фармацевтические решения для здоровья и благополучия
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#about" className="hover:text-secondary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Карьера</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Партнёры</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Пресс-центр</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Продукция</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#products" className="hover:text-secondary transition-colors">Каталог</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">Инструкции</a></li>
                <li><a href="#licenses" className="hover:text-secondary transition-colors">Сертификаты</a></li>
                <li><a href="#" className="hover:text-secondary transition-colors">FAQ</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>+7 (495) 123-45-67</li>
                <li>info@pharmacare.ru</li>
                <li>Москва, ул. Фармацевтическая, 10</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2024 PharmaCare. Все права защищены.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-secondary transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-secondary transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;