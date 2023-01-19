import clsx from 'clsx'

export function Greeting() {
  let className = clsx(
    'bg-gradient-to-r from-yellow-600 to-red-600 dark:bg-gradient-to-l dark:from-emerald-500 dark:to-lime-600',
    'mb-8 bg-clip-text text-4xl font-extrabold leading-[60px] tracking-tight text-transparent md:text-5xl md:leading-[86px]'
  )
  return (
    <div className={className}>
      Hello wizards and wiches! <i className="twa twa-waving-hand"></i>
    </div>
  )
}
