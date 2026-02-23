import { getSetting } from "@/lib/cms"
import CardClient from "./card-client"

export default async function CardPage() {
  const [phone, email, address, siteUrl, instagramUrl, youtubeUrl, twitterUrl, cardName, cardTitle, cashappUrl, zelleNumber] = await Promise.all([
    getSetting("phone").catch(() => null),
    getSetting("email").catch(() => null),
    getSetting("address").catch(() => null),
    getSetting("site_url").catch(() => null),
    getSetting("instagram_url").catch(() => null),
    getSetting("youtube_url").catch(() => null),
    getSetting("twitter_url").catch(() => null),
    getSetting("card_name").catch(() => null),
    getSetting("card_title").catch(() => null),
    getSetting("cashapp_url").catch(() => null),
    getSetting("zelle_number").catch(() => null),
  ])

  return (
    <CardClient
      phone={phone ?? "9153733640"}
      email={email ?? "aidan@kryptoxotis.io"}
      address={address ?? "El Paso, Texas"}
      siteUrl={siteUrl ?? "https://kryptoxotis.io"}
      instagramUrl={instagramUrl ?? "https://instagram.com/Kryptoxotis"}
      youtubeUrl={youtubeUrl ?? "https://youtube.com/Kryptoxotis"}
      twitterUrl={twitterUrl ?? "https://twitter.com/Kryptoxotis"}
      cardName={cardName ?? "Aidan Gaystardo"}
      cardTitle={cardTitle ?? "Programming Engineer"}
      cashappUrl={cashappUrl ?? "https://cash.app/$aidangaystardo"}
      zelleNumber={zelleNumber ?? "9153733640"}
    />
  )
}
