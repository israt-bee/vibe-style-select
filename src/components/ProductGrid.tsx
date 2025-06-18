
import { useState, useEffect } from "react";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  mood: string[];
  description: string;
}

interface ProductGridProps {
  selectedMood: string;
  onAddToCart: (product: Product) => void;
}

// Mock product data
const products: Product[] = [
  {
    id: "1",
    name: "Power Blazer",
    price: 129.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400",
    category: "outfits",
    mood: ["confident", "professional"],
    description: "Structured blazer for commanding presence"
  },
  {
    id: "2",
    name: "Cozy Knit Sweater",
    price: 79.99,
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400",
    category: "outfits",
    mood: ["relaxed", "playful"],
    description: "Soft and comfortable for easy days"
  },
  {
    id: "3",
    name: "Silk Dress",
    price: 199.99,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400",
    category: "outfits",
    mood: ["romantic", "professional"],
    description: "Elegant and flowing for special occasions"
  },
  {
    id: "4",
    name: "Statement Earrings",
    price: 45.99,
    image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=400",
    category: "accessories",
    mood: ["confident", "adventurous"],
    description: "Bold accessories to complete your look"
  },
  {
    id: "5",
    name: "Minimalist Watch",
    price: 159.99,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400",
    category: "accessories",
    mood: ["professional", "relaxed"],
    description: "Timeless elegance for everyday wear"
  },
  {
    id: "6",
    name: "Athletic Sneakers",
    price: 119.99,
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?w=400",
    category: "shoes",
    mood: ["adventurous", "playful"],
    description: "Comfortable and stylish for active days"
  },
  {
    id: "7",
    name: "Classic Heels",
    price: 189.99,
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400",
    category: "shoes",
    mood: ["confident", "romantic"],
    description: "Sophisticated heels for elegant occasions"
  },
  {
    id: "8",
    name: "Casual Loafers",
    price: 99.99,
    image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400",
    category: "shoes",
    mood: ["relaxed", "professional"],
    description: "Versatile shoes for work and leisure"
  }
];

export const ProductGrid = ({ selectedMood, onAddToCart }: ProductGridProps) => {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  useEffect(() => {
    let filtered = products;
    
    if (selectedMood) {
      filtered = filtered.filter(product => product.mood.includes(selectedMood));
    }
    
    if (activeCategory !== "all") {
      filtered = filtered.filter(product => product.category === activeCategory);
    }
    
    setFilteredProducts(filtered);
  }, [selectedMood, activeCategory]);

  const categories = [
    { id: "all", name: "All Items" },
    { id: "outfits", name: "Outfits" },
    { id: "accessories", name: "Accessories" },
    { id: "shoes", name: "Shoes" }
  ];

  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="flex space-x-2 bg-white rounded-lg p-2 shadow-sm">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "ghost"}
              onClick={() => setActiveCategory(category.id)}
              className={`${
                activeCategory === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "text-gray-600 hover:text-purple-600"
              } transition-all duration-200`}
            >
              {category.name}
            </Button>
          ))}
        </div>
      </div>

      {selectedMood && (
        <div className="text-center mb-6">
          <p className="text-lg text-gray-600">
            Showing products perfect for your <span className="font-semibold text-purple-600 capitalize">{selectedMood}</span> mood
          </p>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">No products found for your current selection.</p>
          <p className="text-gray-400">Try selecting a different mood or category.</p>
        </div>
      )}
    </div>
  );
};
