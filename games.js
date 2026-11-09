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
  },
  {
    "id": "rivals",
    "name": "Rivals ",
    "subtitle": "Here you can find the latest scripts.",
    "icon": "images/rivals-9ca629c6.webp",
    "scripts": [
      {
        "title": " NO KEY SCRIPT",
        "code": "loadstring(game:HttpGet(\"https://api.luarmor.net/files/v3/loaders/2529a5f9dfddd5523ca4e22f21cceffa.lua\"))()"
      }
    ]
  },
  {
    "id": "blox-fruits",
    "name": "Blox Fruits",
    "subtitle": "Here you can find the latest scripts.",
    "icon": "images/blox-fruits-11f0655a.webp",
    "scripts": [
      {
        "title": "1 NO KEY SCRIPT",
        "code": "loadstring(game:HttpGet(\"https://flowauth.net/v1/loaders/Aqua-Hub.lua\"))()"
      }
    ]
  }
];
