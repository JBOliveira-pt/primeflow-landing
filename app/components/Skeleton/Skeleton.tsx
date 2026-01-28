export default function FeatureSkeleton() {
    return (
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-2xl animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Text Content Skeleton */}
                <div className="space-y-6">
                    {/* Badge */}
                    <div className="h-8 bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-full w-48"></div>

                    {/* Title */}
                    <div className="space-y-3">
                        <div className="h-8 bg-gradient-to-r from-gray-600/50 to-gray-700/50 rounded-lg w-3/4"></div>
                    </div>

                    {/* Description */}
                    <div className="space-y-2 pt-2">
                        <div className="h-4 bg-gray-600/40 rounded w-full"></div>
                        <div className="h-4 bg-gray-600/40 rounded w-4/5"></div>
                    </div>

                    {/* Items List - REDUZIDO PARA 3 ITENS */}
                    <div className="space-y-3 pt-4">
                        {[...Array(3)].map((_, i) => (
                            <div
                                key={i}
                                className="flex items-start gap-3 bg-white/5 rounded-xl p-3 border border-white/10"
                            >
                                {/* Emoji placeholder */}
                                <div className="w-6 h-6 bg-gradient-to-br from-gray-500/50 to-gray-600/50 rounded-full flex-shrink-0"></div>

                                {/* Text content */}
                                <div className="flex-1 space-y-1.5">
                                    <div className="h-4 bg-gray-600/40 rounded w-28"></div>
                                    <div className="h-3 bg-gray-600/30 rounded w-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image Skeleton - Adaptado ao formato real */}
                <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-gray-600/30 via-gray-700/30 to-gray-800/30 rounded-2xl border-2 border-white/10 shadow-xl overflow-hidden">
                        {/* Placeholder content (simula dashboard/tabela) */}
                        <div className="p-6 space-y-3">
                            <div className="h-5 bg-white/10 rounded w-3/4 animate-pulse"></div>
                            <div className="space-y-2">
                                <div className="h-3 bg-white/5 rounded animate-pulse"></div>
                                <div className="h-3 bg-white/5 rounded w-5/6 animate-pulse"></div>
                                <div className="h-3 bg-white/5 rounded w-4/6 animate-pulse"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
