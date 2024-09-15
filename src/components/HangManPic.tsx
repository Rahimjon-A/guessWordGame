
const HEAD = (
  <div
    style={{
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      border: '10px solid black',
      position: 'absolute',
      top: '50px',
      right: "-30px"
    }}
  />
);
const BODY = (
  <div
    style={{
      width: '10px',
      height: '100px',
      backgroundColor: "black",
      position: 'absolute',
      top: '120px',
      right: "0"
    }}
  />
);
const RIGHT_ARM = (
  <div
    style={{
      width: '100px',
      height: '10px',
      backgroundColor: "black",
      position: 'absolute',
      top: '150px',
      right: "-100px",
      rotate: "-30deg",
      transformOrigin: "left bottom"
    }}
  />
);
const LEFT_ARM = (
  <div
    style={{
      width: '100px',
      height: '10px',
      backgroundColor: "black",
      position: 'absolute',
      top: '150px',
      right: "10px",
      rotate: "30deg",
      transformOrigin: "right bottom"
    }}
  />
);
const LEFT_LEG = (
  <div
    style={{
      width: '100px',
      height: '10px',
      backgroundColor: "black",
      position: 'absolute',
      top: '210px',
      right: "0px",
      rotate: "-50deg",
      transformOrigin: "right bottom"
    }}
  />
);
const RIGHT_LEG = (
  <div
    style={{
      width: '100px',
      height: '10px',
      backgroundColor: "black",
      position: 'absolute',
      top: '210px',
      right: "-90px",
      rotate: "50deg",
      transformOrigin: "left bottom"
    }}
  />
);

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]

type hangmanProps = {
  numberOfGuesses: number
}

const HangManPic = ({numberOfGuesses} : hangmanProps) => {
  return (
    <div style={{ position: 'relative' }}>
      { BODY_PARTS.slice(0, numberOfGuesses)}
      <div
        style={{
          width: '10px',
          height: '50px',
          backgroundColor: 'black',
          position: 'absolute',
          top: '0',
          right: '0',
        }}
      />
      <div
        style={{ width: '200px', height: '10px', marginLeft: '120px', backgroundColor: 'black' }}
      />
      <div
        style={{ height: '400px', width: '10px', marginLeft: '120px', backgroundColor: 'black' }}
      />
      <div style={{ height: '10px', width: '250px', backgroundColor: 'black' }} />
    </div>
  );
};

export default HangManPic;
