
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Coffee, Utensils, Cake, Wine, Search, ShoppingCart } from "lucide-react";
import { Input } from "@/components/ui/input";

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [cart, setCart] = useState<any[]>([]);

  const categories = [
    { id: "all", name: "All Items", icon: Utensils },
    { id: "coffee", name: "Coffee & Tea", icon: Coffee },
    { id: "food", name: "Food", icon: Utensils },
    { id: "desserts", name: "Desserts", icon: Cake },
    { id: "beverages", name: "Beverages", icon: Wine }
  ];

  const menuItems = [
    // Coffee & Tea
    { id: 1, name: "Espresso", description: "Rich, bold espresso shot", price: 3.50, category: "coffee", image: "☕", popular: true },
    { id: 2, name: "Cappuccino", description: "Espresso with steamed milk and foam", price: 4.50, category: "coffee", image: "☕" },
    { id: 3, name: "Latte", description: "Smooth espresso with steamed milk", price: 4.75, category: "coffee", image: "☕" },
    { id: 4, name: "Green Tea", description: "Premium organic green tea", price: 3.00, category: "coffee", image: "🍵" },
    
    // Food
    { id: 5, name: "Avocado Toast", description: "Fresh avocado on artisan bread with lime", price: 8.50, category: "food", image: "🥑", popular: true },
    { id: 6, name: "Grilled Sandwich", description: "Ham, cheese, and tomato on sourdough", price: 9.75, category: "food", image: "🥪" },
    { id: 7, name: "Caesar Salad", description: "Crisp romaine with parmesan and croutons", price: 12.00, category: "food", image: "🥗" },
    { id: 8, name: "Breakfast Bowl", description: "Quinoa, eggs, avocado, and vegetables", price: 13.50, category: "food", image: "🍲" },
    
    // Desserts
    { id: 9, name: "Chocolate Cake", description: "Rich chocolate layer cake", price: 6.50, category: "desserts", image: "🍰", popular: true },
    { id: 10, name: "Cheesecake", description: "New York style cheesecake", price: 7.00, category: "desserts", image: "🍰" },
    { id: 11, name: "Croissant", description: "Buttery, flaky pastry", price: 4.50, category: "desserts", image: "🥐" },
    
    // Beverages
    { id: 12, name: "Fresh Orange Juice", description: "Freshly squeezed orange juice", price: 4.50, category: "beverages", image: "🍊" },
    { id: 13, name: "Smoothie Bowl", description: "Acai berry smoothie with toppings", price: 8.50, category: "beverages", image: "🍓" },
    { id: 14, name: "Sparkling Water", description: "Premium sparkling mineral water", price: 2.50, category: "beverages", image: "💧" }
  ];

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const addToCart = (item: any) => {
    setCart([...cart, item]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-amber-800 via-orange-700 to-red-600 shadow-lg sticky top-0 z-10">
        <div className="px-4 py-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-white drop-shadow-lg">Café Deluxe</h1>
              <p className="text-orange-100 font-medium">Fresh • Local • Delicious</p>
            </div>
            <div className="relative">
              <Button variant="secondary" size="sm" className="flex items-center gap-2 bg-white/90 text-orange-800 hover:bg-white shadow-md">
                <ShoppingCart className="h-4 w-4" />
                <span className="bg-red-500 text-white rounded-full text-xs px-2 py-1 min-w-[20px] shadow-sm">
                  {cart.length}
                </span>
              </Button>
            </div>
          </div>
          
          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-400 h-4 w-4" />
            <Input
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/95 border-orange-200 focus:border-orange-400 shadow-sm"
            />
          </div>
        </div>
      </header>

      {/* Categories */}
      <div className="px-4 py-4 bg-white/80 backdrop-blur-sm border-b border-orange-100 shadow-sm">
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center gap-2 whitespace-nowrap shadow-sm transition-all duration-200 ${
                selectedCategory === category.id 
                  ? "bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-md" 
                  : "bg-white/90 text-orange-700 border-orange-200 hover:bg-orange-50 hover:border-orange-300"
              }`}
            >
              <category.icon className="h-4 w-4" />
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-4 py-6 space-y-4">
        {/* Popular Items Section */}
        {selectedCategory === "all" && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2">
              ⭐ Popular Items
            </h2>
            <div className="grid gap-4">
              {menuItems.filter(item => item.popular).map((item) => (
                <Card key={item.id} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-r from-white to-orange-50/50 border-l-4 border-l-orange-400">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="text-4xl filter drop-shadow-sm">{item.image}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-bold text-gray-800 text-lg">{item.name}</h3>
                            <Badge variant="secondary" className="bg-gradient-to-r from-orange-400 to-red-400 text-white text-xs shadow-sm">
                              Popular
                            </Badge>
                          </div>
                          <p className="text-gray-600 mb-3 leading-relaxed">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xl text-green-600">${item.price.toFixed(2)}</span>
                            <Button 
                              size="sm" 
                              onClick={() => addToCart(item)}
                              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
                            >
                              Add to Order
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            <Separator className="my-8 bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
          </div>
        )}

        {/* All Items */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            {selectedCategory === "all" ? "All Menu Items" : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          
          {filteredItems.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <p className="text-gray-500 text-lg">No items found matching your search.</p>
            </div>
          ) : (
            <div className="grid gap-4">
              {filteredItems.map((item) => (
                <Card key={item.id} className="border-0 shadow-md hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur-sm hover:bg-white">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4 flex-1">
                        <div className="text-4xl filter drop-shadow-sm">{item.image}</div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="font-semibold text-gray-800 text-lg">{item.name}</h3>
                            {item.popular && (
                              <Badge variant="secondary" className="bg-gradient-to-r from-orange-400 to-red-400 text-white text-xs shadow-sm">
                                Popular
                              </Badge>
                            )}
                          </div>
                          <p className="text-gray-600 mb-3 leading-relaxed">{item.description}</p>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xl text-green-600">${item.price.toFixed(2)}</span>
                            <Button 
                              size="sm" 
                              onClick={() => addToCart(item)}
                              className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white shadow-md hover:shadow-lg transition-all duration-200"
                            >
                              Add to Order
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white mt-8 p-6 shadow-lg">
        <div className="text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div className="flex items-center justify-center gap-2">
              <span className="text-orange-400">📍</span>
              <span>123 Coffee Street, Downtown</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-orange-400">📞</span>
              <span>(555) 123-4567</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-orange-400">🕒</span>
              <span>Open Daily 7AM - 10PM</span>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700">
            <p className="text-gray-400 text-sm">© 2024 Café Deluxe. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Menu;
