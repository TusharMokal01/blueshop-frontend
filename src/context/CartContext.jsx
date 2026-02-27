import { createContext, useState, useContext } from "react"
import { ToastContext } from "../components/ToastProvider"

export const CartContext = createContext()

export function CartProvider({ children }) {
  const [cart, setCart] = useState([])
  const [isOpen, setIsOpen] = useState(false)
  const { showToast } = useContext(ToastContext) || { showToast: () => {} } // fallback

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const addToCart = (product) => {
    setIsOpen(true)
    setCart(prev => {
      const exists = prev.find(p => p.id === product.id)
      if (exists) {
        showToast(`${product.name} quantity increased`)
        return prev.map(p =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        )
      }
      showToast(`${product.name} added to cart`)
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    const removedItem = cart.find(item => item.id === id)
    showToast(`${removedItem?.name} removed from cart`)
    setCart(prev => prev.filter(item => item.id !== id))
  }

  const updateQuantity = (id, qty) => {
    const item = cart.find(i => i.id === id)
    if (!item) return
    if (qty < 1) return
    const action = qty > item.quantity ? "increased" : "decreased"
    showToast(`${item.name} quantity ${action}`)
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    )
  }

  const clearCart = () => setCart([])

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        total,
        clearCart,
        isOpen,
        setIsOpen
      }}
    >
      {children}
    </CartContext.Provider>
  )
}