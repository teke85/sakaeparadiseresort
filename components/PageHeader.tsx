import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
}

const PageHeader = ({ title, subtitle, imageSrc }: PageHeaderProps) => {
  return (
    <div className="relative h-[50vh] md:h-[60vh] w-full">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/70 z-10"></div>
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-white font-[family-name:var(--font-playfair)] text-4xl md:text-6xl font-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white text-xl md:text-2xl font-[family-name:var(--font-jost)] max-w-2xl">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
