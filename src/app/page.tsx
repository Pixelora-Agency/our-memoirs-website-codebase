import { ActionButtons } from "./component/ActionButtons";
import { HeaderLogo } from "./component/HeaderLogo";
import { PhotoFrame } from "./component/PhotoFrame";
import { SocialContacts } from "./component/SocialContacts";

export default function Home() {
  return (
    <main className="overflow-hidden min-h-screen w-full bg-[#F5F5F5] flex flex-col justify-center items-center px-4 py-6 sm:px-6 sm:py-10 lg:px-12 selection:bg-primary/20">
      <div className="w-full max-w-5xl mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-16 xl:gap-24">
        {/* Mobile Header: Visible only on mobile/tablet (< lg) */}
        <header className="md:hidden w-full flex justify-center mb-4">
          <HeaderLogo />
        </header>

        {/* Left Section: Photobooth Frame Presentation */}
        <section
          aria-label="Photo Preview"
          className="flex justify-center items-center w-full lg:w-auto my-2 lg:my-0"
        >
          <PhotoFrame
            imageSrc="/Images/placeholder/frame.png"
            alt="Captured Photobooth Frame"
          />
        </section>

        {/* Right Section (Desktop) / Bottom Section (Mobile): Details and Actions */}
        <section
          aria-label="Photo Actions and Info"
          className="flex flex-col items-center text-center mt-5 lg:mt-0 gap-6 sm:gap-4 max-w-sm w-full"
        >
          {/* Desktop Header: Visible only on desktop (>= lg) */}
          <div className="hidden lg:block mb-1">
            <HeaderLogo />
          </div>

          {/* Date Badge */}
          <div className="inline-flex items-center justify-center px-3 py-1 rounded-[14px] bg-primary text-white text-sm md:text-[18px] font-medium tracking-[-0.96px] shadow-xs select-none">
            01 November 2026
          </div>

          {/* Headline */}
          <div className="text-center select-none">
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-[#1F1C1A] tracking-tight leading-[100%] tracking-[-2.56px]">
              <span>Your Photo is</span>
              <span className="block mt-0.5">
                Captured{" "}
                <span className="font-pinyon font-[family-name:var(--font-pinyon-script)] font-normal italic text-[36px] sm:text-[44px] lg:text-[48px] text-primary">
                  Perfecty
                </span>
              </span>
            </h1>
          </div>

          {/* Download & Share Actions */}
          <ActionButtons
            imageSrc="/Images/placeholder/frame.png"
            downloadFileName="ourmemoirs-01-nov-2026.png"
            googleDriveUrl="https://drive.google.com"
          />

          {/* Help & Social Contacts Footer */}
          <div className="mt-1 flex flex-col items-center gap-3">
            <div className="text-center text-xs sm:text-[13px] text-neutral-600 font-medium leading-snug">
              <p>Having Trouble or any suggestion?</p>
              <p className="mt-0.5 font-semibold text-neutral-700">Contact Us!</p>
            </div>

            <SocialContacts
              whatsappUrl="https://wa.me/"
              email="mailto:support@ourmemoirs.com"
              instagramUrl="https://instagram.com/"
              tiktokUrl="https://tiktok.com/"
            />
          </div>
        </section>
      </div>
    </main>
  );
}
