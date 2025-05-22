import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "~/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "~/components/ui/carousel";
import { Badge } from "~/components/ui/badge";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "~/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Separator } from "~/components/ui/separator";
import { Progress } from "~/components/ui/progress";
import { Toaster } from "~/components/ui/sonner";
import { toast } from "sonner";


export function Home() {
  const handleClick = () => {
    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
  }

  // Dados de exemplo
  const featuredProducts = [
    {
      id: 1,
      name: "Tênis Esportivo Premium",
      price: 299.99,
      oldPrice: 399.99,
      image: "imgiph.png",
      category: "Calçados",
    },
    {
      id: 2,
      name: "Smartphone Pro Max",
      price: 3499.99,
      oldPrice: 3999.99,
      image: "imgiph.png",
      category: "Eletrônicos",
    },
    {
      id: 3,
      name: "Fone de Ouvido Sem Fio",
      price: 499.99,
      oldPrice: 599.99,
      image: "imgiph.png",
      category: "Eletrônicos",
    },
    {
      id: 4,
      name: "Camiseta Casual",
      price: 89.99,
      oldPrice: 119.99,
      image: "imgiph.png",
      category: "Vestuário",
    },
  ];

  const categories = [
    { id: 1, name: "Eletrônicos", icon: "📱" },
    { id: 2, name: "Vestuário", icon: "👕" },
    { id: 3, name: "Calçados", icon: "👟" },
    { id: 4, name: "Casa e Cozinha", icon: "🏠" },
    { id: 5, name: "Beleza", icon: "💄" },
    { id: 6, name: "Esportes", icon: "⚽" },
  ];

  const banners = [
    "imgfound.jpg",
    "imgfound.jpg",
    "imgfound.jpg",
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-background text-foreground">
      <Toaster />
      
      {/* Cabeçalho responsivo */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between px-4 sm:px-6 max-w-screen-2xl mx-auto">
          <div className="flex items-center gap-2 sm:gap-4">
            <h1 className="text-lg sm:text-xl font-bold">Teck<span className="blue">Dark</span></h1>
            
            <nav className="hidden md:flex items-center gap-4 sm:gap-6 sm:ml-6 md:ml-8">
              <Button variant="ghost" className="font-medium text-sm sm:text-base">Início</Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="font-medium text-sm sm:text-base">Categorias</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-48">
                  {categories.map((category) => (
                    <DropdownMenuItem key={category.id}>
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
              <Button variant="ghost" className="font-medium text-sm sm:text-base">Ofertas</Button>
            </nav>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="relative hidden sm:block w-40 md:w-64">
              <Input placeholder="Buscar..." className="pr-8 text-sm" />
              <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full w-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </Button>
            </div>
            
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
              </svg>
            </Button>
            
            <Button variant="ghost" size="icon">
              <div className="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="9" cy="21" r="1"></circle>
                  <circle cx="20" cy="21" r="1"></circle>
                  <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center">3</Badge>
              </div>
            </Button>
            
            <Avatar className="h-8 w-8 hidden sm:block">
              <AvatarImage src="/avatars/user.jpg" />
              <AvatarFallback>US</AvatarFallback>
            </Avatar>

            {/* Menu mobile */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="sm:hidden">
                <Button variant="ghost" size="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuItem>Início</DropdownMenuItem>
                <DropdownMenuItem>Categorias</DropdownMenuItem>
                <DropdownMenuItem>Ofertas</DropdownMenuItem>
                <DropdownMenuItem>Contato</DropdownMenuItem>
                <DropdownMenuItem>Minha conta</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="flex-1 w-full">
        <div className="container px-4 sm:px-6 py-4 sm:py-6 max-w-screen-2xl mx-auto">
          {/* Carrossel de banners - ocupa 100% da largura */}
          <section className="mb-8 sm:mb-12 w-full">
            <Carousel className="w-full rounded-lg overflow-hidden">
              <CarouselContent>
                {banners.map((banner, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-[16/6] bg-muted w-full">
                      <img 
                        src={banner} 
                        alt={`Banner ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8 bg-gradient-to-t from-black/80 to-transparent">
                        <h2 className="text-xl sm:text-2xl font-bold text-white">Ofertas Especiais</h2>
                        <p className="text-white/80 text-sm sm:text-base">Descontos de até 50%</p>
                        <Button size="sm" className="mt-2 sm:mt-4">Comprar Agora</Button>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 sm:left-4" />
              <CarouselNext className="right-2 sm:right-4" />
            </Carousel>
          </section>

          {/* Categorias */}
          <section className="mb-8 sm:mb-12 w-full">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Categorias</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 sm:gap-4 w-full">
              {categories.map((category) => (
                <Button 
                  key={category.id} 
                  variant="outline" 
                  className="flex-col h-20 sm:h-28 gap-1 sm:gap-2 hover:bg-primary/10 py-2 w-full"
                >
                  <span className="text-xl sm:text-2xl">{category.icon}</span>
                  <span className="text-xs sm:text-sm">{category.name}</span>
                </Button>
              ))}
            </div>
          </section>

          {/* Produtos em Destaque */}
          <section className="mb-8 sm:mb-12 w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2 w-full">
              <h2 className="text-xl sm:text-2xl font-bold">Produtos em Destaque</h2>
              <Button variant="link" size="sm" className="px-0">Ver todos</Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full">
              {featuredProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow w-full">
                  <CardHeader className="p-0 relative w-full">
                    <div className="aspect-square bg-muted relative overflow-hidden rounded-t-lg w-full">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform"
                      />
                      <Badge variant="secondary" className="absolute top-1 sm:top-2 left-1 sm:left-2 text-xs">
                        {product.category}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2 sm:pt-4 px-2 sm:px-4 w-full">
                    <h3 className="font-medium text-sm sm:text-base line-clamp-1 w-full">{product.name}</h3>
                    <div className="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2 w-full">
                      <span className="text-sm sm:text-lg font-bold">R$ {product.price.toFixed(2)}</span>
                      <span className="text-xs sm:text-sm text-muted-foreground line-through">R$ {product.oldPrice.toFixed(2)}</span>
                      <Badge variant="destructive" className="ml-auto text-xs">
                        {Math.round((1 - product.price / product.oldPrice) * 100)}% OFF
                      </Badge>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between p-2 sm:p-4 w-full">
                    <Button size="sm" onClick={handleClick} className="flex-1">Detalhes</Button>
                    <Button size="sm" className="flex-1">Comprar</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* Ofertas Relâmpago */}
          <section className="mb-8 sm:mb-12 bg-primary/5 p-4 sm:p-6 rounded-lg w-full">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-2 w-full">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold">Ofertas Relâmpago</h2>
                <p className="text-muted-foreground text-sm">Termina em:</p>
              </div>
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="bg-destructive text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-md font-mono text-sm sm:text-base">12</span>
                <span>:</span>
                <span className="bg-destructive text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-md font-mono text-sm sm:text-base">45</span>
                <span>:</span>
                <span className="bg-destructive text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-md font-mosno text-sm sm:text-base">30</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full">
              {featuredProducts.slice(0, 4).map((product) => (
                <Card key={product.id} className="border-destructive/30 w-full">
                  <CardHeader className="p-0 relative w-full">
                    <div className="aspect-square bg-muted relative overflow-hidden rounded-t-lg w-full">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 p-1 sm:p-2 bg-destructive/90 text-white text-center w-full">
                        <p className="text-xs sm:text-sm">Vendendo rápido! {Math.floor(Math.random() * 50) + 50}% já vendido</p>
                        <Progress value={Math.floor(Math.random() * 50) + 50} className="h-1 mt-1 bg-destructive/50 w-full" />
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2 sm:pt-4 px-2 sm:px-4 w-full">
                    <h3 className="font-medium text-sm sm:text-base line-clamp-1 w-full">{product.name}</h3>
                    <div className="flex items-center gap-1 sm:gap-2 mt-1 sm:mt-2 w-full">
                      <span className="text-sm sm:text-lg font-bold text-destructive">R$ {product.price.toFixed(2)}</span>
                      <span className="text-xs sm:text-sm text-muted-foreground line-through">R$ {product.oldPrice.toFixed(2)}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-2 sm:p-4 w-full">
                    <Button variant="destructive" size="sm" className="w-full">Comprar Agora</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </section>

          {/* Newsletter */}
          <section className="mb-8 sm:mb-12 bg-primary/10 p-4 sm:p-8 rounded-lg w-full">
            <div className="max-w-2xl mx-auto text-center w-full">
              <h2 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Receba nossas ofertas</h2>
              <p className="text-muted-foreground text-sm sm:text-base mb-4 sm:mb-6">Cadastre-se e receba as melhores promoções no seu e-mail</p>
              <div className="flex flex-col sm:flex-row gap-2 w-full">
                <Input placeholder="Seu melhor e-mail" className="flex-1" />
                <Button className="sm:w-auto w-full sm:w-fit">Cadastrar</Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-muted/50 border-t w-full">
        <div className="container px-4 sm:px-6 py-8 sm:py-12 max-w-screen-2xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full">
            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-2 sm:mb-4">LOJA<span className="text-primary">ON</span></h3>
              <p className="text-muted-foreground text-sm sm:text-base">A melhor loja online com os melhores preços e produtos de qualidade.</p>
            </div>
            
            <div>
              <h4 className="font-medium text-sm sm:text-base mb-2 sm:mb-4">Institucional</h4>
              <ul className="space-y-1 sm:space-y-2">
                <li><Button variant="link" className="p-0 h-auto text-xs sm:text-sm">Sobre nós</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-xs sm:text-sm">Trocas e devoluções</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-xs sm:text-sm">Política de privacidade</Button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-sm sm:text-base mb-2 sm:mb-4">Atendimento</h4>
              <ul className="space-y-1 sm:space-y-2">
                <li><Button variant="link" className="p-0 h-auto text-xs sm:text-sm">Central de ajuda</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-xs sm:text-sm">Meus pedidos</Button></li>
                <li><Button variant="link" className="p-0 h-auto text-xs sm:text-sm">Fale conosco</Button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium text-sm sm:text-base mb-2 sm:mb-4">Formas de pagamento</h4>
              <div className="flex flex-wrap gap-1 sm:gap-2">
                <img src="/payments/visa.svg" alt="Visa" className="h-6 sm:h-8" />
                <img src="/payments/mastercard.svg" alt="Mastercard" className="h-6 sm:h-8" />
                <img src="/payments/amex.svg" alt="American Express" className="h-6 sm:h-8" />
                <img src="/payments/pix.svg" alt="Pix" className="h-6 sm:h-8" />
              </div>
            </div>
          </div>
          
          <Separator className="my-6 sm:my-8 w-full" />
          
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 w-full">
            <p className="text-xs sm:text-sm text-muted-foreground">© 2023 LojAON. Todos os direitos reservados.</p>
            <div className="flex gap-2 sm:gap-4">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}