"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

interface TestimonialData {
  imageUrl: string;
  name: string;
  score: number; // 1-5 stars
  testimonial: string[]; // Array of paragraphs
}

interface TestimonialCarouselProps {
  testimonials: TestimonialData[];
  autoPlayInterval?: number; // In milliseconds
  className?: string;
}

export default function TestimonialCarousel({
  testimonials,
  autoPlayInterval = 5000, // Default to 5 seconds
  className = "",
}: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Handle auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, autoPlayInterval);

    return () => clearInterval(intervalId);
  }, [isAutoPlaying, autoPlayInterval, testimonials.length]);

  // Navigate to previous slide
  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false); // Pause autoplay when manual navigation is used
  }, [testimonials.length]);

  // Navigate to next slide
  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setIsAutoPlaying(false); // Pause autoplay when manual navigation is used
  }, [testimonials.length]);

  // Jump to a specific slide
  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false); // Pause autoplay when manual navigation is used
  }, []);

  // No testimonials to display
  if (testimonials.length === 0) {
    return null;
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className={`w-full h-full flex flex-col ${className}`}>
      {/* Navigation controls */}
      <div className="flex items-center justify-center space-x-6 mb-5">
        {/* Previous button */}
        <button
          onClick={goToPrevious}
          className="bg-background rounded-full p-2 shadow-sm transition-colors"
          aria-label="Previous testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* Dots indicators */}
        <div className="flex justify-center space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-primary w-4" : "bg-gray-300"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            ></button>
          ))}
        </div>

        {/* Next button */}
        <button
          onClick={goToNext}
          className="bg-background rounded-full p-2 shadow-sm transition-colors"
          aria-label="Next testimonial"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Main carousel content (card) */}
      <div className="w-full flex-grow bg-background rounded-xl p-5 shadow-sm">
        {/* Header: Profile Image on left, Name and Stars on right */}
        <div className="flex items-center mb-5">
          {/* Profile image */}
          <div className="relative w-16 h-16 rounded-full overflow-hidden flex-shrink-0">
            <Image
              src={currentTestimonial.imageUrl}
              alt={currentTestimonial.name}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>

          {/* Name and Star rating */}
          <div className="ml-4">
            <h3 className="font-bold text-lg">{currentTestimonial.name}</h3>
            <div className="flex space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg
                  key={i}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={i < currentTestimonial.score ? "currentColor" : "none"}
                  stroke={
                    i < currentTestimonial.score ? "none" : "currentColor"
                  }
                  className={`w-4 h-4 ${
                    i < currentTestimonial.score
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                  />
                </svg>
              ))}
            </div>
          </div>
        </div>

        {/* Body: Testimonial text using full width */}
        <div className="overflow-auto">
          <div className="text-left w-full space-y-4">
            {currentTestimonial.testimonial.map((paragraph, idx) => (
              <p key={idx} className="text-foreground/80 italic">
                {idx === 0 ? (
                  <span className="text-xl text-primary font-bold">
                    &ldquo;
                  </span>
                ) : null}
                {paragraph}
                {idx === currentTestimonial.testimonial.length - 1 ? (
                  <span className="text-xl text-primary font-bold">
                    &rdquo;
                  </span>
                ) : null}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
