import timelineImg from "@/assets/blog/timeline.jpg";
import colorsImg from "@/assets/blog/colors.jpg";
import prepareImg from "@/assets/blog/prepare.jpg";

export interface BlogPost {
  title: string;
  slug: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "How Much Time Do You Really Need for Wedding Day Couple Portraits?",
    slug: "wedding-day-couple-portraits-timeline",
    category: "Wedding Planning",
    readTime: "4 min read",
    excerpt: "Avoid the rush on your big day! Here is exactly how to structure your wedding schedule to get breathtaking candid photos without missing your own party.",
    date: "July 28, 2026",
    author: "The Photocrafters team",
    image: timelineImg,
    content: `Planning your wedding day schedule can feel overwhelming, especially when trying to balance family rituals, guest greetings, and your couple portrait session. One of the most common questions couples ask is: *"How much time do our photographers actually need?"*

### The 45-Minute Golden Rule
For stunning, unhurried couple portraits, we recommend setting aside **45 to 60 minutes** of dedicated shooting time. This window allows you to:
* Relax and naturally settle into the camera presence without feeling rushed.
* Capture a diverse mix of grand architectural shots, intimate candid close-ups, and traditional portraits.
* Take a brief, quiet breather together away from the crowd before the main reception festivities begin.

### Why Candid Coverage Works Best
When you book an **8-hour photography and videography session**, the most memorable images aren't always posed—they happen between the moments. While standard portraits capture classic formal frames, **candid shooters** focus on real emotion: laughter during speeches, stolen glances, and joyful interactions with loved ones.

### Pro-Tip for Your Timeline
Schedule your couple portraits during **Golden Hour** (the last hour before sunset). The lighting is soft, warm, and cinematic—eliminating harsh shadows and giving your skin a natural, timeless glow in both your photo album and highlight film.`,
  },
  {
    title: "Best Colors to Wear for Haldi & Mehendi Photoshoots",
    slug: "best-colors-for-haldi-mehendi-photoshoots",
    category: "Styling & Aesthetics",
    readTime: "3 min read",
    excerpt: "Wondering what outfits look best on camera for pre-wedding celebrations? Discover the color palettes that make your photos pop.",
    date: "July 30, 2026",
    author: "The Photocrafters team",
    image: colorsImg,
    content: `Haldi and Mehendi ceremonies are the vibrant, high-energy heart of any wedding celebration. When planning your wardrobe for these 4-hour pre-event celebrations, your color choices play a major role in how vibrant your photos and social reels turn out.

### Winning Palettes for the Haldi Ceremony
While traditional yellow is the classic choice, monochromatic yellow outfits can sometimes blend into yellow floral decor. To stand out on camera:
* **Contrast with Greens & Maroons:** Pair yellow kurtas or sarees with emerald green or deep maroon draping.
* **Opt for Ivory or Off-White:** Wearing clean whites or off-whites creates an incredible visual contrast against the turmeric paste and colorful marigold backdrops.

### Standout Shades for Mehendi
Mehendi ceremonies often feature lush outdoor or floral garden setups. Best outfit tones include:
* **Pastel Pink & Peach:** Soft pastels create an elegant, romantic aesthetic that contrasts beautifully against henna greens.
* **Vibrant Magenta & Turquoise:** If you prefer bold colors, deep turquoise and magenta pop instantly in candid portraits and dance reels.

### Fabric Tip for Better Videography
Choose lightweight, flowing fabrics like organza, georgette, or raw silk. These textures catch the natural light beautifully during spins and twirly dance moments in your **highlights video**!`,
  },
  {
    title: "How to Prepare for Your Outdoor Pre-Wedding or Post-Wedding Shoot",
    slug: "prepare-outdoor-pre-wedding-post-wedding-shoot",
    category: "Pre-Wedding Guide",
    readTime: "5 min read",
    excerpt: "From outfit changes to posing anxiety, here is everything you need to know to make your 4-hour outdoor couple shoot effortless and cinematic.",
    date: "August 1, 2026",
    author: "The Photocrafters team",
    image: prepareImg,
    content: `Whether you are announcing your save-the-date or celebrating after the vows with a post-wedding shoot, a dedicated **4-hour outdoor session** gives you the freedom to tell your love story without wedding-day time pressure. Here is how to prepare for a breathtaking gallery.

### 1. Plan Two Distinct Outfits
A 4-hour window is ideal for **two outfit changes**:
* **Look 1: Casual & Playful:** Denim, breezy linen dresses, or comfortable modern wear—perfect for candid, movement-heavy shots like walking, laughing, or coffee date themes.
* **Look 2: Formal or Traditional:** A flowing gown, saree, or tailored suit for dramatic, editorial-style portraits during golden hour.

### 2. Forget About "Posing"
Many couples feel nervous in front of a lens. The secret to natural photos is focusing on activity rather than stiff poses. Walk together, whisper a joke, or focus on your surroundings. Professional candid photographers guide you through fluid prompts rather than rigid statuesque positions.

### 3. Timing is Everything
Start your shoot either in the early morning (sunrise to 8:30 AM) or late afternoon (3:30 PM to sunset). Avoiding midday sun ensures your photos have soft, flattering light and prevents squinting, giving you premium wall-worthy prints and calendars.`,
  },
];
