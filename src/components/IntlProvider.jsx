"use client";

import { NextIntlClientProvider } from "next-intl";
import { usePathname } from "next/navigation";
import { useMessages } from "../lib/i18n";

export default function IntlProvider({ children }) {
  const pathname = usePathname();
  const locale = pathname.split("/")[1] || "en"; // Get locale from URL
  const messages = useMessages(locale);

  console.log("✅ IntlProvider is rendering");
  console.log("🔹 Locale detected:", locale);
  console.log("🔹 Messages loaded:", messages);

  return (
    <NextIntlClientProvider
      messages={messages}
      locale={locale}
      defaultLocale="en"
      timeZone="Europe/Berlin"
    >
      {children}
    </NextIntlClientProvider>
  );
}
