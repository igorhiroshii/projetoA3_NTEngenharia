'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { portfolioItems, categories, type PortfolioCategory } from '@/lib/data/portfolio'
import PortfolioCard from '@/components/ui/PortfolioCard'

export default function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState<PortfolioCategory | 'todos'>('todos')

  const filtered =
    activeCategory === 'todos'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <div>
      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeCategory === cat.value
                ? 'bg-nt-teal text-white shadow-sm'
                : 'bg-nt-gray-light text-gray-700 hover:bg-nt-teal/10 hover:text-nt-teal'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
            >
              <PortfolioCard item={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <p>Nenhum projeto encontrado nesta categoria.</p>
        </div>
      )}
    </div>
  )
}
