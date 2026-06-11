'use client'

import Image from 'next/image'
import { useState } from 'react'
import type { PortfolioItem } from '@/lib/data/portfolio'

interface PortfolioCardProps {
  item: PortfolioItem
}

export default function PortfolioCard({ item }: PortfolioCardProps) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="group relative rounded-xl overflow-hidden bg-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-64 w-full">
        {imgError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200 gap-2">
            <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v13.5a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V9.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            <span className="text-xs text-gray-400 font-medium uppercase tracking-wide">Imagem indisponível</span>
          </div>
        ) : (
          <Image
            src={item.image}
            alt={item.imageAlt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onError={() => setImgError(true)}
          />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-nt-teal-dark/90 via-nt-teal-dark/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {/* Content on hover */}
        <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-nt-gray-light text-xs font-medium uppercase tracking-wider mb-1">
            {item.year && `${item.year} · `}{item.location}
          </p>
          <p className="text-white text-sm leading-relaxed">{item.description}</p>
        </div>
      </div>
      <div className="p-4">
        <span className="inline-block text-xs font-medium text-nt-teal uppercase tracking-wide mb-1">
          {item.subtitle}
        </span>
        <h3 className="font-display font-semibold text-gray-900 text-base leading-snug">
          {item.title}
        </h3>
      </div>
    </div>
  )
}
