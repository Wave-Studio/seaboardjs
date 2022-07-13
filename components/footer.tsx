import { ExternalLinkIcon } from "@heroicons/react/solid";

function Test() {
  return (
    <footer className="text-center my-4 text-[#3e3d34] text-sm flex-col sm:flex-row flex mx-auto mt-12">
      Made by Lukas#1969 and all the other{" "}
      <div className="flex mx-auto sm:pl-1"><a
        className="link"
        target="_blank"
        href="https://github.com/quick007/voidpet-wiki/graphs/contributors"
        rel="noopener noreferrer"
      >
        awesome collaborators
      </a>{" "}
      <ExternalLinkIcon className="w-5 h-5 ml-1"  /></div>
      
    </footer>
  );
}

export default Test;
