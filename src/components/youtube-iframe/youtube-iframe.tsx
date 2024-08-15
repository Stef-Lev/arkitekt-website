interface Props {
  url: string;
}
const YoutubeIframe = ({ url }: Props) => {
  return (
    <div>
      <iframe
        className="w-full h-full rounded-xl"
        src={url}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default YoutubeIframe;
