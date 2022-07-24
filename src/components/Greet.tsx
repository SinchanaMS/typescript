type GreetProps = {
  text: string;
  videoCount: number;
};

export const Greet = (props: GreetProps) => {
  return (
    <div>
      <h2>Welcome to {props.text}</h2>
      <h2>You have so far watched {props.videoCount} videos.</h2>
    </div>
  );
};
