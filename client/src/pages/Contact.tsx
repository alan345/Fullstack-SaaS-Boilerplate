import { PencilSimple } from "@phosphor-icons/react"

const Contact = () => {
  return (
    <div className="p-6">
      <div className="flex items-center">
        <PencilSimple className="text-3xl mr-3" />
        <h1>Contact</h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-2">
        <h2 className="mt-10">Got Questions? Just Want to Chat? Find a Bug?</h2>
        <p className="text-lg text-center mb-4">Love this? Hate this? Can`t decide? Either way, let me know!</p>

        <p className="text-md text-center mb-4">
          You can reach me at{" "}
          <a href="https://github.com/alan345/Fullstack-SaaS-Boilerplate/issues" className="link">
            this magical link
          </a>
        </p>
        <p className=" text-gray-600 text-center">Also, please add a star! It helps!</p>
        <a
          href="https://github.com/alan345/Fullstack-SaaS-Boilerplate"
          className="block py-2.5 px-4 rounded-sm transition hover:bg-gray-100 mt-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.shields.io/github/stars/alan345/Fullstack-SaaS-Boilerplate?style=for-the-badge"
            alt="GitHub"
          />
        </a>
      </div>
    </div>
  )
}
export default Contact
