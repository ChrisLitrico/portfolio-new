type ImageClipBoxProps = {
  src: string
  clipClass: string
}

const ImageClipBox = ({clipClass, src} : ImageClipBoxProps) => {
  return(
    <div className={clipClass}>
      <img 
        src={src}
      />
  </div>
  )
}

export default ImageClipBox
