/* ==========================================================
   GAMES — napravljeno u Script Update Editoru
   Najlakše je mijenjati sve kroz editor (Uvezi → izmijeni → Izvezi ZIP).
   ========================================================== */

const SITE = {
  "brand": "Script Update",
  "menuSubtitle": "Choose your game to get the latest scripts.",
  "footer": "Works on every device · Copy & Paste"
};

const GAMES = [
  {
    "id": "egg",
    "name": "Steal An Egg",
    "subtitle": "Here you can find the two latest scripts.",
    "icon": "images/egg-b7915f01.webp",
    "scripts": [
      {
        "title": "1 NO KEY SCRIPT",
        "code": "loadstring(game:HttpGet(\"https://raw.githubusercontent.com/tienkhanh1/spicy/main/Chilli.lua\"))()"
      }
    ]
  }
];
