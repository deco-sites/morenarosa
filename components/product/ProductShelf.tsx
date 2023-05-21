import { Picture } from "deco-sites/std/components/Picture.tsx";
import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Image {
  src: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description When you click you go to
   */
  href: string;
}

export interface Props {
  title: string;
  images: Image[];
}

export default function ImageGallery(params: Props) {
  return (
    <div className="px-10 py-10 w-full">
      <p className="text-4xl text-center">{params.title}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mt-11 items-center  mx-auto p-0 m-0 justify-between">
        {params.images?.map((image) => (
          <div
            href={image.href}
            className="w-full flex items-center overflow-hidden justify-center p-0 m-0 "
          >
            <Picture>
              <img
                className="w-full h-auto ease-in-out transform hover:scale-110 transition-transform duration-750 p-0 m-0"
                src={image.src}
                alt={image.alt}
                decoding="async"
                loading="lazy"
              />
            </Picture>
          </div>
        ))}
      </div>
    </div>
  );
}