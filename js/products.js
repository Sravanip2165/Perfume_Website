
// js/products.js
const products = {
  // MEN
      1: { name: "Denver Perfume", price: 299, img: "images/denverhamil.jpg", desc: "Elegant Rose Eau de Parfum" },
      2: { name: "Dior Perfume", price: 254, img: "images/diorsa.jpg", desc: " Dior Sauvage,A refreshing blend of citrus and woody notes." },
      3: { name: "ENVY Men Bold", price: 560, img: "images/envybold.jpg", desc: "Envy Men Bold Perfume -60ML,A bold fragrance with oriental and spicy tones." },
      4: { name: "Denver Perfume", price: 499, img: "images/denver.jpg", desc: "Luxury Oud Scent" },
      5: { name: "BellaVita Elite Man Perfume", price: 259, img: "images/bvEt.jpg", desc: "BellaVita Organic Elite Man -100ML | LongLasting Fragrance" },
      6: { name: "BellaVita Men CEO Perfume", price: 216, img: "images/BeCeo.jpg", desc: "BellaVita CEO Man -100M" },
      7: { name: "ENVY Perfume", price: 216, img: "images/envy.png", desc: "ENVY Men Natural Spary | LongLasting Fragrance." },
      8: { name: "Axe Men Perfume", price: 259, img: "images/axe.jpg", desc: "Axe Men Perfume " },
      9: { name: "Denver Perfume", price: 350, img: "images/den.jpg", desc: "Denver long lasting fragrance " }, 
      10: { name: "BellaVita Skai Aquatic", price: 259, img: "images/denvi.jpg", desc: "BellaVita Luxury Skai Aquatic Men Perfume  -100ML | LongLasting Fragrance" },
      11: { name: "Signature Men Perfume", price: 450, img: "images/signature.jpg", desc: "Signature Men Perfume .LongLasting Perfume" },
      
      
      
      50: { name: "Palm perfume", price: 340, img: "images/palm.jpg", desc: "Palm BodyLovin' Vanilla Caramello" },
      51: { name: "Skinn perfume ", price: 1516, img: "images/skinn.jpg", desc: "Skinn by Titan Sheer perfume for women" },
      52: { name: "Hotmess perfume", price: 765, img: "images/hotmess.jpg", desc: "Bellavita Luxury Hot Mess Perfume for women" },
      53: { name: "Envy for Women", price: 228, img: "images/envy.jpg", desc: "Envy natural Spray Women Perfume" },
      54: { name: "DressBerry ", price: 399, img: "images/dressberry.jpg", desc: "DressBerry Women Blush Fragrance" },
      55: { name: "ENVY OceanMusk", price: 259, img: "images/oceanmusk.jpg", desc: "ENVY Natural OceanMusk Spary for women" },
      56: { name: "Skin Celeste Perfume", price: 493, img: "images/skinn celeste.jpg", desc: "Skinn by Titan Celeste Perfume for Women" },
      57: { name: "Skinn tales Perfume", price: 689, img: "images/tales.webp", desc: "Skinn Tales Vanilla Perfume for Women" },
      58: { name: "Palm BodyLovin' perfume", price: 280, img: "images/plum tulips.avif", desc: "Plum BodyLovin' Tuulips Don't lie perfume" },
      59: { name: "Layers Wottagirl perfume", price: 228, img: "images/WaMi.webp", desc: "Layer's Wottagirl Mystic Island Fragrance for Women" },
      60: { name: "skinn Nector Perfume", price: 3295, img: "images/skinn nectar.webp", desc: "SKINN Noura Nectar Eau De Parfum for her 100 ml" },
      61: { name: "Bellavita White OUD", price:575, img: "images/bellavita white odu.webp", desc: "BellaVita Luxury White OUD - 100ML" },
      62: { name: "BellaVita Senorita perfume", price: 493, img: "images/bellavita senorita.jpg", desc: "BellaVita Organic Women Senorita Lond-Lasting Women Perfume" },
      63: { name: "Wottagirl Secret Crush", price: 228, img: "images/Wasv.jpg", desc: "Layer'r Wottagirl Secret Crush Fragrance for Women" },
      64: { name: "Wottagirl Vaniila Twist", price: 228, img: "images/waVa.webp", desc: "Layer'r Wottagirl Vanilla Twist Fragrance for Women" },
      65: { name: "BellaVita Date Perfume", price: 575, img: "images/bellavite date women.webp", desc: "BellaVita Luxury Date Women Perfume" },
      66: { name: "PLUM Hawaiin Rumba", price: 663, img: "images/pulm hawaiin.webp", desc: "PULM BodyLovin; Hawaiian Rumba for Women" },


      100: { name: "Chanel Women Perfume", price: 16750, img: "images/coconair.webp", desc: "CHANEL COCO NOIR Women perfume" },
      101: { name: "LouicVitton", price: 38000, img: "images/nomade.webp", desc: "Louis Vuitton Ombre Nomade Perfume" },
      102: { name: "Chanel CoCo Mademoiselle", price: 12350, img: "images/maidmosile.jpg", desc: "CHANEL COCO MADEMOISELLE women perfume" },
      103: { name: "Clive Men Perfume", price: 43733, img: "images/cliven.webp", desc: "Clive Christian No. 1 Masculine Parfum" },
      104: { name: "LouicVitton Men Perfume ", price: 9000, img: "images/LVpacific.webp", desc: "LOUIS VUITTON Pacific Chill Green. Size 100ml" },
      105: { name: "Dior Men Perfume", price: 10000, img: "images/diorsa.jpg", desc: "Dior Men Perfume Vanilla Dreams" },
      106: { name: "Tom Ford Men Perfume", price: 57500, img: "images/tom_ford.webp", desc: "Tom Ford Tobacco Vanille Eau de Parfum" },
      107: { name: "Carolina Herrera Women Perfume", price: 5640, img: "images/goodgirl.webp", desc: "Carolina Herrera Good Girl Eau De Parfum" },
      108: { name: "Yves Saint Laurent Men Perfume", price: 2277, img: "images/saint.webp", desc: "Yves Saint Laurent Mon Paris Eau De Parfum" },
      109: { name: "Giorgio Men Perfume", price: 10543, img: "images/giorigo.webp", desc: "Giorgio Armani Acqua Di Gio Profumo Parfum For Men" },
      110: { name: "Roja Women Perfume", price: 4300, img: "images/roja.webp", desc: "ROJA 51 EDITION SPECIALE 100 ml" },
      111: { name: "Gucci Women Perfume", price:12100, img: "images/gucci.webp", desc: "Gucci Bloom Eau De Parfum for Women" },
      112: { name: "Afan Men Perfume", price: 3085, img: "images/afan.webp", desc: "Afnan 9PM For Men" },
      113: { name: "BellaVita Men Perfume", price: 2056, img: "images/bellavite.jpg", desc: "Vanilla Dreams Men Perfume" },
     

  

};
