function Wrapper({children, className}) {
    return (
      <section className={`max-w-[1360px]  w-[90%] mx-auto ${className}`}>{children}</section>
    )
  }
  export default Wrapper