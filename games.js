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
    "scripts": [
      {
        "title": "1 NO KEY SCRIPT",
        "code": "loadstring(game:HttpGet(\"https://raw.githubusercontent.com/tienkhanh1/spicy/main/Chilli.lua\"))()"
      },
      {
        "title": "2 NO KEY SCRIPT",
        "code": "loadstring(game:HttpGet(\"https://raw.githubusercontent.com/miirandahub/loader/main/stealaeggs\"))()"
      }
    ]
  },
  {
    "id": "rivals",
    "name": "Rivals",
    "subtitle": "NEW Rivals Script No Key Silent Aim Aimbot Auto Leveling Rank Farm",
    "scripts": [
      {
        "title": "NO KEY SCRIPT",
        "code": "loadstring(game:HttpGet(\"https://api.luarmor.net/files/v3/loaders/2529a5f9dfddd5523ca4e22f21cceffa.lua\"))()"
      }
    ]
  },
  {
    "id": "blox-fruits",
    "name": "Blox Fruits ",
    "subtitle": "Blox Fruits Script No Key Halloween Event",
    "scripts": [
      {
        "title": "NO KEY SCRIPT",
        "code": "loadstring(game:HttpGet(\"https://flowauth.net/v1/loaders/Aqua-Hub.lua\"))()"
      }
    ]
  }
];
