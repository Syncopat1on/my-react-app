import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import CardItem from './components/CardItem/CardItem';
import CardSkeleton from './components/CardSkeleton/CardSkeleton';
import CartModal from './components/Modal/CartModal';
import { Product, CartItem } from './type';

interface AppProps {
  initialCards?: Product[];
}

export const App: React.FC<AppProps> = ({ initialCards }) => {
  const url =
    'https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json';
  const [cards, setCards] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);

  useEffect(() => {
    if (!initialCards) {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await fetch(url);
          const data = await response.json();
          setCards(data.slice(0, 30));
        } catch (err) {
          console.error(err);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    } else {
      setCards(initialCards);
      setLoading(false);
    }
  }, [initialCards]);

  const addToCart = (product: Product, quantity: number) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { ...product, quantity }];
    });
  };

  const updateQuantity = (id: number, quantity: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, quantity } : item))
        .filter((item) => item.quantity > 0)
    );
  };

  const toggleCart = () => {
    setIsCartOpen((prev) => !prev);
  };

  return (
    <>
      <div className="AppHeader">
        <Header cartItems={cartItems} toggleCart={toggleCart} />
      </div>
      <div className="catalog">Catalog</div>
      <div className="cards-container">
        {loading
          ? Array.from({ length: 30 }).map((_, index) => (
              <CardSkeleton key={`skeleton-${index}`} />
            ))
          : cards.map((card) => (
              <CardItem key={card.id} card={card} addToCart={addToCart} />
            ))}
      </div>
      {isCartOpen && (
        <CartModal
          cartItems={cartItems}
          onClose={() => setIsCartOpen(false)}
          onUpdateQuantity={updateQuantity}
        />
      )}
    </>
  );
};

export default App;
