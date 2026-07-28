"use client";

import { motion } from "framer-motion";
import {
  Bike,
  ChevronRight,
  Clock3,
  Heart,
  MapPin,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  SlidersHorizontal,
  Star,
  Utensils,
} from "lucide-react";
import { useState } from "react";

const categories = ["All", "Popular", "Indian", "Pizza", "Burgers", "Healthy"];

const restaurants = [
  {
    name: "The Yellow Bowl",
    cuisine: "North Indian · Biryani",
    time: "22–28 min",
    rating: "4.8",
    price: "₹₹",
    emoji: "🍛",
    gradient: "from-amber-300 via-orange-400 to-rose-500",
    badge: "Bestseller",
  },
  {
    name: "Pizza Theory",
    cuisine: "Pizza · Italian",
    time: "25–30 min",
    rating: "4.7",
    price: "₹₹₹",
    emoji: "🍕",
    gradient: "from-rose-400 via-red-500 to-orange-500",
    badge: "40% OFF",
  },
  {
    name: "Green & Grain",
    cuisine: "Salads · Healthy",
    time: "18–24 min",
    rating: "4.9",
    price: "₹₹",
    emoji: "🥗",
    gradient: "from-emerald-300 via-teal-400 to-cyan-500",
    badge: "Healthy pick",
  },
  {
    name: "Burger District",
    cuisine: "Burgers · Fast Food",
    time: "20–26 min",
    rating: "4.6",
    price: "₹₹",
    emoji: "🍔",
    gradient: "from-yellow-300 via-orange-400 to-red-500",
    badge: "Free delivery",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

export default function FoodDelivery() {
  const [category, setCategory] = useState("All");
  const [quantity, setQuantity] = useState(1);

  return (
    <main className="h-full overflow-hidden bg-[#fffaf6] text-[#261d19]">
      <div className="grid h-full grid-cols-[minmax(0,1fr)] xl:grid-cols-[minmax(0,1fr)_210px]">
        <div className="min-w-0 overflow-y-auto px-3 py-3 sm:px-5 lg:px-6">
          <motion.header
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center justify-between gap-3"
          >
            <div className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-lg bg-[#ff5f36] text-white">
                <Utensils className="h-3.5 w-3.5" />
              </span>
              <span className="text-xs font-bold tracking-tight">
                Crave<span className="text-[#ff5f36]">ly</span>
              </span>
            </div>

            <div className="hidden flex-1 items-center justify-center md:flex">
              <button className="flex items-center gap-1 text-[9px] font-medium text-black/55">
                <MapPin className="h-3.5 w-3.5 text-[#ff5f36]" />
                Delivering to <span className="text-black">Arera Colony, Bhopal</span>
                <ChevronRight className="h-3 w-3" />
              </button>
            </div>

            <div className="flex items-center gap-2">
              <button className="relative grid h-7 w-7 place-items-center rounded-md border border-black/[.08] bg-white text-black/55">
                <Heart className="h-3.5 w-3.5" />
              </button>

              <button className="relative grid h-7 w-7 place-items-center rounded-md bg-[#261d19] text-white">
                <ShoppingBag className="h-3.5 w-3.5" />
                <span className="absolute -right-1 -top-1 grid h-3.5 w-3.5 place-items-center rounded-full bg-[#ff5f36] text-[7px] font-bold">
                  {quantity}
                </span>
              </button>
            </div>
          </motion.header>

          <motion.section
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="relative mt-5 overflow-hidden rounded-2xl bg-[#261d19] p-5 text-white"
          >
            <div className="absolute -right-6 -top-8 grid h-40 w-40 place-items-center rounded-full bg-[#ff5f36] text-7xl shadow-[0_0_45px_rgba(255,95,54,.42)]">
              🍜
            </div>

            <div className="relative max-w-md">
              <p className="text-[9px] font-semibold uppercase tracking-[.16em] text-[#ffb39f]">
                Your next favourite meal
              </p>

              <h1 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
                Good food. <span className="text-[#ff7755]">Great mood.</span>
              </h1>

              <p className="mt-2 text-[10px] text-white/60">
                Fresh local favourites delivered right to your door.
              </p>

              <div className="mt-4 flex max-w-sm items-center rounded-lg bg-white p-1 shadow-lg">
                <Search className="ml-2 h-3.5 w-3.5 text-black/35" />
                <span className="flex-1 px-2 text-[9px] text-black/35">
                  Search for dishes or restaurants
                </span>
                <button className="rounded-md bg-[#ff5f36] px-2.5 py-1.5 text-[9px] font-semibold text-white">
                  Search
                </button>
              </div>
            </div>
          </motion.section>

          <section className="mt-5">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold">What are you craving?</h2>
              <button className="flex items-center gap-1 text-[9px] font-medium text-black/45">
                <SlidersHorizontal className="h-3 w-3" />
                Filters
              </button>
            </div>

            <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
              {categories.map((item) => (
                <button
                  onClick={() => setCategory(item)}
                  key={item}
                  className={`shrink-0 rounded-full border px-3 py-1.5 text-[9px] font-medium transition-colors ${
                    category === item
                      ? "border-[#ff5f36] bg-[#ff5f36] text-white"
                      : "border-black/[.08] bg-white text-black/50 hover:border-black/20"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </section>

          <section className="mt-5">
            <Header title="Popular near you" action="See all" />

            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {restaurants.map((restaurant, index) => (
                <motion.article
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 0.14 + index * 0.07 }}
                  whileHover={{ y: -5 }}
                  key={restaurant.name}
                  className="group overflow-hidden rounded-xl border border-black/[.07] bg-white shadow-[0_5px_16px_rgba(63,35,24,.06)]"
                >
                  <div
                    className={`relative grid h-24 place-items-center bg-gradient-to-br ${restaurant.gradient}`}
                  >
                    <span className="text-5xl drop-shadow-lg transition-transform duration-300 group-hover:scale-110">
                      {restaurant.emoji}
                    </span>

                    <span className="absolute left-2 top-2 rounded-full bg-white/90 px-1.5 py-0.5 text-[7px] font-semibold text-[#a03522]">
                      {restaurant.badge}
                    </span>

                    <button className="absolute right-2 top-2 grid h-5 w-5 place-items-center rounded-full bg-white/80 text-black/55">
                      <Heart className="h-2.5 w-2.5" />
                    </button>
                  </div>

                  <div className="p-2.5">
                    <div className="flex justify-between gap-2">
                      <h3 className="truncate text-[10px] font-semibold">
                        {restaurant.name}
                      </h3>
                      <span className="flex items-center gap-0.5 text-[8px] font-medium">
                        <Star className="h-2.5 w-2.5 fill-[#f5ae35] text-[#f5ae35]" />
                        {restaurant.rating}
                      </span>
                    </div>

                    <p className="mt-1 text-[8px] text-black/45">
                      {restaurant.cuisine}
                    </p>

                    <div className="mt-2 flex items-center justify-between text-[8px] text-black/45">
                      <span className="flex items-center gap-1">
                        <Clock3 className="h-2.5 w-2.5" />
                        {restaurant.time}
                      </span>
                      <span>{restaurant.price}</span>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section className="mt-5">
            <Header title="Your usuals" action="View history" />

            <div className="grid gap-3 sm:grid-cols-2">
              <motion.article
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.35 }}
                className="flex items-center gap-3 rounded-xl border border-black/[.07] bg-white p-3"
              >
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-amber-300 to-orange-500 text-2xl">
                  🍗
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-semibold">
                    Butter Chicken Rice Bowl
                  </p>
                  <p className="mt-1 text-[8px] text-black/45">
                    The Yellow Bowl · ₹289
                  </p>
                  <button className="mt-2 flex items-center gap-1 text-[8px] font-semibold text-[#e34d2a]">
                    Order again
                    <ChevronRight className="h-3 w-3" />
                  </button>
                </div>
              </motion.article>

              <motion.article
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.42 }}
                className="relative overflow-hidden rounded-xl bg-[#ffe8d7] p-3"
              >
                <span className="absolute -right-2 -top-3 text-5xl">🛵</span>
                <p className="text-[10px] font-semibold text-[#863819]">
                  Free delivery unlocked!
                </p>
                <p className="mt-1 max-w-[170px] text-[8px] leading-relaxed text-[#a55c3d]">
                  You&apos;ve saved ₹180 on delivery this month.
                </p>
                <button className="mt-3 rounded-md bg-[#ff5f36] px-2 py-1.5 text-[8px] font-semibold text-white">
                  Explore offers
                </button>
              </motion.article>
            </div>
          </section>
        </div>

        <aside className="hidden border-l border-black/[.07] bg-white p-3 xl:block">
          <div className="flex items-center justify-between">
            <h2 className="text-xs font-semibold">Your order</h2>
            <span className="rounded-full bg-[#fff0e9] px-1.5 py-0.5 text-[8px] font-medium text-[#e34d2a]">
              1 item
            </span>
          </div>

          <div className="mt-4 rounded-xl bg-[#fff7f1] p-3">
            <div className="flex gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-amber-300 to-orange-500 text-xl">
                🍗
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[9px] font-semibold">
                  Butter Chicken Rice Bowl
                </p>
                <p className="mt-0.5 text-[8px] text-black/45">
                  Regular · Mild spice
                </p>
              </div>
            </div>

            <div className="mt-3 flex items-center justify-between">
              <div className="flex items-center rounded-md border border-black/[.08] bg-white">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 text-black/50"
                >
                  <Minus className="h-2.5 w-2.5" />
                </button>
                <span className="w-5 text-center text-[9px] font-semibold">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 text-black/50"
                >
                  <Plus className="h-2.5 w-2.5" />
                </button>
              </div>
              <p className="text-[10px] font-semibold">₹{289 * quantity}</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-dashed border-[#f5b096] p-3">
            <div className="flex items-center gap-1.5 text-[9px] font-semibold text-[#d84d2b]">
              <Bike className="h-3.5 w-3.5" />
              Delivery in 22–28 min
            </div>

            <div className="mt-3 flex items-center">
              <span className="h-2 w-2 rounded-full bg-[#ff5f36]" />
              <span className="h-px flex-1 bg-[#ffb39f]" />
              <span className="h-2 w-2 rounded-full bg-[#ffb39f]" />
              <span className="h-px flex-1 bg-[#ffb39f]" />
              <span className="h-2 w-2 rounded-full bg-[#ffb39f]" />
            </div>

            <p className="mt-2 text-[8px] text-black/45">
              Restaurant confirms your order in 3 minutes.
            </p>
          </div>

          <div className="mt-4 space-y-1.5 text-[9px] text-black/50">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>₹{289 * quantity}</span>
            </div>
            <div className="flex justify-between">
              <span>Delivery</span>
              <span className="text-emerald-600">FREE</span>
            </div>
            <div className="mt-2 flex justify-between border-t border-black/[.07] pt-2 text-[10px] font-semibold text-black">
              <span>Total</span>
              <span>₹{289 * quantity}</span>
            </div>
          </div>

          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ y: -2 }}
            className="mt-4 flex w-full items-center justify-center gap-1 rounded-lg bg-[#ff5f36] py-2.5 text-[9px] font-semibold text-white shadow-[0_8px_18px_rgba(255,95,54,.25)]"
          >
            Checkout
            <ChevronRight className="h-3 w-3" />
          </motion.button>
        </aside>
      </div>
    </main>
  );
}

function Header({ title, action }: { title: string; action: string }) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-sm font-semibold">{title}</h2>
      <button className="flex items-center gap-0.5 text-[9px] font-medium text-[#e34d2a]">
        {action}
        <ChevronRight className="h-3 w-3" />
      </button>
    </div>
  );
}