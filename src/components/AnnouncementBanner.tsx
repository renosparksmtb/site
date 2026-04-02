import { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/Icon";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const AnnouncementBanner = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="relative z-[60] bg-secondary text-secondary-foreground">
      <div className="container-narrow flex flex-col items-center gap-2 px-4 py-2.5 sm:flex-row sm:justify-center sm:gap-4">
        <p className="text-sm font-bold sm:text-base">
          2026 NICA Registration is OPEN — get Practice Ready!
        </p>
        <div className="flex gap-2">
          <a
            href="https://pitzone.nationalmtb.org/users/sign_in"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-primary px-4 py-1.5 text-xs font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            Log into Pit Zone
          </a>
          <Link
            to="/2026"
            className="rounded-md border border-secondary-foreground/40 px-4 py-1.5 text-xs font-semibold transition-colors hover:bg-secondary-foreground/10"
          >
            2026 Season Info
          </Link>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full p-1 transition-opacity hover:opacity-70"
          aria-label="Dismiss announcement"
        >
          <Icon icon={faXmark} className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBanner;
