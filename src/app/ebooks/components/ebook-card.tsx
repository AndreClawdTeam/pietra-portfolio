import { Ebook } from "@/services/ebooks/types";
import Image from "next/image";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/Avatar";
import { ExternalLink } from "@/components/ExternalLink";
import { InternalLink } from "@/components/InternalLink";

interface EbookCardProps {
  ebook: Ebook;
}

function EbookCard({ ebook }: EbookCardProps) {
  return (
    <div className="grid grid-cols-1 group bg-white p-4 rounded-xl">
      {ebook.thumbnailImage ? (
        <div className="relative overflow-hidden rounded-lg w-full aspect-square">
          <Image
            src={ebook.thumbnailImage}
            fill
            alt={ebook.title}
            className="object-contain"
          />
        </div>
      ) : null}
      <div className="flex flex-col justify-between py-1">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-primary mt-4 md:h-[75px] md:leading-6 flex items-center justify-center md:px-4">
            {ebook.title}
          </h2>
          <p className="text-sm text-muted-foreground my-2 max-h-[100px] md:h-[100px] overflow-auto text-justify md:px-4 indent-4 border-primary/20">
            {ebook.description}
          </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row mt-4 items-center justify-center md:divide-x divide-accent">
          <InternalLink
            content="Ver mais"
            link={`/ebooks/${ebook.id}`}
            variant="ghost"
            className="md:pr-6"
          />
          <ExternalLink
            content="COMPRAR AGORA"
            link={ebook.link}
            className="md:ml-6"
          />
        </div>
        <div className="flex items-center justify-center gap-3 text-muted-foreground mt-4">
          <Avatar className="w-6 h-6 border">
            <AvatarImage src={ebook.author.avatar} alt={ebook.author.name} />
            <AvatarFallback>
              {ebook.author.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <div className="flex items-center gap-2 text-sm">
            <span>{ebook.author.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { EbookCard };
