import { AppIcons } from "../utils/Icon";

interface SocialContactsProps {
  whatsappUrl?: string;
  email?: string;
  instagramUrl?: string;
  tiktokUrl?: string;
}

export function SocialContacts({
  whatsappUrl = "https://wa.me/",
  email = "mailto:contact@ourmemoirs.com",
  instagramUrl = "https://instagram.com/ourmemoirs",
  tiktokUrl = "https://tiktok.com/@ourmemoirs",
}: SocialContactsProps) {
  const contactLinks = [
    {
      name: "WhatsApp",
      href: whatsappUrl,
      icon: <AppIcons.WhatsApp className="w-5 h-5" />,
      external: true,
    },
    {
      name: "Email",
      href: email,
      icon: <AppIcons.Mail className="w-5 h-5" />,
      external: false,
    },
    {
      name: "Instagram",
      href: instagramUrl,
      icon: <AppIcons.Instagram className="w-5 h-5" />,
      external: true,
    },
    {
      name: "TikTok",
      href: tiktokUrl,
      icon: <AppIcons.TikTok className="w-4 h-4" />,
      external: true,
    },
  ];

  return (
    <div className="flex items-center justify-center gap-3.5 sm:gap-4 select-none">
      {contactLinks.map((item) => (
        <a
          key={item.name}
          href={item.href}
          target={item.external ? "_blank" : undefined}
          rel={item.external ? "noopener noreferrer" : undefined}
          aria-label={item.name}
          className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-neutral-300/80 bg-white flex items-center justify-center text-neutral-800 shadow-2xs hover:border-primary hover:text-primary hover:scale-110 active:scale-95 transition-all duration-200"
        >
          {item.icon}
        </a>
      ))}
    </div>
  );
}
