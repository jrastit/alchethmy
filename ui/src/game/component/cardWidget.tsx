import Image from 'react-bootstrap/Image'

const format = (num : number | string) =>
    String(num).replace(/(?<!\..*)(\d)(?=(?:\d{3})+(?:\.|$))/g, '$1 ')

const CardWidget = (props : {
  family : number
  name : string
  mana : number
  level : number
  attack : number
  life : number
  speed : number
  description : string
  exp: number
}) => {

  let familyColor="black"
  let familyName=""
  switch (props.family){
    case 1:
      familyColor="#bbddaa"
      familyName="Air"
    break
    case 2:
      familyColor="#ddaa22"
      familyName="Crypto"
    break
    case 3:
      familyColor="#852211"
      familyName="Earth"
    break
    case 4:
      familyColor="#adadad"
      familyName="Ether"
    break
    case 5:
      familyColor="#3377dd"
      familyName="Water"
    break
    case 6:
      familyColor="#cc1111"
      familyName="Fire"
    break
    default:
      familyColor="pink"
    break
  }

  let levelColor="black"
  switch (props.level){
    case 0:
      levelColor="black"
    break
    case 1:
      levelColor="#202020"
    break
    case 2:
      levelColor="#404040"
    break
    case 3:
      levelColor="#996515"
    break
    case 4:
      levelColor="#daa520"
    break
    case 5:
      levelColor="#ffd700"
    break
    default:
    break
  }

  const url = "card/"+ familyName + "_"+ props.name.split(" ").join("") + ".jpg"

  return (

    <div
    style={{
      borderRadius:"1.2em",
      padding:"0.75em",
      backgroundColor:familyColor,
      width:"12em",
      height:"18em",
      //marginBottom:"2em",
      color:"white",
      fontWeight:"bolder",
      marginLeft:"auto",
      marginRight:"auto",
    }}>
    <div style={{
      borderRadius:"0.5em",
      width:"10.5em",
      height:"16.5em",
      backgroundColor:levelColor,
      paddingLeft:"0.5em",
      paddingRight:"0.5em",
    }}>
      <Image src={url} style={{
        marginTop:"1.2em",
        borderRadius:"0.5em",
        width:"9.5em",
        height:"7em",
        pointerEvents: 'none',
      }}/>
      <div style={{
        marginTop:"-8.7em",
        marginBottom:"7em",
      }}>
        <div style={{
          marginTop:"-1em",
          textAlign:"center",
          border:"thin solid #303437",
          borderRadius:"0.5em",
          backgroundColor:"rgba(0, 0, 0, 0.50)"
        }}>{props.name}</div>
        <div style={{
          marginTop:"-2em",
          marginBottom:"-2em",
          marginLeft:"-1em",
          width:'2em',
        }}>
        <div style={{
          textAlign:"center",
          width:"2em",
          height:"2em",
          paddingTop:"0.2em",
          border:"thin solid #303437",
          borderRadius:"1em",
          display:"inline-block",
          backgroundColor:"#AAFFAA"
        }}>{props.speed}</div>
        </div>
        <div style={{
          marginTop:"-1em",
          marginBottom:"-1em",
        }}>
        <div style={{
          marginLeft:"8.5em",
          textAlign:"center",
          width:"2em",
          height:"2em",
          paddingTop:"0.2em",
          border:"thin solid #303437",
          borderRadius:"1em",
          display:"inline-block",
          backgroundColor:"#341948"
        }}>{props.mana}</div>
        </div>
      </div>
      <Image fluid src={url} style={{
        marginTop:"1.2em",
        borderRadius:"0.5em",
        width:"9.5em",
        height:"7em",
        transform: "scaleY(-1)",
        opacity:".01",
        pointerEvents: 'none',
      }}/>
      <div style={{
        marginTop:"-8em",
        marginBottom:"-.7em",
        display:"flex",
        marginRight:"-1em",
        zIndex:"1",
      }}>
      <div style={{
        marginLeft:"-1em",
        textAlign:"center",
        width:"2em",
        height:"2em",
        paddingTop:"0.2em",
        border:"thin solid #303437",
        borderRadius:"1em",
        flexBasis:"2em",
        backgroundColor:"#DF362D"
      }}>{props.attack}</div>
      <div style={{
        flexGrow:"1",

      }}>
      </div>
      <div style={{
        textAlign:"center",
        width:"2em",
        height:"2em",
        paddingTop:"0.2em",
        border:"thin solid #303437",
        borderRadius:"1em",
        flexBasis:"2em",
        backgroundColor:"#4c5270"
      }}>{props.life}</div>
      </div>
      <div style={{
        height:"7.5em",
      }}>
        <div style={{
          textAlign:"center",
          border:"thin solid #303437",
          borderRadius:"0.5em",
          backgroundColor:familyColor,
          fontWeight:"normal",
        }}>
          {props.description}
        </div>
      </div>
      <div style={{
        marginRight:"2.5em",
        marginLeft:"2.5em",
        textAlign:"center",
        border:"thin solid #303437",
        borderRadius:"1em",
        backgroundColor:"white",
        color:"black",

      }}>
      <div style={{
        fontSize:".7em",
        marginTop:"-.2em",
        marginBottom:"-.2em",
        fontWeight:"normal",
        }}>
      {format(props.exp)}
      </div>
      </div>

    </div>
    </div>

  )
}

export default CardWidget
