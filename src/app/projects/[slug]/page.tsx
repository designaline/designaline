"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import { projects } from "../../../data/projects";
import { useKeenSlider } from "keen-slider/react";
import type { KeenSliderInstance } from "keen-slider/react"; // ✅ import type
import "keen-slider/keen-slider.min.css";
import { useState, useMemo } from "react";

// ✅ Strongly typed autoplay plugin
function AutoplayPlugin(ms = 3000) {
  return (slider: KeenSliderInstance) => {
    let timeout: ReturnType<typeof setTimeout>;
    let mouseOver = false;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }
    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        slider.next();
      }, ms);
    }

    slider.on("created", () => {
      slider.container.addEventListener("mouseover", () => {
        mouseOver = true;
        clearNextTimeout();
      });
      slider.container.addEventListener("mouseout", () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    slider.on("dragStarted", clearNextTimeout);
    slider.on("animationEnded", nextTimeout);
    slider.on("updated", nextTimeout);
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      loop: true,
    },
    [AutoplayPlugin(4000)]
  );

  const project = useMemo(
    () => projects.find((p) => p.slug === params.slug),
    [params.slug]
  );

  if (!project) return notFound();

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50">
      {/* Carousel container with margins and rounded corners */}
      <div
        ref={sliderRef}
        className="keen-slider w-full max-w-6xl h-[90vh] mt-6 mb-6 rounded-2xl overflow-hidden shadow-xl relative"
      >
        {project.images.map((img, i) => (
          <div key={i} className="keen-slider__slide relative h-[90vh]">
            <Image
              src={img}
              alt={`${project.title} image ${i + 1}`}
              fill
              className="object-cover object-center" // ✅ center image fill
              priority={i === 0}
            />
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {project.images.map((_, i) => (
          <button
            key={i}
            onClick={() => instanceRef.current?.moveToIdx(i)}
            className={`w-3 h-3 rounded-full transition ${
              currentSlide === i ? "bg-black" : "bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Overlay text */}
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-black/60 to-transparent p-8 text-white flex flex-col justify-end rounded-b-2xl">
        <h1 className="text-4xl font-bold">{project.title}</h1>
        <p className="text-lg max-w-2xl mt-2">{project.description}</p>
      </div>
    </div>
  );
}
