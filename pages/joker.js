import Image from 'next/image';
import img from '../public/Images/joker.jpg';

function JokerPage() {
  return (
    <div>
      <Image
        src={img}
        placeholder="blur"
        alt="Joker"
        width={387}
        height={580.5}
      />
      {['01', '02', '03', '04'].map((path) => {
        return (
          <div key={path}>
            <Image
              src={`/Images/${path}.jpg`}
              alt="joker"
              width="500"
              height="420"
            />
          </div>
        );
      })}
    </div>
  );
}

export default JokerPage;
