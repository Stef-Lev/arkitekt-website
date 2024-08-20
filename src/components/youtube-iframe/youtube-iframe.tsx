interface Props {
  url: string;
}
const YoutubeIframe = ({ url }: Props) => {
  return (
    <iframe
      className="aspect-video w-full rounded-xl"
      src={url}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  );
};

export default YoutubeIframe;
