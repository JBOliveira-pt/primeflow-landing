"use client";

import DynamicImage from "@/app/components/DynamicImage/DynamicImage";

interface FeatureCardProps {
    badge: string;
    title: string;
    description: string;
    items: Array<{
        emoji: string;
        label: string;
        description: string;
    }>;
    imageName: string; // Nome da imagem no banco
    imageAlt: string;
    imagePosition: "left" | "right";
}

export default function FeatureCard({
    badge,
    title,
    description,
    items,
    imageName,
    imageAlt,
    imagePosition,
}: FeatureCardProps) {
    const isImageLeft = imagePosition === "left";

    return (
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden w-full max-w-full">
            <div className="grid md:grid-cols-2 gap-4 sm:gap-8 p-4 sm:p-8 items-center">
                {/* Text Section */}
                <div
                    className={`${isImageLeft ? "order-2" : "order-1"} space-y-6`}
                >
                    <span className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-sm font-semibold">
                        {badge}
                    </span>
                    <h3 className="text-3xl font-bold text-gray-900">
                        {title}
                    </h3>
                    <p className="text-gray-600 text-lg">{description}</p>
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
                <div className={`${isImageLeft ? "order-1" : "order-2"} flex items-center justify-center`}>
                    <DynamicImage
                        imageName={imageName}
                        fallbackSrc="/images/placeholder.svg"
                        width={800}
                        height={533}
                        className="rounded-xl border-2 border-gray-300 w-full h-auto"
                    />
                </div>
            </div>
        </div>
    );
}
