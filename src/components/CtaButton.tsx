import siteContent from "@/content/siteContent";

export const ctaButtonColorCn =
  "bg-pink-400 text-white font-medium hover:bg-pink-500 transition duration-300";

export function CtaButton(props: { content: string; className?: string }) {
  return (
    <a
      href={`https://wa.me/${siteContent.site.whatsappNumber}`}
      className={`${props.className} ${ctaButtonColorCn} py-3 px-8 rounded-full`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {props.content}
    </a>
  );
}
