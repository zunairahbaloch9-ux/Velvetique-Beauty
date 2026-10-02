import React, { useState } from 'react';
import { Clock, ArrowRight, X, User, Calendar, BookOpen } from 'lucide-react';
import { BLOG_POSTS } from '../data/blogs';
import { BlogPost } from '../types';

export const BlogPage: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <div className="bg-[#FAF7F5] min-h-screen py-12 sm:py-20 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-semibold tracking-[0.25em] text-[#93444B] uppercase">
            Skin Intelligence &amp; Care
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#2A1E20] tracking-tight mt-1 mb-3">
            BEAUTY JOURNAL
          </h1>
          <p className="text-xs sm:text-sm text-[#735D62] font-light leading-relaxed">
            Expert dermatologist guides, clean formulation science, and daily routines for your most radiant self.
          </p>
          <div className="w-12 h-0.5 bg-[#D19B9E] mx-auto mt-4" />
        </div>

        {/* 6 Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl border border-[#EDE1E1] overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#FAF6F4]">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-xs text-[#93444B] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full shadow-xs">
                    {post.category}
                  </span>
                </div>

                {/* Body Details */}
                <div className="p-6">
                  {/* Date & Read time */}
                  <div className="flex items-center gap-2 text-[11px] text-[#8C767B] mb-2 font-medium">
                    <span>{post.date}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    onClick={() => setSelectedPost(post)}
                    className="font-serif text-lg sm:text-xl font-medium text-[#2A1E20] group-hover:text-[#93444B] transition-colors leading-snug cursor-pointer line-clamp-2 mb-2"
                  >
                    {post.title}
                  </h2>

                  {/* Short excerpt */}
                  <p className="text-xs text-[#634E52] font-light leading-relaxed line-clamp-3">
                    {post.shortDescription}
                  </p>
                </div>
              </div>

              {/* Read More Link */}
              <div className="px-6 pb-6 pt-2">
                <button
                  onClick={() => setSelectedPost(post)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#93444B] group-hover:text-[#2A1E20] transition-colors cursor-pointer"
                >
                  <span>READ MORE</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Article Reader Modal */}
        {selectedPost && (
          <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-12 bg-[#2A1E20]/60 backdrop-blur-sm flex items-center justify-center animate-in fade-in duration-200">
            <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#EDE1E1] overflow-hidden max-h-[85vh] flex flex-col">
              {/* Modal Header */}
              <div className="p-6 border-b border-[#F0E6E6] flex items-center justify-between bg-[#FAF7F5] shrink-0">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#93444B]">
                  {selectedPost.category}
                </span>
                <button
                  onClick={() => setSelectedPost(null)}
                  className="p-1.5 text-stone-400 hover:text-[#2A1E20] hover:bg-stone-200/50 rounded-full transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Article Content */}
              <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
                <div>
                  <h1 className="font-serif text-2xl sm:text-3xl font-medium text-[#2A1E20] leading-snug">
                    {selectedPost.title}
                  </h1>
                  <div className="flex items-center gap-4 text-xs text-[#8C767B] mt-3 pb-4 border-b border-[#F0E6E6]">
                    <span className="flex items-center gap-1">
                      <User className="w-3.5 h-3.5" />
                      {selectedPost.author}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      {selectedPost.date}
                    </span>
                    <span>·</span>
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      {selectedPost.readTime}
                    </span>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden aspect-[16/9] shadow-sm">
                  <img
                    src={selectedPost.image}
                    alt={selectedPost.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-4 text-xs sm:text-sm text-[#4E393D] leading-relaxed font-light">
                  {selectedPost.content.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Modal Footer */}
              <div className="p-5 border-t border-[#F0E6E6] bg-[#FAF7F5] flex justify-end shrink-0">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 bg-[#2A1E20] hover:bg-[#8A3A43] text-white text-xs font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
