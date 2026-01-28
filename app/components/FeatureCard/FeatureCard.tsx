"use client";

import Image from "next/image";
import React from "react";

interface FeatureItem {
    emoji: string;
    label: string;
    description: string;
}

interface FeatureCardProps {
    badge: string;
    title: string;
    description: string;
    items: FeatureItem[];
    imageSrc: string;
    imageAlt: string;
    imagePosition?: "left" | "right";
}

export default function FeatureCard({
    badge,
    title,
    description,
    items,
    imageSrc,
    imageAlt,
    imagePosition = "right",
}: FeatureCardProps) {
    const isImageLeft = imagePosition === "left";

    return (
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Content Section */}
                <div
                    className={
                        isImageLeft
                            ? "order-2 md:order-2"
                            : "order-1 md:order-1"
                    }
                >
                    <div className="inline-block bg-gray-100 text-gray-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        {badge}
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        {title}
                    </h2>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {description}
                    </p>
                    <ul className="space-y-3 text-gray-700">
                        {items.map((item, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <span className="text-2xl">{item.emoji}</span>
                                <div>
                                    <strong className="text-gray-900">
                                        {item.label}:
                                    </strong>{" "}
                                    {item.description}
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Image Section */}
                <div
                    className={`${isImageLeft ? "order-1 md:order-1" : "order-2 md:order-2"} bg-gray-100 rounded-xl overflow-hidden border-2 border-gray-300`}
                >
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={600}
                        height={400}
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
