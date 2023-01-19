import { Link } from './Link'
import Twemoji from './Twemoji'

export function BuiltWith() {
  return (
    <div className="flex items-center space-x-1">
      <span className="mr-1 text-gray-500 dark:text-gray-400">Built with</span>
      <Twemoji emoji={'red-heart'} />{' '}
      <span className="text-gray-400">
        by <Link href="https://the-flow-wizard.art">the flow wizard</Link>
      </span>
    </div>
  )
}
