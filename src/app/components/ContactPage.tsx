"use client";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import ScrollReveal from "./ScollReveal";
import CopyButton from "./CopyButton";

export default function ContactPage() {
  return (
    <>
      <div className="bg-dark-1  w-screen flex flex-col items-center justify-center pt-[35vh]">
        <ScrollReveal animationDirection="fade">
          <div className=" w-full flex flex-col items-center h-[60vh] ">
            <div className="text-5xl font-bold text-dark-6 mb-[5vh]">
              Get in touch
            </div>
            <div className="text-dark-5 text-sm mb-[3vh] text-center w-[50vw]">
              I'm always excited to make new connections, hear about new ideas,
              and explore potential opportunities, so please feel free to reach
              out to me at
            </div>
            <div>
              <CopyButton />
            </div>
            <div>
              <a
                href="mailto:jeung.pavee@gmail.com"
                target="_blank"
                className="bg-dark-2 hover:bg-dark-4 px-6 py-3 rounded-md text-dark-6 font-light text-sm"
              >
                Say Hello -{">"}
              </a>
            </div>
          </div>
        </ScrollReveal>

        <div className="flex flex-row w-full mt-[8vh]">
          <div className="flex-1 h-[30vh] flex flex-col">
            <div className="px-[5vw] text-dark-6">About me</div>
            <div className="font-light px-[5vw] text-dark-5 mt-2">
              I'm Ming, a computer engineering student.
            </div>
            <div className="px-[5vw] mt-2">
              <span>
                <a href="https://github.com/MingPV">
                  <GitHubIcon color="info" />
                </a>
              </span>
              <span style={{ paddingLeft: 5 }}>
                <a href="https://www.linkedin.com/in/pavee-jeungtanasirikul-9395362ba/">
                  <LinkedInIcon color="info" />
                </a>
              </span>
              <span style={{ paddingLeft: 5 }}>
                <a href="https://www.facebook.com/profile.php?id=100009174193658">
                  <FacebookIcon color="info" />
                </a>
              </span>
              <span style={{ paddingLeft: 5 }}>
                <a href="https://www.instagram.com/i.muming?igsh=a3A4eDN1amtlaWhp&utm_source=qr">
                  <InstagramIcon color="info" />
                </a>
              </span>
            </div>
          </div>
          <div className="flex-1 h-[30vh] flex flex-row">
            <div className="flex flex-col">
              <div className="text-lg font-bold text-dark-5">Social</div>
              <a href="https://github.com/MingPV">
                <div className="text-dark-4">Github</div>
              </a>
              <a href="https://www.linkedin.com/in/pavee-jeungtanasirikul-9395362ba/">
                <div className="text-dark-4">Linkedin</div>
              </a>
              <a href="https://www.instagram.com/i.muming?igsh=a3A4eDN1amtlaWhp&utm_source=qr">
                <div className="text-dark-4">Instagram</div>
              </a>
              <a href="mailto:jeung.pavee@gmail.com" target="_blank">
                <div className="text-dark-4">Mail</div>
              </a>
            </div>
            <div className="flex flex-col ml-[15vw]">
              <div className="text-lg font-bold text-dark-5">Page</div>
              <div className="text-dark-4">Home</div>
              <div className="text-dark-4">About</div>
              <div className="text-dark-4">Projects</div>
              <div className="text-dark-4">Education</div>
              <div className="text-dark-4">Contact</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
