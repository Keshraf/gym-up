import Navigation from "../components/Navigation";
import Features from "../components/Features";
import { FillButton, OutlineButton } from "../components/ui/Button";
import LandingImage from "../public/images/landingImage.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const onClickHandler = () => {};
  return (
    <>
      <div className="w-9/12 flex flex-col mx-auto relative">
        <Navigation />
        <h1 className="font-prim text-sec mb-4 text-xl">Gym Up</h1>
        <div className="flex flex-row items-center">
          <h2 className="w-4/12 h-fit font-prim text-5xl wrap mr-12 leading-tight">
            Take your gym to the next level.
          </h2>
          <div className="grow h-px border-sec border-dotted border border-x-0"></div>
        </div>
        <Features />
        <div className="flex flex-row gap-4 mt-14">
          <Link href="/login">
            <a>
              <FillButton className="py-3 font-semibold px-10">
                Start Scaling
              </FillButton>
            </a>
          </Link>
          <Link href="/login">
            <a>
              <OutlineButton className="py-3 font-semibold px-10">
                Book a Demo
              </OutlineButton>
            </a>
          </Link>
        </div>
        <footer className="w-4/12"></footer>
      </div>
      <div className="absolute right-0 -bottom-24 bg-white w-5/12 h-4/6">
        <Image
          className="absolute -bottom-8 right-0"
          layout="fill"
          src={LandingImage}
          alt="gym"
        />
      </div>
    </>
  );
}
