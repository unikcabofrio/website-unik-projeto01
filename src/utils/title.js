export default function Title({title,subtitle}) {
    return (
      <>
        <div style={{
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          margin:"1rem 0"
        }}>
          <h2 style={{
            fontSize:"3rem"
          }}>{title}</h2>
          <p style={{
            fontSize:"1rem",
            width:"60%",
            textAlign:"center"
          }}>{subtitle}</p>
        </div>
      </>
    )
  }