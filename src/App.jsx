import tw from 'tailwind-styled-components'
const Top = tw.p`
text-lg
font-semibold
`

export default function App() {
  return (
    <>
      <figure className="md:flex bg-gray-100 rounded-xl p-8 md:p-0">
        <img className="w-32 h-32 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://www.tailwindcss.cn/_next/static/media/sarah-dayan.a8ff3f1095a58085a82e3bb6aab12eb2.jpg" alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <Top>
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </Top>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-cyan-600">
              Sarah Dayan
            </div>
            <div className="text-gray-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>
    </>
  )
}
