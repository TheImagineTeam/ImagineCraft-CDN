function getRandomImage() {
    const images = [
        'http://www.bhmpics.com/wallpapers/blake_belladonna_rwby-1920x1080.jpg',
        'http://www.bhmpics.com/wallpapers/aion_anime_fantasy_love-1920x1200.jpg',
        'http://www.bhmpics.com/wallpapers/komachi_onozuka-1920x1200.jpg',
        'http://www.bhmpics.com/wallpapers/sankarea_girl_with_umbrella-1920x1200.jpg',
        'http://www.bhmpics.com/wallpapers/anime_bunnygirl-1920x1080.jpg',
        'http://www.bhmpics.com/wallpapers/anime_santa_girl-1920x1200.jpg',
        'http://www.bhmpics.com/wallpapers/brunettes_birds_anime_girl-1920x1200.jpg',
        'http://www.bhmpics.com/wallpapers/pink_anime_girl_with_guitar-1920x1200.jpg',
        'http://www.bhmpics.com/wallpapers/cute_anime_girl_pink_hair-1680x1050.jpg',
        'http://www.bhmpics.com/wallpapers/beautiful_anime_girl_and_butterfly-1680x1050.jpg',
        'http://www.bhmpics.com/wallpapers/anime_neko_girls-1920x1080.jpg',
        'http://www.bhmpics.com/wallpapers/anime_girl_warrior-1680x1050.jpg',
        'http://www.bhmpics.com/wallpapers/anime_girl_dress-1920x1440.jpg',
        'http://www.bhmpics.com/wallpapers/anime_girl_butterfly_wings-1680x1050.jpg',
        'http://www.bhmpics.com/wallpapers/anime_fox_girl-1920x1080.jpg',
        'http://www.bhmpics.com/wallpapers/anime_boy_girl_cat_in_nature_night-1920x1080.jpg'
    ];
    let image = images[Math.floor(Math.random() * images.length)];
    console.log(image);

    const setBackground = (image) => {
        document.getElementById("randomImage").style.background = "url('" + image + "')";
    };
    setBackground(image);
}
