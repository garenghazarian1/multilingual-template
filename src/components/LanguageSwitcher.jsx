"use client";

import { useRouter } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();

  const changeLanguage = (newLocale) => {
    router.push(`/${newLocale}`); // Change URL to switch locale
  };

  return (
    <div>
      <button onClick={() => changeLanguage("en")}>🇬🇧 English</button>
      <button onClick={() => changeLanguage("am")}>🇦🇲 Հայերեն</button>
      <button onClick={() => changeLanguage("ar")}>🇦🇪 العربية</button>
      <button onClick={() => changeLanguage("ru")}>🇷🇺 Русский</button>
    </div>
  );
}
