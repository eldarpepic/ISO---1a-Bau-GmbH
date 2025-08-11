import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface ProjectGalleryProps {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  href?: string;
  className?: string;
  category: string;
}

export function ProjectGallery({
  id,
  title,
  imageSrc,
  category,
}: ProjectGalleryProps) {
  return (
    <Link
      href={`/ProjectDetails/${id}`}
      className='group relative block overflow-hidden rounded-lg cursor-pointer'
    >
      <div className='aspect-[4/3] w-full overflow-hidden relative'>
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-105'
        />

        <div className='absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-0'></div>

        <div className='absolute inset-0 flex flex-col justify-end p-6 text-white transition-opacity duration-300 group-hover:opacity-0'>
          <div className='mb-2 text-sm font-medium text-[#06f]'>{category}</div>
          <h3 className='text-lg font-semibold'>{title}</h3>
          <div className='mt-2 inline-flex items-center text-sm text-white/90 hover:text-white'>
            Details ansehen <ArrowUpRight className='ml-1 h-4 w-4' />
          </div>
        </div>
      </div>
    </Link>
  );
}
