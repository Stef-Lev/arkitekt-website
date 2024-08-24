export default function Home() {
  return (
    <div className="flex justify-center">
      <iframe
        className="w-full md:w-[600px] lg:w-[60vw]"
        src="https://open.spotify.com/embed/artist/4K9zGLF4CT5HYDNQ9pT3Y8?utm_source=generator&theme=0"
        width="100%"
        height="352"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
}
