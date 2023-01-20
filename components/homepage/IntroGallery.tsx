import { FC, useState } from 'react'
import { Gallery } from 'react-grid-gallery'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const images = [
  { src: '/static/images/school/Georg.jpg', width: 2550, height: 3400, caption: 'Georg' },
  { src: '/static/images/school/Alea08_.png', width: 1660, height: 2213, caption: 'Alea' },
  {
    src: '/static/images/school/Anki_withBackground.png',
    width: 1660,
    height: 2213,
    caption: 'Anki',
  },
  {
    src: '/static/images/school/Christian_Unger.png',
    width: 1660,
    height: 2213,
    caption: 'Christian',
  },
  { src: '/static/images/school/Ernest.png', width: 1660, height: 2213, caption: 'Ernest' },
  {
    src: '/static/images/school/Florian_Pyromancer_full.png',
    width: 1660,
    height: 2213,
    caption: 'Florian',
  },
  { src: '/static/images/school/Gabo.png', width: 1660, height: 2213, caption: 'Gabo' },
  { src: '/static/images/school/JuliaClose06.png', width: 1660, height: 2213, caption: 'Julia' },
  { src: '/static/images/school/Luke.png', width: 1660, height: 2213, caption: 'Luke' },
  { src: '/static/images/school/Mick05.png', width: 1660, height: 2213, caption: 'Mick' },
  { src: '/static/images/school/Renita.png', width: 1660, height: 2213, caption: 'Renita' },
  { src: '/static/images/school/ThorbenFold.png', width: 1660, height: 2213, caption: 'Thorben' },
]

const IntroGallery: FC = () => {
  const [index, setIndex] = useState(-1)

  const currentImage = images[index]
  const nextIndex = (index + 1) % images.length
  const nextImage = images[nextIndex] || currentImage
  const prevIndex = (index + images.length - 1) % images.length
  const prevImage = images[prevIndex] || currentImage

  const handleClick = (index: number, item: any) => setIndex(index)
  const handleClose = () => setIndex(-1)
  const handleMovePrev = () => setIndex(prevIndex)
  const handleMoveNext = () => setIndex(nextIndex)

  return (
    <div>
      <Gallery images={images} onClick={handleClick} enableImageSelection={false} />
      {!!currentImage && (
        /* @ts-ignore */
        <Lightbox
          mainSrc={currentImage.src}
          imageTitle={currentImage.caption}
          mainSrcThumbnail={currentImage.src}
          nextSrc={nextImage.src}
          nextSrcThumbnail={nextImage.src}
          prevSrc={prevImage.src}
          prevSrcThumbnail={prevImage.src}
          onCloseRequest={handleClose}
          onMovePrevRequest={handleMovePrev}
          onMoveNextRequest={handleMoveNext}
        />
      )}
    </div>
  )
}

export default IntroGallery
