import Loader from '@/components/loader/loader';

const Loading = () => {
  return (
    <div className="h-screen">
      <Loader size={200} animation="rotate" />
    </div>
  );
};

export default Loading;
