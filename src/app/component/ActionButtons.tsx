"use client";

import { useState } from "react";
import { AppIcons } from "../utils/Icon";

interface ActionButtonsProps {
  imageSrc?: string;
  downloadFileName?: string;
  googleDriveUrl?: string;
  shareTitle?: string;
  shareText?: string;
}

export function ActionButtons({
  imageSrc = "/Images/placeholder/frame.png",
  downloadFileName = "ourmemoirs-photo.png",
  googleDriveUrl = "#",
  shareTitle = "Our Memoirs",
  shareText = "Look at my captured photobooth memory from Our Memoirs!",
}: ActionButtonsProps) {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 2800);
  };

  const handleDownload = () => {
    try {
      const link = document.createElement("a");
      link.href = imageSrc;
      link.download = downloadFileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast("Download started!");
    } catch {
      window.open(imageSrc, "_blank");
    }
  };

  const getCurrentUrl = () => {
    if (typeof window !== "undefined") {
      return window.location.href;
    }
    return "https://ourmemoirs.com";
  };

  const handleNativeShare = async () => {
    const url = getCurrentUrl();
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: shareTitle,
          text: shareText,
          url,
        });
        return;
      } catch (err) {
        // User cancelled or share failed, fallback to copy
        if ((err as Error).name !== "AbortError") {
          copyToClipboard(url);
        }
      }
    } else {
      copyToClipboard(url);
    }
  };

  const copyToClipboard = async (text: string, customMessage?: string) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(customMessage || "Link copied to clipboard!");
    } catch {
      showToast("Unable to copy link.");
    }
  };

  const handleShareFacebook = () => {
    const url = encodeURIComponent(getCurrentUrl());
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleShareWhatsApp = () => {
    const url = encodeURIComponent(getCurrentUrl());
    const text = encodeURIComponent(`${shareText} ${getCurrentUrl()}`);
    window.open(
      `https://api.whatsapp.com/send?text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleShareX = () => {
    const url = encodeURIComponent(getCurrentUrl());
    const text = encodeURIComponent(shareText);
    window.open(
      `https://twitter.com/intent/tweet?url=${url}&text=${text}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleShareInstagram = () => {
    copyToClipboard(
      getCurrentUrl(),
      "Link copied! Paste and share it on Instagram."
    );
  };

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-[290px] md:max-w-[310px]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-[#342114] text-white text-xs sm:text-sm font-medium px-4 py-2.5 rounded-full shadow-lg animate-fade-in flex items-center gap-2">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Button 1: Download Image */}
      <button
        type="button"
        onClick={handleDownload}
        className="w-full bg-white text-neutral-800 hover:bg-neutral-50 active:scale-[0.98] border border-neutral-200/80 shadow-xs hover:shadow-md transition-all duration-200 rounded-full py-3 px-5 flex items-center justify-center gap-2 text-sm md:text-[18px] font-semibold cursor-pointer"
      >
        <AppIcons.Download className="w-5 h-5 text-neutral-800 shrink-0" />
        <span className="tracking-[-0.96px]">Download the Image</span>
      </button>

      {/* Button 2: Share Image Pill */}
      <button
        type="button"
        onClick={handleNativeShare}
        className="w-full bg-white text-neutral-800 hover:bg-neutral-50 active:scale-[0.98] border border-neutral-200/80 shadow-xs hover:shadow-md transition-all duration-200 rounded-full py-3 px-5 flex items-center justify-between gap-2 text-sm md:text-[18px] font-semibold cursor-pointer"
      >
        <div className="flex items-center gap-1">
          <AppIcons.Share className="w-4 h-4 text-neutral-800 shrink-0" />
          <span className="tracking-[-0.96px]">Share Image</span>
        </div>

        <div className="flex gap-1.5 md:gap-2 items-center">
          <AppIcons.Facebook className="w-5 h-5" />
          <AppIcons.WhatsAppColor className="w-5 h-5" />
          <AppIcons.X className="w-4 h-4" />
          <AppIcons.InstagramColor className="w-5 h-5" />
        </div>
      </button>

      {/* Button 3: Google Drive Download */}
      <a
        href={googleDriveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full bg-[#E5E3E0] hover:bg-[#DDD9D5] active:scale-[0.98] text-neutral-800 transition-all duration-200 rounded-full py-3 px-5 flex items-center justify-center gap-2 text-sm md:text-[18px] font-semibold cursor-pointer shadow-2xs"
      >
        <AppIcons.GoogleDriveColor className="w-5 h-4 shrink-0" />
        <span className="tracking-[-0.96px]">Google Drive Download</span>
      </a>
    </div>
  );
}
