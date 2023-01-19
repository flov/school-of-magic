import { PageSeo } from 'components/SEO'
import { BlogLinks } from '~/components/homepage/BlogLinks'
import { FeaturedPosts } from '~/components/homepage/FeaturedPosts'
import { Greeting } from '~/components/homepage/Greeting'
import { Heading } from '~/components/homepage/Heading'
import { ShortDescription } from '~/components/homepage/ShortDescription'
import { TypedBios } from '~/components/homepage/TypedBios'
import { ProfileCard } from '~/components/ProfileCard'
import { Twemoji } from '~/components/Twemoji'
import { siteMetadata } from '~/data/siteMetadata'
import { getAllFilesFrontMatter } from '~/libs/mdx'
import type { BlogFrontMatter } from '~/types'
import Image from 'next/image'

export function getStaticProps() {
  let posts = getAllFilesFrontMatter('blog')
  return { props: { posts } }
}

export default function Home({ posts }: { posts: BlogFrontMatter[] }) {
  return (
    <>
      <PageSeo title={siteMetadata.title} description={siteMetadata.description} />
      <div className="mt-2 divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 md:my-4 md:space-y-5 md:pb-8">
          <Greeting />
          <div className="text-lg leading-8 text-gray-600 dark:text-gray-400">
            <Heading />
          </div>
        </div>
      </div>
    </>
  )
}
