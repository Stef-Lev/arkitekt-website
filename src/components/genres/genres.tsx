'use client';
import content from '@/content/content';

const genres = content.aboutPage.genres;

const Genres = () => {
  return (
    <div>
      <h5 className="p-4 text-center text-white text-[44px]">GENRES</h5>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {genres.map((genre, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-6 dark-metallic-tile rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:scale-105"
          >
            <div className="mb-2 text-5xl text-white">{genre.icon}</div>
            <p className="text-white text-center text-[clamp(16px, 4vw, 24px)]">
              {genre.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Genres;
