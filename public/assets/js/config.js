// demo values: replace per customer (couple, venue, date, contact)
/** Wedding invitation: pearl event card and controlled opening. */
window.INVITATION_CONFIG = {
  "site": {
    "language": "en-GB",
    "title": "Annabelle & Zachary — Wedding Invitation",
    "description": "With the blessings of God, Annabelle Calloway & Zachary Fenwick invite you to their wedding on Saturday, 20 February 2027 in Canterbury, Kent.",
    "ogTitle": "Wedding Invitation — Annabelle & Zachary",
    "ogDescription": "Tap to Open · Wedding · Saturday, 20 February 2027"
  },
  "couple": {
    "bride": "Annabelle Calloway",
    "groom": "Zachary Fenwick",
    "separator": "&"
  },
  "theme": {
    "maroon": "#705236",
    "deepMaroon": "#705236",
    "ivory": "#fcfaf6",
    "paper": "#f2ece0",
    "text": "#705236",
    "muted": "#705236",
    "gold": "#A08048",
    "paleGold": "#e7d7ae"
  },
  "media": {
    "introVideo": "./media/ribbon-doves-intro-v3-fast.mp4",
    "introPoster": "./assets/images/ribbon-poster-v2.jpg",
    "heroPoster": "./assets/images/church-couple.webp",
    "monogram": "./assets/images/gold-az-monogram-custom.png",
    "ogImage": "https://talvoco-wedding-b3.vercel.app/assets/images/wedding-invite.jpg",
    "music": "./media/audio-5.mp3",
    "divider": "./assets/images/divider.png",
    "scratchBackground": "./assets/images/church-courtyard.webp",
    "formalBackground": "./assets/images/formal-ivory-floral.webp",
    "eventBackground": "./assets/images/pearl-floral-event.webp",
    "blessingsBackground": "./assets/images/closing-evening-garden.webp",
    "hands": "./assets/images/hands.webp",
    "verseBackground": "./assets/images/church-courtyard.webp"
  },
  "opening": {
    "label": "Open invitation",
    "accessibleLabel": "Open wedding invitation",
    "musicVolume": 0.3,
    "transitionMs": 300,
    "playbackTimeoutMs": 12000,
    "heroTextDelayMs": 4500,
    "chromeDelayMs": 2400
  },
  "hero": {
    "bride": "Annabelle",
    "groom": "Zachary",
    "blessing": "With God’s blessing",
    "families": "Together with our families",
    "occasions": "Wedding Ceremony",
    "scroll": "Scroll down",
    "date": "20 February 2027"
  },
  "formal": {
    "eyebrow": "With the blessings of God",
    "invitation": "Together with our families, we cordially invite you to share in the joy and honour us with your presence at the wedding of",
    "brideRelation": "Daughter of",
    "brideParents": "Mr & Mrs Edward Calloway",
    "joining": "and",
    "groomRelation": "Son of",
    "groomParents": "Mr & Mrs Richard Fenwick",
    "closing": ""
  },
  "scratch": {
    "eyebrow": "A date to remember",
    "title": "Save the date",
    "coverLabel": "Reveal",
    "threshold": 0.45,
    "accessibilityHint": "scratch, or press Enter or Space",
    "items": [
      {
        "value": "20",
        "label": "Day"
      },
      {
        "value": "FEB",
        "label": "Month"
      },
      {
        "value": "2027",
        "label": "Year"
      }
    ],
    "completeMessage": "Saturday, 20 February 2027.",
    "hint": "Scratch the gold seals to reveal our date."
  },
  "countdown": {
    "title": "Until our wedding",
    "isoDate": "2027-02-20T12:00:00+00:00",
    "timeZone": "Europe/London",
    "labels": [
      "Days",
      "Hours",
      "Minutes",
      "Seconds"
    ],
    "dateLine": "Saturday, 20 February 2027",
    "accessibleLabel": "Time until the wedding on 20 February 2027 at 12:00 pm, UK time",
    "completeMessage": "Our wedding day has arrived."
  },
  "events": [
    {
      "id": "wedding",
      "eyebrow": "The celebration",
      "name": "Wedding",
      "weekday": "Saturday",
      "date": "20 February 2027",
      "programme": [
        {
          "name": "Ceremony",
          "time": "12:00 pm"
        },
        {
          "name": "Breakfast",
          "time": "1:30 pm"
        }
      ],
      "venue": "Elmstead Court",
      "address": "The Walled Garden · Canterbury · Kent",
      "mapUrl": "https://www.google.com/maps/search/?api=1&query=Canterbury%2C%20Kent",
      "mapLabel": "View location",
      "calendarLabel": "Save to calendar",
      "invocation": "Holy Matrimony"
    }
  ],
  "labels": {
    "date": "Date",
    "time": "Programme",
    "venue": "Venue"
  },
  "gifts": {
    "eyebrow": "With all our hearts",
    "title": "Your presence is our blessing"
  },
  "prayer": {
    "enabled": true,
    "title": "May God bless this marriage",
    "text": "The Lord bless thee, and keep thee",
    "translation": "The Lord make his face shine upon thee, and be gracious unto thee.",
    "reference": "Numbers 6:24-25",
    "message": "Amen"
  },
  "wellWishes": {
    "eyebrow": "A beautiful beginning",
    "message": "We look forward to celebrating with you.",
    "signoff": "With love, Annabelle & Zachary"
  },
  "interface": {
    "muteMusic": "Mute music",
    "playMusic": "Play music",
    "musicUnavailable": "Music unavailable",
    "revealDate": "Reveal"
  },
  "brand": {
    "credit": "Crafted by Talvoco"
  },
  "pairsVerse": {
    "text": "Two are better than one",
    "translation": "because they have a good reward for their labour.",
    "reference": "Ecclesiastes 4:9"
  },
  "marriageVerse": {
    "text": "Set me as a seal upon thine heart",
    "translation": "as a seal upon thine arm: for love is strong as death.",
    "reference": "Song of Solomon 8:6"
  }
};
