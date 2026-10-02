export interface Product {
  id: string;
  name: string;
  category: 'Skincare' | 'Makeup' | 'Haircare' | 'Bodycare' | 'Sun Care' | 'Gift Sets';
  subcategory: string;
  concern: string[];
  price: number;
  oldPrice?: number;
  discountPercent?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  thumbnails: string[];
  shortDescription: string;
  description: string;
  benefits: string[];
  ingredients: string;
  howToUse: string;
  isBestSeller?: boolean;
  isNewArrival?: boolean;
  isTrending?: boolean;
  isLimited?: boolean;
  inStock: boolean;
  badge?: string;
  volume?: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedVariant?: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  shortDescription: string;
  content: string[];
}

export interface OrderCustomer {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  province: string;
  postalCode: string;
  notes?: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  customer: OrderCustomer;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  discount: number;
  total: number;
  paymentMethod: 'Cash on Delivery' | 'Bank Transfer' | 'Card Payment';
  shippingMethod: 'Standard Delivery' | 'Express Delivery';
  status: 'Confirmed' | 'Processing' | 'Shipped' | 'Delivered';
}

export interface ToastMessage {
  id: string;
  message: string;
  type?: 'success' | 'info' | 'warning';
}

export type PageView =
  | 'home'
  | 'shop'
  | 'product-detail'
  | 'checkout'
  | 'about'
  | 'blog'
  | 'contact';
