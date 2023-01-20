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
import IntroGallery from '~/components/homepage/IntroGallery'

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
            <IntroGallery />
            <p className="text-neutral-900 my-4 dark:text-neutral-200">
              For Phoenix Fire Convention 2023, I would like to make a series of special edition
              avatars in line with the theme:
              <br />
              Wizards and witches.
            </p>
            <p className="text-neutral-900 my-4 dark:text-neutral-200">
              The Phoenix 2023 edition will be different from my usual avatar process. Instead of
              very individual avatars, I would like each avatar to belong in a School of Magic.
              <br />
              <br />A <Twemoji emoji="graduation-cap" /> of magic would be something like Hogwarts
              or Beauxbatons Academy of Magic.
            </p>
            <p className="text-neutral-900 my-4 dark:text-neutral-200">
              Each school of magic will have their own aesthetic, uniforms, and magic style, which
              are shared among all members of the group.
            </p>
            <p className="text-neutral-900 my-4 dark:text-neutral-200">
              Anyone who is having avatars made can choose from the available schools of magic, or
              even establish their own. It doesn’t specifically have to be a school. It can be a
              magical organization that has a common dress code: a coven, church, hermetic order,
              wiccan circle, clan, cult etc.
            </p>
            <p className="text-neutral-900 my-4 dark:text-neutral-200">
              For example, the "Frostland Mage-Warrior Clan”, or "Order of Light” or "Okamoto's
              School of Wizardry” or "Cult of Zx’tzrchukt" members might wear something like this,
              respectively: Avatars from each School of Magic will have a single uniform. There can
              be slight variations like changing the colors of accents or changing some accessories,
              but the base look will be the same. A school could have separate houses within it
              (similar to Slytherin, Gryffindor etc), or different ranks (students and teachers) who
              will have variations of the same theme.
            </p>
            <p className="text-neutral-900 my-4 dark:text-neutral-200">
              Due to limits of time and resources, for the first phase, I am only making 20 avatars,
              then if these seem to be going well and I have time, I’ll try to go for an additional
              20. And I would insist on a donation to the Phoenix funds if you have an avatar made
              for this set. You will be supporting this amazing convention and getting a pretty cool
              avatar as well
            </p>
            <p className="text-neutral-900 my-4 dark:text-neutral-200">
              People with existing avatars have a bit of an advantage because I already have their
              likeness and they don’t count towards the limit.
            </p>
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-neutral-200">
              <Twemoji emoji="sparkles" /> Making your own Avatar
            </h2>
            <p className="text-neutral-900 my-4 dark:text-neutral-200">
              These are the steps to having your avatar made:
            </p>
            <h4 className="text-2xl font-bold text-neutral-900 dark:text-neutral-200">
              Choose a School of Magic
            </h4>
            <p className="text-neutral-900 my-4 dark:text-neutral-200">
              Choose to join a{' '}
              <a href="https://docs.google.com/document/d/1lMG5vI7grKLpCfY8WWdn5Nmt8ZItGI95F50pZ_93FEY/edit?usp=share_link">
                School of Magic
              </a>{' '}
              or establish your own. To establish your own, skip to step 3.
            </p>
            <p className="text-neutral-900 my-4 dark:text-neutral-200">
              Each school has a theme and uniform. Your avatar will be wearing the costumes of the
              school and using its magic colors as determined by the school founders.
            </p>
            <p>
              ... to be continued
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
